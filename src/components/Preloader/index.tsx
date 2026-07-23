import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
const dnaLogo = "/TechInvention-gif.gif";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';
        
        // Simulate loading process or waiting for critical assets
        const timer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center justify-center gap-12 w-full h-full">
                <motion.div
                    className="relative w-[300px] md:w-[500px] flex items-center justify-center pointer-events-none select-none z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <motion.img
                        src={dnaLogo}
                        alt=""
                        className="w-full h-auto drop-shadow-2xl brightness-110 contrast-125 mix-blend-screen"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>

                <div className="flex flex-col items-center gap-2 absolute bottom-20">
                    <div className="flex items-center gap-[4px] ml-2">
                        {['L', 'O', 'A', 'D', 'I', 'N', 'G', '.', '.', '.'].map((letter, i) => (
                            <motion.span
                                key={i}
                                className="text-white font-bold text-[18px] tracking-[0.3em] font-montserrat"
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: i * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
