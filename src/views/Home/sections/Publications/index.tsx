"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';

const publications = [
    {
        name: "pcv",
        title: "Streptococcus pneumoniae serotype distribution in low- and middle-income countries of South Asia: Do we need to revisit the pneumococcal vaccine strategy?",
        image: "/articales/pcv.jpg",
        pdf: "/articales/Streptococcus-pneumoniae-serotype-distribution-in-low-and-middle-income-countries-of-South-Asia-Do-we-need-to-revisit-the-pneumococcal-vaccine-strat.pdf"
    },
    {
        name: "Overcoming-barriers",
        title: "Overcoming barriers to medical countermeasures: Strengthening global biosecurity",
        image: "/articales/Overcoming-barriers.jpg",
        pdf: "/articales/Overcoming-barriers-to-medical-countermeasures-Strengthening-global-biosecurity-1.pdf"
    },
    {
        name: "Lancet Euvichol",
        title: "Comparison of the immunogenicity and safety of Euvichol-Plus with Shanchol in healthy Indian adults and children: an open-label, randomized, multicentre, non-inferiority, parallel-group, phase 3 trial",
        image: "/articales/1Lancet_Euvichol-pdf.jpg",
        pdf: "/articales/PIIS2772368223001166.pdf"
    },
    {
        name: "Frontiers",
        title: "Beyond antibiotics: phage-encoded lysins against Gram-negative pathogens",
        image: "/articales/2forntiers-pdf.jpg",
        pdf: "/articales/fmicb-14-1170418.pdf"
    },
    {
        name: "Taylor Capacity Building",
        title: "Capacity Building for Vaccine Manufacturing Across Developing Countries: The Way Forward",
        image: "/articales/3Taylor_Capacity_Building-pdf.jpg",
        pdf: "/articales/KHVI_18_2020529.pdf"
    },
    {
        name: "Vaccine COVID-19",
        title: "COVID-19 management landscape: A need for an affordable platform to manufacture safe and efficacious biotherapeutics and prophylactics for the developing countries",
        image: "/articales/4Vaccine_COVID-19-pdf.jpg",
        pdf: "/articales/1-s2.0-S0264410X22006831-main.pdf"
    }
];

export default function Publications() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, publications.length - visibleCards);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    };

    return (
        <section className="py-16 md:py-20 relative w-full bg-brand-primary/5 border-t border-brand-primary/10 overflow-hidden">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/3 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Header and Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="text-left max-w-3xl">
                        <ScrollReveal direction="up">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-tight text-brand-primary">
                                Our <span className="text-brand-secondary">Publications</span>
                            </h2>
                        </ScrollReveal>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex gap-3 shrink-0 self-start md:self-end">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                currentIndex === 0 
                                    ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-transparent' 
                                     : 'border-[#1955A6] bg-[#1955A6] text-white hover:bg-[#1955A6]/90 shadow-md hover:shadow-lg'
                            }`}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                currentIndex >= maxIndex 
                                    ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-transparent' 
                                    : 'border-[#1955A6] bg-[#1955A6] text-white hover:bg-[#1955A6]/90 shadow-md hover:shadow-lg'
                            }`}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="w-full relative overflow-visible">
                    <div className="w-full">
                         <motion.div
                            animate={{ x: `calc(-${currentIndex} * (260px + 1.5rem))` }}
                            transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            className="flex gap-6 w-max"
                        >
                            {publications.map((item, idx) => (
                                <a 
                                    key={idx}
                                    href={item.pdf || item.image} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex w-[260px] shrink-0"
                                >
                                    <motion.div 
                                        className="w-full flex-1 flex flex-col bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer p-4"
                                    >
                                        {/* Image wrapper: smaller size, completely uncropped! */}
                                        <div className="w-full overflow-hidden mb-4 flex items-center justify-center h-[200px] shrink-0">
                                            <img 
                                                loading="lazy" 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Publication Title: clamped to exactly 3 lines with standard ellipsis */}
                                        <div className="mb-4 text-left">
                                            <h3 className="text-[#13325B] text-[11px] md:text-[12.5px] font-semibold leading-relaxed line-clamp-3 h-[63px]">
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="mt-auto w-full flex justify-center pt-2">
                                            <div className="flex items-center gap-2 bg-[#1955A6] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                Read now
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
