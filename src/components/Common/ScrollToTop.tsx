import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

interface ScrollToTopProps {
    lenisRef: React.MutableRefObject<Lenis | null>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ lenisRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { duration: 1.5 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-primary/90 transition-colors group"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />

                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
