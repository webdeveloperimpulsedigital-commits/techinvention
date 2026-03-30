import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import AccordionSlider from './AccordionSlider';

// Import images
import ecoImg from '../../../../assets/images/one_health_ecosystem.png';
import surveillanceImg from '../../../../assets/images/one_health_surveillance.png';
import infraImg from '../../../../assets/images/one_health_infrastructure.png';
import innovationImg from '../../../../assets/images/one_health_innovation.png';

import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';


const OneHealth = () => {
    const { t } = useLanguage();

    const translatedSlides = t('oneHealth.slides');

    const fallbackSlides = [
        { title: "Research & Development", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "R&D" },
        { title: "Strategic Advisory & Tech Consulting", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "Consulting" },
        { title: "In & Out Licensing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "Licensing" },
        { title: "Scale-up and Tech transfer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "Scale-up" }
    ];

    const finalSlidesData = Array.isArray(translatedSlides) && translatedSlides.length > 0
        ? translatedSlides
        : fallbackSlides;

    const slides = [
        { ...(finalSlidesData[0] || {}), title: finalSlidesData[0]?.title || "Research & Development", image: ecoImg, tag: finalSlidesData[0]?.tag || "R&D" },
        { ...(finalSlidesData[1] || {}), title: finalSlidesData[1]?.title || "Strategic Advisory & Tech Consulting", image: surveillanceImg, tag: finalSlidesData[1]?.tag || "Consulting" },
        { ...(finalSlidesData[2] || {}), title: finalSlidesData[2]?.title || "In & Out Licensing", image: infraImg, tag: finalSlidesData[2]?.tag || "Licensing" },
        { ...(finalSlidesData[3] || {}), title: finalSlidesData[3]?.title || "Scale-up and Tech transfer", image: innovationImg, tag: finalSlidesData[3]?.tag || "Scale-up" },
    ];

    return (
        <section id="one-health" className="py-24 lg:py-32 bg-white relative border-y border-slate-100 scroll-mt-20">
            

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <ScrollReveal direction="up">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="w-full">
                            <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em] text-[11px] mb-4 block animate-fade-in">
                                {t('oneHealth.tag')}
                            </span>
                            <div className="mt-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight tracking-tighter animate-fade-in lg:whitespace-nowrap">
                                    <SplitTitle title={t('oneHealth.title').replace('{bioInnovation}', t('oneHealth.bioInnovation'))} />
                                </h2>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Accordion Slider Section */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="relative z-10 min-h-[600px] lg:min-h-[700px]">
                        <AccordionSlider slides={slides} />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default OneHealth;
