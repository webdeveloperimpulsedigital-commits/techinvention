import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface DNAHelixProps {
    align?: 'left' | 'right';
    className?: string;
    height?: number;
    rotation?: number;
}

const DNAHelixTransition: React.FC<DNAHelixProps> = ({
    align = 'right',
    className = '',
    height = 900,
    rotation
}) => {
    // If align is right, it slants left (-35deg). If left, it slants right (35deg).
    const defaultRotation = align === 'right' ? -35 : 35;
    const finalRotation = rotation !== undefined ? rotation : defaultRotation;

    const width = 140;
    const frequency = 2.5; // Waves
    const numHalfTwists = Math.ceil(frequency * 2);
    const pointsPerTwist = 15; // resolution of curve
    const rungsPerTwist = 6;

    const colorBlue = "#1c54a3";
    const colorGreen = "#5a8327";

    // Build the segments
    const segments = useMemo(() => {
        const segs = [];
        for (let i = 0; i < numHalfTwists; i++) {
            const startProgress = i / (frequency * 2);
            const endProgress = Math.min((i + 1) / (frequency * 2), 1);

            // Generate Path D strings for this segment
            let d1 = '';
            let d2 = '';

            for (let j = 0; j <= pointsPerTwist; j++) {
                const p = startProgress + (j / pointsPerTwist) * (endProgress - startProgress);
                const y = p * height;
                const phase1 = p * Math.PI * 2 * frequency;
                const phase2 = phase1 + Math.PI;
                const x1 = width / 2 + Math.sin(phase1) * (width / 3.5);
                const x2 = width / 2 + Math.sin(phase2) * (width / 3.5);

                if (j === 0) {
                    d1 += `M ${x1} ${y} `;
                    d2 += `M ${x2} ${y} `;
                } else {
                    d1 += `L ${x1} ${y} `;
                    d2 += `L ${x2} ${y} `;
                }
            }

            // Generate rungs for this segment
            const rungs = [];
            if (i < numHalfTwists - 1 || endProgress === 1) {
                for (let r = 0; r < rungsPerTwist; r++) {
                    const p = startProgress + (r / rungsPerTwist) * (endProgress - startProgress);
                    if (p === startProgress && i > 0) continue;
                    const y = p * height;
                    const phase1 = p * Math.PI * 2 * frequency;
                    const phase2 = phase1 + Math.PI;
                    const x1 = width / 2 + Math.sin(phase1) * (width / 3.5);
                    const x2 = width / 2 + Math.sin(phase2) * (width / 3.5);
                    rungs.push({ x1, x2, y, progress: p });
                }
            }

            const strand1Front = i % 2 === 0;

            segs.push({
                index: i,
                strand1Path: d1,
                strand2Path: d2,
                rungs,
                strand1Front,
                startProgress,
                endProgress,
            });
        }
        return segs;
    }, [height, width, frequency, pointsPerTwist, rungsPerTwist, numHalfTwists]);

    const alignClass = align === 'right'
        ? "right-[5%] md:right-[10%] lg:right-[15%] origin-top pr-0"
        : "left-[5%] md:left-[10%] lg:left-[15%] origin-top pl-10";

    return (
        <div
            className={`hidden lg:block absolute top-0 ${alignClass} w-[140px] z-[0] pointer-events-none drop-shadow-2xl opacity-90 ${className}`}
            style={{ height: `${height}px`, transform: `rotate(${finalRotation}deg)` }}
        >
            <motion.svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1, margin: "100px 0px -20% 0px" }}
            >
                <defs>
                    <linearGradient id="dnaGradBlue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={colorBlue} stopOpacity="0" />
                        <stop offset="5%" stopColor={colorBlue} stopOpacity="1" />
                        <stop offset="85%" stopColor={colorBlue} stopOpacity="1" />
                        <stop offset="100%" stopColor={colorBlue} stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="dnaGradGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={colorGreen} stopOpacity="0" />
                        <stop offset="5%" stopColor={colorGreen} stopOpacity="1" />
                        <stop offset="85%" stopColor={colorGreen} stopOpacity="1" />
                        <stop offset="100%" stopColor={colorGreen} stopOpacity="0" />
                    </linearGradient>
                    <filter id="drop-shadow-front" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="-2" dy="5" stdDeviation="4" floodOpacity="0.6" />
                    </filter>
                    <filter id="drop-shadow-back" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" />
                    </filter>
                </defs>

                {segments.map((seg, i) => {
                    const animationDuration = 4.0;
                    const segDuration = animationDuration / numHalfTwists;
                    const delayStrand = seg.index * segDuration;

                    return (
                        <g key={`seg-${i}`}>
                            {/* BACK STRAND */}
                            <motion.path
                                d={seg.strand1Front ? seg.strand2Path : seg.strand1Path}
                                stroke={seg.strand1Front ? "url(#dnaGradGreen)" : "url(#dnaGradBlue)"}
                                strokeWidth="7"
                                strokeLinecap="round"
                                filter="url(#drop-shadow-back)"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: { delay: delayStrand, duration: segDuration, ease: "linear" }
                                    }
                                }}
                            />

                            {/* RUNGS */}
                            {seg.rungs.map((rung, rIdx) => {
                                const fadeOpacity = Math.sin(rung.progress * Math.PI) * 0.7;
                                const globalRungIdx = i * rungsPerTwist + rIdx;
                                const rungDelay = rung.progress * animationDuration;

                                return (
                                    <motion.line
                                        key={`rung-${globalRungIdx}`}
                                        x1={rung.x1}
                                        y1={rung.y}
                                        x2={rung.x2}
                                        y2={rung.y}
                                        stroke={globalRungIdx % 2 === 0 ? colorBlue : colorGreen}
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        variants={{
                                            hidden: { pathLength: 0, opacity: 0 },
                                            visible: {
                                                pathLength: 1,
                                                opacity: fadeOpacity,
                                                transition: { delay: rungDelay, duration: 0.3, ease: "easeOut" }
                                            }
                                        }}
                                    />
                                );
                            })}

                            {/* FRONT STRAND */}
                            <motion.path
                                d={seg.strand1Front ? seg.strand1Path : seg.strand2Path}
                                stroke={seg.strand1Front ? "url(#dnaGradBlue)" : "url(#dnaGradGreen)"}
                                strokeWidth="11"
                                strokeLinecap="round"
                                filter="url(#drop-shadow-front)"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: { delay: delayStrand, duration: segDuration, ease: "linear" }
                                    }
                                }}
                            />
                        </g>
                    );
                })}
            </motion.svg>
        </div>
    );
};

export default DNAHelixTransition;
