import React from 'react';
import { motion } from 'framer-motion';
import dnaLogo from '../../assets/images/dark_dna_logo_sharp.png';

interface SectionDNAProps {
    className?: string;
    opacity?: number;
    rotate?: number;
    scale?: number;
}

const SectionDNA: React.FC<SectionDNAProps> = ({ 
    className = "", 
    opacity = 0.08, 
    rotate = 0, 
    scale = 1
}) => {
    return (
        <motion.div
            className={`absolute pointer-events-none select-none z-0 ${className}`}
            initial={{ opacity: 0, scale: scale * 0.8 }}
            whileInView={{ opacity, scale }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
        >
            <motion.img
                src={dnaLogo}
                alt=""
                className="w-full h-auto drop-shadow-2xl brightness-110 contrast-125 mix-blend-screen"
                style={{ rotate }}
            />
        </motion.div>
    );
};

export default SectionDNA;
