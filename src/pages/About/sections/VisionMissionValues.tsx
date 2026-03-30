import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import TextReveal from '../../../components/Common/TextReveal';

// Import images
import visionImg from '../../../assets/images/stories/vision.png';
import missionImg from '../../../assets/images/stories/mission.png';
import valuesImg from '../../../assets/images/stories/values.png';

const VisionMissionValues = () => {
    const { t } = useLanguage();

    const values = t('about.values.items') as { title: string; desc: string }[];

    return (
        <section className="bg-white overflow-hidden pb-40">
            {/* Vision Section - Split Layer Editorial Design */}
            <div className="relative pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
                    <div className="lg:w-1/2 relative px-6 md:px-12 lg:px-20">
                        <ScrollReveal direction="right" className="relative">
                            {/* Decorative Background Element */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-brand-primary/20 rounded-tl-[3rem] -z-10" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-brand-primary/20 rounded-br-[3rem] -z-10" />

                            <div className="relative group">
                                {/* Floating Blue Border with Space */}
                                <div className="absolute -inset-4 border border-brand-primary/30 rounded-[3.5rem] pointer-events-none group-hover:border-brand-primary group-hover:-inset-5 transition-all duration-700" />

                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px]">
                                    <motion.img
                                        src={visionImg}
                                        alt="Vision"
                                        className="h-full w-full object-cover"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-content/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="lg:w-1/2 px-8 md:px-16 lg:px-24">
                        <div className="max-w-xl">
                            <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-[11px] mb-6 block">
                                {t('about.vision.title')}
                            </span>
                            <div className="mb-10">
                                <TextReveal
                                    text={t('about.vision.headline').replace('{future}', t('about.vision.future'))}
                                    className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-brand-content  tracking-tighter leading-[0.95]"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-brand-primary/10 rounded-full" />
                                <TextReveal
                                    text={t('about.vision.desc')}
                                    className="text-black text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line text-left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section - Reverse Split Layer */}
            <div className="relative pt-40">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-0">
                    <div className="lg:w-1/2 relative px-6 md:px-12 lg:px-20">
                        <ScrollReveal direction="left" className="relative">
                            {/* Decorative Background Element */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-brand-primary/20 rounded-tr-[3rem] -z-10" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-brand-primary/20 rounded-bl-[3rem] -z-10" />

                            <div className="relative group">
                                {/* Floating Blue Border with Space */}
                                <div className="absolute -inset-4 border border-brand-primary/30 rounded-[3.5rem] pointer-events-none group-hover:border-brand-primary group-hover:-inset-5 transition-all duration-700" />

                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px]">
                                    <motion.img
                                        src={missionImg}
                                        alt="Mission"
                                        className="h-full w-full object-cover"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-content/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="lg:w-1/2 px-8 md:px-16 lg:px-24">
                        <div className="max-w-xl ml-auto lg:text-right">
                            <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-[11px] mb-6 block">
                                {t('about.mission.title')}
                            </span>
                            <div className="mb-10">
                                <TextReveal
                                    text={t('about.mission.headline').replace('{equityGap}', t('about.mission.equityGap'))}
                                    className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-brand-content  tracking-tighter leading-[0.95]"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute -right-6 top-0 bottom-0 w-1 bg-brand-primary/10 rounded-full hidden lg:block" />
                                <TextReveal
                                    text={t('about.mission.desc')}
                                    className="text-black text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line text-left lg:text-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section - Premium Glassmorphism Cards */}
            <div className="max-w-7xl mx-auto px-6 mt-48">
                <div className="text-center mb-24">
                    <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-[11px] mb-6 block">
                        {t('about.values.title')}
                    </span>
                    <TextReveal
                        text={t('about.values.tagline')}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-content  tracking-tighter leading-tight max-w-4xl mx-auto justify-center text-center"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    {/* Left: Values List - Premium Grid */}
                    <div className="lg:col-span-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((val, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="h-full p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)] hover:border-brand-primary/20 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        {/* Decorative Background Icon/Number */}
                                        <div className="absolute -top-4 -right-4 text-8xl font-medium tracking-tight text-slate-200/20 group-hover:text-brand-primary/10 transition-colors duration-500">
                                            0{idx + 1}
                                        </div>

                                        <h3 className="text-2xl font-medium tracking-tight text-brand-content  mb-6 group-hover:text-brand-primary transition-colors relative z-10">
                                            {val.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-brand-primary/10 group-hover:w-20 group-hover:bg-brand-primary transition-all duration-500 mb-6 rounded-full" />
                                        <p className="text-black text-base font-medium leading-relaxed relative z-10">
                                            {val.desc}
                                        </p>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center">
                            <ScrollReveal direction="up" delay={0.4}>
                                <div className="inline-flex items-center gap-4 py-4 px-8 bg-slate-50 border border-slate-100 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                                    <p className="text-black text-base font-medium tracking-tight  tracking-widest italic leading-relaxed">
                                        {t('about.values.footer')}
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionValues;
