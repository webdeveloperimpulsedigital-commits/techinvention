import React from 'react';
import { motion } from 'framer-motion';
import logoDNA from '../../assets/images/TechInvention Logo (DNA).png';

interface DNAHelixProps {
    align?: 'left' | 'right';
    className?: string;
    height?: number;
    rotation?: number;
}

const DNAHelixTransition: React.FC<DNAHelixProps> = ({
    align = 'right',
    className = '',
    rotation
}) => {
    // Keep a very slight, elegant rotation
    const defaultRotation = align === 'right' ? -5 : 5;
    const finalRotation = rotation !== undefined ? rotation : defaultRotation;

    // Anchor strictly to the top whitespace opposite the titles
    const alignClass = align === 'right'
        ? "right-[5%] md:right-[10%] lg:right-[15%] origin-center"
        : "left-[5%] md:left-[10%] lg:left-[15%] origin-center";

    return (
        <div
            className={`hidden lg:block absolute top-[2%] md:top-[5%] ${alignClass} w-[90px] xl:w-[130px] z-[0] pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] opacity-90 mix-blend-multiply ${className}`}
            style={{ transform: `rotate(${finalRotation}deg)` }}
        >
            <motion.img 
                src={logoDNA} 
                alt="TechInvention 3D Background"
                className="w-full h-auto object-contain"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>
    );
};

export default DNAHelixTransition;
