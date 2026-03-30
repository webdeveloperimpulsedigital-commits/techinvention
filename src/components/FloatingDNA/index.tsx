import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import dnaLogo from '../../assets/images/TechInvention Logo (DNA).png';

const FloatingDNA: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    // Track scroll progress of the entire page
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // mapping scroll progress to coordinates (x: vw, y: vh)
    // 0: Hero top
    // 0.1: About start
    // 0.2: One Health
    // 0.35: Product Slider
    // 0.5: Vaccine Pipeline
    // 0.65: Testimonials
    // 0.8: Global Projects
    // 0.9: FAQ
    // 1.0: CTA
    
    const xBase = useTransform(
        scrollYProgress,
        [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9, 1],
        ['95vw', '85vw', '80vw', '15vw', '85vw', '80vw', '85vw', '80vw', '18vw']
    );

    const yBase = useTransform(
        scrollYProgress,
        [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9, 1],
        ['-20vh', '25vh', '30vh', '15vh', '25vh', '20vh', '25vh', '20vh', '28vh']
    );

    const rotationBase = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 360 * 4] // Spins while traveling
    );

    const opacityBase = useTransform(
        scrollYProgress,
        [0, 0.08, 0.12, 0.98, 1],
        [0, 0, 1, 1, 0.8] // Hidden in hero, fades in for About
    );

    // Apply smooth springs to the raw transforms to avoid "robotic" linear movement
    const x = useSpring(xBase, { stiffness: 30, damping: 20, mass: 1 });
    const y = useSpring(yBase, { stiffness: 30, damping: 20, mass: 1 });
    const rotation = useSpring(rotationBase, { stiffness: 40, damping: 25 });
    const opacity = useSpring(opacityBase, { stiffness: 50, damping: 30 });

    if (isMobile) return null; // Keep mobile simple or hidden if needed

    return (
        <motion.div
            style={{ 
                left: x, 
                top: y,
                opacity: opacity,
                x: "-50%",
                y: "-50%"
            }}
            className="fixed z-[50] pointer-events-none"
        >
            <motion.div 
                className="relative"
                style={{ rotate: rotation }}
                animate={{ 
                    rotateY: 360,
                    y: [0, -10, 0],
                }}
                transition={{
                    rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img 
                    src={dnaLogo} 
                    alt="Floating DNA" 
                    className="w-24 opacity-80 h-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                />
            </motion.div>
        </motion.div>
    );
};

export default FloatingDNA;
