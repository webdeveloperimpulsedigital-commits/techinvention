import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import awardImage from '../../../../assets/images/Award+Section-Top100Tech+24.webp';
import { motion } from 'framer-motion';

const logoDNA = "/TechInvention-gif.gif";

const Awards = () => {
    const { t } = useLanguage();

    return (
        <section id="awards" className="py-16 md:py-20 relative bg-white border-t border-slate-100 overflow-hidden">
            
            {/* Inline styles for seamless marquee and pause-on-hover */}
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-content {
                    display: flex;
                    width: max-content;
                    /* Adjust 30s to make it slower/faster */
                    animation: marqueeScroll 30s linear infinite; 
                }
                /* This ensures the slide stops exactly where it is when hovered, without restarting! */
                .marquee-content:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <ScrollReveal direction="up">
                        <div className="text-center md:text-left">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-tight text-brand-primary tracking-wide">
                                {(t('awards.title') as string).split('{latestNews}')[0]}
                                <span className="font-medium text-brand-secondary">{t('awards.accolades') as string}</span>
                                {(t('awards.title') as string).split('{latestNews}')[1] || ''}
                            </h2>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Infinite Looping Slider */}
            <div className="w-full relative py-8 bg-transparent">
                <div className="w-full overflow-hidden">
                    <div className="marquee-content">
                        {/* 
                          Duplicating the images to ensure a seamless continuous loop 
                          that is wider than any modern screen width.
                          By scrolling exactly -50%, it seamlessly jumps back to 0%.
                        */}
                        {[...Array(24)].map((_, idx) => (
                            <div key={idx} className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center cursor-pointer">
                                <img loading="lazy" 
                                    src={awardImage} 
                                    alt={`Award ${idx + 1}`} 
                                    className="max-h-[140px] md:max-h-[180px] lg:max-h-[220px] w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
