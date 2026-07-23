import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';


export default function ConsultingHero() {
    const handleScroll = () => {
        const target = document.getElementById('consulting-services');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 font-sans">
            {/* Ambient background decoration - subtle light glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
                
                {/* Text Section - Stacked at the top */}
                <div className="w-full text-left mb-12 lg:mb-16">
                    <ScrollReveal direction="up">
                        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] lg:whitespace-nowrap font-medium tracking-wide mb-6 leading-[1.15]">
                            <SplitTitle title="Strategic Advisory & Tech Consulting" />
                        </h1>
                        <h2 className="text-xl md:text-[24px] font-normal text-slate-800 leading-snug mb-4 w-full">
                            Building resilient healthcare and biomanufacturing ecosystems through strategy, science and execution.
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 w-full font-normal">
                            TechInvention supports governments, funding agencies, manufacturers, investors and research institutions in shaping vaccine and biopharmaceutical manufacturing infrastructure.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Visual Section - Large stacked image below */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full"
                >
                    <div className="relative w-full overflow-hidden">
                        <img src="/consulting-banner.png" 
                            alt="Strategic Advisory and Tech Consulting" 
                            className="w-full h-[500px] lg:h-[600px] object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
