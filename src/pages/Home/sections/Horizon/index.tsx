import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';

import horizonImg from '../../../../assets/images/hor.jpg'; 
import gcmcImg from '../../../../assets/images/banner1.jpg';

const Horizon = () => {
    const { t } = useLanguage();
    // State to track which card is currently being hovered
    const [hoveredCard, setHoveredCard] = useState<'none' | 'horizon' | 'gcmc'>('none');

    return (
        <section id="gcmc-innovation-bento" className="relative py-24 md:py-32 bg-slate-50 border-y border-slate-200">
            {/* Background Texture */}
            <div className="absolute inset-0 noise-texture opacity-[0.02] mix-blend-overlay pointer-events-none" />

            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                
                {/* The Interactive Bento Box */}
                <ScrollReveal direction="up" delay={0.2} className="w-full">
                    {/* Desktop/Tablet Flex Container */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full h-auto lg:h-[700px]">
                        
                        {/* 1. HORIZON Card */}
                        <div 
                            onMouseEnter={() => setHoveredCard('horizon')}
                            onMouseLeave={() => setHoveredCard('none')}
                            className={`group relative overflow-hidden bg-black transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end 
                                ${hoveredCard === 'horizon' ? 'lg:flex-[2.5]' : hoveredCard === 'gcmc' ? 'lg:flex-[0.7]' : 'lg:flex-1'}
                                shrink-0 min-h-[400px] lg:min-h-0 cursor-pointer shadow-xl`}
                        >
                            {/* Background Image & Overlays */}
                            <img 
                                src={horizonImg} 
                                alt="HORIZON" 
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out
                                ${hoveredCard === 'horizon' ? 'scale-105' : 'scale-100'}
                                `} 
                            />
                            {/* Permanent structural gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            {/* Dynamic darkening when other is hovered */}
                            <div className={`absolute inset-0 bg-black transition-opacity duration-[800ms] ${hoveredCard === 'gcmc' ? 'opacity-50' : 'opacity-0'}`} />

                            {/* Content Layout */}
                            <div className="relative z-10 p-8 md:p-12 w-full flex flex-col h-full justify-end">
                                
                                <h3 className={`font-bold text-white uppercase tracking-tight transition-all duration-[800ms]
                                    ${hoveredCard === 'gcmc' ? 'text-xl lg:-rotate-90 lg:origin-left lg:translate-x-4 lg:translate-y-4 lg:mb-0 mb-4' : 'text-3xl md:text-4xl mb-4'}
                                `}>
                                    {t('horizon.title')}
                                </h3>

                                <div className={`overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                                    ${hoveredCard === 'horizon' ? 'max-h-[500px] opacity-100' : 'max-h-[80px] opacity-80'}
                                    ${hoveredCard === 'gcmc' && 'lg:max-h-0 lg:opacity-0'}
                                `}>
                                    <h4 className="text-lg md:text-xl text-white font-medium mb-4 tracking-wide whitespace-nowrap">
                                        {t('horizon.subtitle')}
                                    </h4>
                                    
                                    <div className={`transition-all duration-700 delay-100 flex flex-col items-start ${hoveredCard === 'horizon' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                        <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                                            {t('horizon.desc')}
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group/btn relative flex origin-left items-center mt-6 gap-4 bg-white text-brand-primary px-7 py-3 md:px-8 md:py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-slate-50 hover:shadow-xl overflow-hidden w-fit pointer-events-auto"
                                        >
                                            <span className="relative z-10 tracking-[0.2em] text-[10px] uppercase font-bold">
                                                {t('oneHealth.knowMore')}
                                            </span>
                                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-full">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover/btn:translate-x-full">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </div>
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. GCMC Card */}
                        <div 
                            onMouseEnter={() => setHoveredCard('gcmc')}
                            onMouseLeave={() => setHoveredCard('none')}
                            className={`group relative overflow-hidden bg-black transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end 
                                ${hoveredCard === 'gcmc' ? 'lg:flex-[2.5]' : hoveredCard === 'horizon' ? 'lg:flex-[0.7]' : 'lg:flex-1'}
                                shrink-0 min-h-[400px] lg:min-h-0 cursor-pointer shadow-xl`}
                        >
                            {/* Background Image & Overlays */}
                            <img 
                                src={gcmcImg} 
                                alt="GCMC" 
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out
                                ${hoveredCard === 'gcmc' ? 'scale-105' : 'scale-100'}
                                `} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                            {/* Dynamic darkening when other is hovered */}
                            <div className={`absolute inset-0 bg-black transition-opacity duration-[800ms] ${hoveredCard === 'horizon' ? 'opacity-50' : 'opacity-0'}`} />

                            {/* Content Layout */}
                            <div className="relative z-10 p-8 md:p-12 w-full flex flex-col h-full justify-end">
                                
                                <h3 className={`font-bold text-white uppercase tracking-tight transition-all duration-[800ms]
                                    ${hoveredCard === 'horizon' ? 'text-xl lg:-rotate-90 lg:origin-left lg:translate-x-4 lg:translate-y-4 lg:mb-0 mb-4' : 'text-3xl md:text-4xl mb-4'}
                                `}>
                                    {t('horizon.gcmcTitle')}
                                </h3>

                                <div className={`overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                                    ${hoveredCard === 'gcmc' ? 'max-h-[500px] opacity-100' : 'max-h-[80px] opacity-80'}
                                    ${hoveredCard === 'horizon' && 'lg:max-h-0 lg:opacity-0'}
                                `}>
                                    <h4 className="text-lg md:text-xl text-white font-medium mb-4 tracking-wide whitespace-nowrap">
                                        {t('horizon.gcmcSubtitle')}
                                    </h4>
                                    
                                    <div className={`transition-all duration-700 delay-100 flex flex-col items-start ${hoveredCard === 'gcmc' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                        <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                                            {t('horizon.gcmcDesc')}
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group/btn relative flex origin-left items-center mt-6 gap-4 bg-white text-brand-primary px-7 py-3 md:px-8 md:py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-slate-50 hover:shadow-xl overflow-hidden w-fit pointer-events-auto"
                                        >
                                            <span className="relative z-10 tracking-[0.2em] text-[10px] uppercase font-bold">
                                                {t('oneHealth.knowMore')}
                                            </span>
                                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-full">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover/btn:translate-x-full">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </div>
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
            
        </section>
    );
};

export default Horizon;
