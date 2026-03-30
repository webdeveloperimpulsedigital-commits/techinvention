import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Loader = () => {
    const { t } = useLanguage();
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] bg-brand-accent flex flex-col items-center justify-center"
                >
                    <div className="relative w-64 h-[2px] bg-brand-gray-light/10 overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: progress / 100 }}
                            className="absolute inset-0 bg-brand-primary origin-left"
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-base font-medium tracking-tight tracking-[0.2em]  text-brand-primary"
                        >
                            {t('loader.initializing')}
                        </motion.span>
                        <div className="mt-2 text-4xl font-medium tracking-tight font-inter tabular-nums text-brand-content">
                            {progress}%
                        </div>
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] tracking-widest  text-brand-gray-light font-medium tracking-tight">
                        <span>{t('common.rd')}</span>
                        <div className="w-1 h-1 rounded-full bg-brand-gray-light/30"></div>
                        <span>{t('common.innovation')}</span>
                        <div className="w-1 h-1 rounded-full bg-brand-gray-light/30"></div>
                        <span>{t('common.globalHealth')}</span>
                    </div>

                    {/* Scanning Animation Effect */}
                    <motion.div
                        animate={{
                            top: ['0%', '100%', '0%'],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute left-0 right-0 h-[10vh] bg-gradient-to-b from-transparent via-brand-secondary/5 to-transparent pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
