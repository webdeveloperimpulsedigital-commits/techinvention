import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { motion } from 'framer-motion';
import awardImage from '../../../../assets/images/Award+Section-Top100Tech+24.webp';


const Awards = () => {
    const { t } = useLanguage();

    return (
        <section id="awards" className="relative py-16 md:py-24 bg-white border-t border-slate-100">

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12">
                <ScrollReveal direction="up">
                    <div className="text-center md:text-left">
                        <span className="text-[11px] font-medium tracking-[0.4em] text-brand-primary mb-4 block uppercase">
                            {t('awards.tag') as string}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-primary tracking-wide">
                            {(t('awards.title') as string).split('{latestNews}')[0]}
                            <span className="font-medium text-brand-secondary">{t('awards.accolades') as string}</span>
                            {(t('awards.title') as string).split('{latestNews}')[1] || ''}
                        </h2>
                    </div>
                </ScrollReveal>
            </div>

            {/* Infinite Looping Slider */}
            <div className="w-full relative py-8 bg-transparent flex flex-col items-center">
                <div className="w-full overflow-hidden flex">
                    <motion.div
                        className="flex w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20, // Faster scroll speed
                        }}
                    >
                        {/* 
                          Duplicating the image 24 times to ensure a seamless continuous loop 
                          that is wider than any modern screen width. Padding is reduced to pull them together tightly.
                        */}
                        {[...Array(24)].map((_, idx) => (
                            <div key={idx} className="flex-shrink-0 px-2 flex items-center justify-center">
                                <img 
                                    src={awardImage} 
                                    alt="Global Health Awards and Recognition" 
                                    className="max-h-[160px] md:max-h-[220px] lg:max-h-[280px] w-auto object-contain transition-opacity duration-300 pointer-events-none opacity-95 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
