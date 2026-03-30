import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';

import { useLanguage } from '../../../../context/LanguageContext';
import { Typewriter } from '../../../../components/ui/typewriter-text';
import { MagneticText } from '../../../../components/ui/morphing-cursor';

import diagnosticBg from '../../../../assets/images/diagnostics_hero_hq.png';
import vaccineBg from '../../../../assets/images/vaccine_hero_hq.png';
import biotherapeuticsBg from '../../../../assets/images/biotherapeutics_hero_hq.png';

const bgImages = [diagnosticBg, vaccineBg, biotherapeuticsBg];

// Reusable Staggered Text Reveal Component with Hover
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const words = text ? text.split(" ") : [];
    return (
        <motion.div 
            className={`flex flex-wrap justify-center ${className}`}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] origin-bottom">
                    <motion.span
                        className="inline-block cursor-default"
                        initial={{ y: "120%", opacity: 0, rotateX: -45 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                            delay: delay + i * 0.05,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

const Hero = () => {
    const { t } = useLanguage();
    const [activeWordIndex, setActiveWordIndex] = useState(0);

    const bannerTitle = t('about.banner.title') as string;
    const bannerSubtitle = t('about.banner.subtitle') as string;
    const brandName = t('common.brandName') as string || "TechInvention";

    const rotatingWords = Array.isArray(t('hero.rotatingWords')) ? t('hero.rotatingWords') as string[] : [
        "Bio-Innovation",
        "Technology",
        "Healthcare",
        "Research",
        "Excellence"
    ];
    
    const primaryCta = t('hero.primaryCta') as string || "Discover Our Impact";
    const secondaryCta = t('hero.secondaryCta') as string || "Partner With Us";

    return (
        <section id="hero" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Dynamic Background Images */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeWordIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img 
                            src={bgImages[activeWordIndex % bgImages.length]} 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-100" 
                        />
                    </motion.div>
                </AnimatePresence>
                
                {/* Dark overlays for text visibility */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
            </div>

            {/* Brightness Overlay */}
            <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />
            
            {/* Animated medical orbs */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/15 rounded-full blur-[100px] mix-blend-multiply"
                />
                <motion.div 
                    animate={{ y: [0, 40, 0], x: [0, -20, 0] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>

            {/* Hero Main Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center pt-24 pb-16">
                
                {/* Main Headline (Perfectly centered Grid layout eliminates wobble during typing) */}
                <div className="w-full mb-16 sm:mb-24 drop-shadow-2xl grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 whitespace-nowrap leading-[1.2]">
                    <div className="flex justify-end text-[4.5vw] sm:text-[3.5vw] md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-widest sm:tracking-[0.15em] text-white uppercase drop-shadow-xl">
                        <MagneticText 
                            text={<RevealText text={brandName} delay={0.2} />}
                            hoverText={brandName}
                            hoverTextClassName="text-[4.5vw] sm:text-[3.5vw] md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest sm:tracking-[0.15em] text-white uppercase"
                        />
                    </div>
                    <span className="flex justify-center text-[4.5vw] sm:text-[3.5vw] md:text-3xl lg:text-4xl xl:text-5xl font-thin opacity-60 text-white drop-shadow-md">
                        |
                    </span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex justify-start text-white text-[4.5vw] sm:text-[3.5vw] md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-left min-w-[35vw] md:min-w-[200px] drop-shadow-xl"
                    >
                        <Typewriter text={rotatingWords} delay={1500} deleteSpeed={30} speed={60} loop cursor="" onWordChange={(idx) => setActiveWordIndex(idx)} />
                    </motion.div>
                </div>




                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4 sm:px-0"
                >
                    <motion.a 
                        href="#about"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-center gap-3 sm:gap-4 bg-brand-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-[0_10px_30px_rgba(25,85,166,0.3)] overflow-hidden w-full sm:w-auto"
                    >
                        <span className="relative z-10 tracking-widest text-[10px] sm:text-[10px] uppercase">
                            {primaryCta}
                        </span>
                        
                        <div className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors overflow-hidden">
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 absolute -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" strokeWidth={2.5} />
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 absolute translate-x-0 opacity-100 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300" strokeWidth={2.5} />
                        </div>

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                    </motion.a>
                    
                    <motion.a 
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center justify-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium tracking-tight transition-all duration-300 hover:bg-white/20 hover:shadow-lg w-full sm:w-auto drop-shadow-md"
                    >
                        <span className="tracking-widest text-[10px] sm:text-[10px] uppercase">
                            {secondaryCta}
                        </span>
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                    </motion.a>
                </motion.div>

            </div>

        </section>
    );
};

export default Hero;
