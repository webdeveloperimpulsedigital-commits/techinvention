import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';

interface Slide {
    title: string;
    desc: string;
    tag: string;
    image: string;
}

interface AccordionSliderProps {
    slides: Slide[];
}

const AccordionSlider: React.FC<AccordionSliderProps> = ({ slides }) => {
    const { t } = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[700px] w-full min-h-[600px] lg:min-h-[700px] opacity-100">
            {slides.map((slide, index) => (
                <motion.div
                    key={index}
                    initial={false}
                    animate={{
                        flex: expandedIndex === index ? 5 : 1,
                        height: expandedIndex === index ? 'auto' : '90px',
                        minHeight: expandedIndex === index ? '500px' : '90px',
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.23, 1, 0.32, 1]
                    }}
                    className="relative overflow-hidden cursor-pointer group lg:h-full lg:!h-full"
                    onClick={() => setExpandedIndex(index)}
                    onMouseEnter={() => setExpandedIndex(index)}
                >
                    {/* Background Image */}
                    <motion.img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={false}
                        animate={{
                            scale: expandedIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 1.2 }}
                    />

                    {/* Content Overlay (The "Blue Color") */}
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10"
                        animate={{
                            backgroundColor: expandedIndex === index ? 'rgba(23, 85, 166, 0.92)' : 'rgba(0,0,0,0.4)'
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            {expandedIndex === index ? (
                                <motion.div
                                    key="expanded"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="max-w-xl"
                                >
                                    <span className="text-white/80 text-[10px] sm:text-[11px] font-medium tracking-tight  tracking-[0.4em] mb-4 block">
                                        {slide.tag}
                                    </span>
                                    <h4 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6  tracking-tighter">
                                        {slide.title}
                                    </h4>
                                    <p className="text-white/90 text-lg sm:text-base font-medium leading-relaxed mb-10 max-w-md">
                                        {slide.desc}
                                    </p>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group/btn relative flex origin-left items-center gap-4 bg-white text-brand-primary px-7 py-3 md:px-8 md:py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl overflow-hidden w-fit pointer-events-auto"
                                    >
                                        <span className="relative z-10 tracking-[0.2em] text-[10px] uppercase font-bold">
                                            {t('oneHealth.knowMore')}
                                        </span>
                                        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                            <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-full" size={18} />
                                            <ArrowRight className="absolute -left-full transition-transform duration-300 group-hover/btn:translate-x-full" size={18} />
                                        </div>
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="collapsed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex items-center lg:items-end lg:justify-start"
                                >
                                    <div className="lg:-rotate-90 lg:whitespace-nowrap lg:origin-left font-medium tracking-tight text-white/50  tracking-[0.4em] text-lg lg:translate-x-6 lg:-translate-y-8 transition-all duration-500 group-hover:text-white group-hover:scale-105">
                                        {slide.title}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Decorative bottom line for active state on mobile */}
                    {expandedIndex === index && (
                        <motion.div
                            layoutId="activeLine"
                            className="absolute bottom-0 left-0 h-1 bg-white w-full z-20 lg:hidden"
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default AccordionSlider;
