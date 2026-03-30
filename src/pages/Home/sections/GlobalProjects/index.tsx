import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { WorldMap } from '../../../../components/ui/world-map';
import { motion } from 'framer-motion';

import { MagicText } from '../../../../components/ui/magic-text';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import DNAHelixTransition from '../../../../components/DNAHelixTransition';


const GlobalProjects = () => {
    const { t } = useLanguage();

    return (
        <section id="global-projects" className="relative py-12 md:py-24 bg-white">
            <DNAHelixTransition align="right" className="top-[-100px]" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header Content */}
                <div className="text-left mb-8 md:mb-16">
                    <ScrollReveal direction="left">
                        <span className="text-brand-primary text-[11px] font-medium  tracking-[0.4em] mb-4 block">
                            {t('globalProjects.tag')}
                        </span>
                    </ScrollReveal>

                    <div className="mt-4 mb-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight tracking-wide mb-6">
                            <SplitTitle title={t('globalProjects.title').replace('{partners}', t('globalProjects.partners'))} />
                        </h2>
                    </div>

                    <div className="max-w-2xl">
                        <MagicText
                            text={t('globalProjects.desc')}
                            className="font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-justify"
                        />
                    </div>
                </div>
            </div>

            {/* Full Width Interactive Map (Native Mobile Fit) */}
            <ScrollReveal direction="up" delay={0.2}>
                <div className="w-full overflow-hidden relative z-10 py-2 md:py-10">
                    <div className="w-full px-2 md:px-0 flex justify-center">
                        <div className="absolute top-4 right-4 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 dark:border-white/10 font-sans hidden md:block">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1e40af]"></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Consultancy Projects</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#4d7c0f]"></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Channel Partners</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technology Transfer Projects</span>
                            </div>
                            <div className="flex items-center gap-3 mt-1 pt-3 border-t border-gray-200 dark:border-white/10">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-white"></div>
                                </div>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">TechInvention</span>
                            </div>
                        </div>
                    </div>
                    <WorldMap
                        dots={[
                          // Consultancy Projects (Blue)
                          { start: { lat: 19.0760, lng: 72.8777, label: "TechInvention" }, end: { lat: 41.8781, lng: -87.6298 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 9.9281, lng: -84.0907 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -12.0464, lng: -77.0428 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 33.5731, lng: -7.5898 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 9.0820, lng: 8.6753 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -30.5595, lng: 22.9375 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 24.7136, lng: 46.6753 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 23.5859, lng: 58.4059 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 33.6844, lng: 73.0479 }, color: "#1e40af" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 37.5665, lng: 126.9780 }, color: "#1e40af" },

                          // Channel Partners (Green)
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 23.6345, lng: -102.5528 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -15.7975, lng: -47.8919 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -34.6037, lng: -58.3816 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 41.9028, lng: 12.4964 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 35.6892, lng: 51.3890 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 3.1390, lng: 101.6869 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 14.5995, lng: 120.9842 }, color: "#4d7c0f" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 55.7558, lng: 37.6173 }, color: "#4d7c0f" },

                          // Technology Transfer Projects (Yellow)
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 41.0082, lng: 28.9784 }, color: "#eab308" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 23.8103, lng: 90.4125 }, color: "#eab308" },
                          { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 35.6762, lng: 139.6503 }, color: "#eab308" },
                        ]}
                        />
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default GlobalProjects;
