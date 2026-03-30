import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    className = '',
    once = true
}) => {
    const getInitialProps = () => {
        switch (direction) {
            case 'left': return { opacity: 0, x: 30 };
            case 'right': return { opacity: 0, x: -30 };
            case 'up': return { opacity: 0, y: 30 };
            case 'down': return { opacity: 0, y: -30 };
            default: return { opacity: 0, y: 30 };
        }
    };

    return (
        <motion.div
            initial={getInitialProps()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: "-50px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Premium cubic-bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
