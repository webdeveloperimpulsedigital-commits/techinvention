import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import { useLanguage } from '../../../context/LanguageContext';

export default function CareersHero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 font-sans">
            {/* Ambient background decoration - extremely subtle light glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-start justify-between gap-12">
                {/* Text Section - Left Side */}
                <div className="flex-1 text-left">
                    <ScrollReveal direction="up">
                        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-medium tracking-wide mb-6 leading-[1.15]">
                            <SplitTitle title={t('careers.title') as string} />
                        </h1>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 font-medium">
                            {t('careers.intro')}
                        </p>
                    </ScrollReveal>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button 
                            onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm"
                        >
                            <Briefcase className="w-4 h-4" />
                            Submit Application
                        </button>
                    </motion.div>
                </div>

                {/* Badges Section - Right Side in the White Space (Small size, cropped to hide side white margins) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-row md:flex-col lg:flex-row items-start justify-center gap-6 shrink-0 mt-8 md:mt-3"
                >
                    {/* 2024 Badge Wrapper */}
                    <div className="w-[80px] h-[120px] sm:w-[90px] sm:h-[130px] overflow-hidden relative flex items-center justify-center">
                        <img 
                            src="/great-place-24.jpeg" 
                            alt="Great Place to Work Certified 2024" 
                            className="max-w-none h-full w-auto object-cover absolute left-1/2 -translate-x-1/2"
                        />
                    </div>

                    {/* 2023 Badge Wrapper */}
                    <div className="w-[80px] h-[120px] sm:w-[90px] sm:h-[130px] overflow-hidden relative flex items-center justify-center">
                        <img 
                            src="/great-place-23.jpeg" 
                            alt="Great Place to Work Certified 2023" 
                            className="max-w-none h-full w-auto object-cover absolute left-1/2 -translate-x-1/2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
