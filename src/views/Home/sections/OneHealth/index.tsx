import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import AccordionSlider from './AccordionSlider';

// Import images
import ecoImg from "../../../../assets/images/one_health_ecosystem.png";
import surveillanceImg from "../../../../assets/images/one_health_ecosystem.png"; // Placeholder for one_health_surveillance.png
import infraImg from "../../../../assets/images/one_health_infrastructure.png";
import innovationImg from "../../../../assets/images/one_health_infrastructure.png"; // Placeholder for one_health_innovation.png

import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';

const logoDNA = "/TechInvention-gif.gif";

const OneHealth = () => {
    const { t } = useLanguage();

    const translatedSlides = t('oneHealth.slides');

    const fallbackSlides = [
        { title: "Strategic Advisory & Tech Consulting", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "Consulting" },
        { title: "Research and Development (R&D)", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "R&D" },
        { title: "Licensing and Access", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "Licensing" },
        { title: "Commercial-Scale Manufacturing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tag: "Manufacturing" }
    ];

    const finalSlidesData = Array.isArray(translatedSlides) && translatedSlides.length > 0
        ? translatedSlides
        : fallbackSlides;

    const slides = [
        { ...(finalSlidesData[3] || {}), title: finalSlidesData[3]?.title || "Commercial-Scale Manufacturing", image: "/Commercial.jpg", tag: finalSlidesData[3]?.tag || "Manufacturing" },
        { ...(finalSlidesData[1] || {}), title: finalSlidesData[1]?.title || "Research and Development (R&D)", image: "/Research.jpg", tag: finalSlidesData[1]?.tag || "R&D" },
        { ...(finalSlidesData[2] || {}), title: finalSlidesData[2]?.title || "Licensing and Access", image: "/Licensing.jpg", tag: finalSlidesData[2]?.tag || "Licensing" },
        { ...(finalSlidesData[0] || {}), title: finalSlidesData[0]?.title || "Strategic Advisory & Tech Consulting", image: "/Strategic.jpg", tag: finalSlidesData[0]?.tag || "Consulting" },
    ];

    return (
        <section id="one-health" className="py-16 md:py-20 bg-white relative border-y border-slate-100 scroll-mt-20">
            

            <div className="max-w-7xl mx-auto px-6">


                {/* Accordion Slider Section */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="relative z-10 w-full">
                        <AccordionSlider slides={slides} />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default OneHealth;
