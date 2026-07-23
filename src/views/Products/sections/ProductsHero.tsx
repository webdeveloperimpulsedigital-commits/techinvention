import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import aboutManufacturing from '../../../assets/images/about_manufacturing.png';

export default function ProductsHero() {
    const { t } = useLanguage();

    const handleScroll = () => {
        const target = document.getElementById('product-details');
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
                        
                        <h1 className="text-[24px] md:text-4xl lg:text-5xl lg:text-[56px] font-medium tracking-wide mb-6 leading-[1.15]">
                            <SplitTitle title="Innovative Products for Global Health" />
                        </h1>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 w-full font-medium">
                            Discover our extensive range of high-quality vaccines, biologics, and diagnostic solutions designed to make healthcare accessible, reliable, and affordable worldwide.
                        </p>
                    </ScrollReveal>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button 
                            onClick={handleScroll}
                            className="px-8 py-4 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm cursor-pointer"
                        >
                            Explore Portfolio
                            <ArrowDown className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* Visual Section - Large stacked image below */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full"
                >
                    <div className="relative w-full overflow-hidden">
                        <img src="/manufacturing.png" 
                            alt="Advanced Biotech Manufacturing and Formulation Facility" 
                            className="w-full h-[500px] lg:h-[600px] object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

