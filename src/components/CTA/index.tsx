import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../Common/ScrollReveal';

const CTA = () => {
    const { t } = useLanguage();

    const renderTitle = () => {
        const title = t('cta.title');
        const highlight = t('cta.protectsTomorrow');
        if (title.includes('{protectsTomorrow}')) {
            const [before, after] = title.split('{protectsTomorrow}');
            return (
                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tight tracking-tight leading-[0.9] text-slate-900">
                    {before}<br />
                    <span className="text-brand-primary">{highlight}</span>
                    {after}
                </h2>
            );
        }
        return (
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tight tracking-tight leading-[0.9] text-slate-900">
                {title}
            </h2>
        );
    };

    return (
        <section className="relative min-h-[80vh] w-full flex items-center justify-center py-24 sm:py-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <ScrollReveal direction="right">
                    <div
                        className="glass-card bg-white/60 p-8 sm:p-16 lg:p-24 overflow-hidden relative border-brand-primary/10 rounded-none"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                            {/* Title Section */}
                            <div>
                                <ScrollReveal direction="right" delay={0.1}>
                                    <span
                                        className="inline-block text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-base mb-6"
                                    >
                                        {t('common.innovation')}
                                    </span>
                                </ScrollReveal>
                                <ScrollReveal direction="right" delay={0.2}>
                                    {renderTitle()}
                                </ScrollReveal>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col items-start lg:pl-10">
                                <ScrollReveal direction="right" delay={0.3}>
                                    <p
                                        className="text-[11px] md:text-[12px] text-black mb-10 leading-relaxed font-medium tracking-tight  tracking-wider"
                                    >
                                        {t('cta.desc')}
                                    </p>
                                </ScrollReveal>

                                <ScrollReveal direction="right" delay={0.4}>
                                    <div>
                                        <button className="group relative flex items-center gap-4 bg-brand-primary text-white px-8 py-5 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden">
                                            <span className="relative z-10">{t('cta.startPartnership')}</span>
                                            <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
                                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-full" size={24} />
                                                <ArrowRight className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full" size={24} />
                                            </div>
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </button>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Floating Particles Decor */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                        }}
                        className="absolute rounded-full bg-brand-primary/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 4}px`,
                            height: `${Math.random() * 6 + 4}px`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default CTA;

