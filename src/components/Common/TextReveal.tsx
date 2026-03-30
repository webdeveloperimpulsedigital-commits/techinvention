import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    containerClassName?: string;
    mode?: 'dark' | 'light'; // dark for light backgrounds (text goes to black), light for dark backgrounds (text goes to white)
}

const TextReveal: React.FC<TextRevealProps> = ({
    text,
    className = "",
    containerClassName = "",
    mode = 'dark'
}) => {
    // Split by whitespace but keep the whitespace as tokens
    const tokens = text.split(/(\s+)/);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            color: mode === 'dark' ? '#94a3b8' : '#64748b' // slate-400 or slate-500
        },
        visible: {
            opacity: 1,
            y: 0,
            color: mode === 'dark' ? '#0f172a' : '#ffffff', // slate-900 (black) or white
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`relative z-10 ${containerClassName}`}
        >
            <div className={`block ${className}`}>
                {tokens.map((token, i) => {
                    if (token === "") return null;

                    // Handle whitespace (including newlines)
                    if (/^\s+$/.test(token)) {
                        return (
                            <span key={i} className="whitespace-pre-wrap">
                                {token}
                            </span>
                        );
                    }

                    // Handle words
                    return (
                        <span
                            key={i}
                            className="inline-block relative py-1"
                        >
                            <motion.span
                                variants={wordVariants as any}
                                className="inline-block"
                            >
                                {token}
                            </motion.span>
                        </span>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default TextReveal;
