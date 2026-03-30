import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
    src: string;
    className?: string; // used for positioning (e.g., top-10 right-10)
    delay?: number;
    size?: number | string;
    rotate?: number;
    opacity?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ 
    src, 
    className = "", 
    delay = 0,
    size = 250,
    rotate = 0,
    opacity = 1
}) => {
    return (
        <motion.div
            className={`absolute pointer-events-none z-0 mix-blend-multiply ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: opacity }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 1.5 }}
            style={{ 
                '--shape-size': `${size}px`,
                width: 'min(var(--shape-size), 45vw)', 
                height: 'min(var(--shape-size), 45vw)',
            } as React.CSSProperties}
        >
            <motion.img
                src={src}
                alt=""
                className="w-full h-full object-contain"
                style={{ width: size, height: size, rotate }}
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    rotate: [rotate, rotate + 15, rotate - 5, rotate],
                }}
                transition={{
                    duration: 8 + delay * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                }}
            />
        </motion.div>
    );
};

export default FloatingShape;
