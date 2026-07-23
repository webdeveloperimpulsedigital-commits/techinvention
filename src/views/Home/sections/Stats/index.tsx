import React, { useRef } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import gcmcImg from '../../../../assets/images/GCMC.jpg.jpeg';
import { motion, useInView } from 'framer-motion';
import { SplitTitle } from '../../../../components/Common/SplitTitle';

const Stats = () => {
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <div ref={containerRef} className="py-20 bg-slate-50/50 w-full mt-12 md:mt-16 border-t border-b border-slate-100/60 font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                
                {/* Aligned Top Left Title */}
                <div className="mb-10">
                    <h2 className="text-[24px] md:text-[40px] font-medium tracking-wide">
                        <SplitTitle title="Our Impact" />
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    
                    {/* Left Column: Company Photo (Clean, square corners, no overlay text) */}
                    <div className="lg:col-span-5 relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] overflow-hidden shadow-md border border-slate-200/40 bg-white group">
                        <motion.img 
                            loading="lazy" 
                            src={(gcmcImg as any).src ? (gcmcImg as any).src : gcmcImg} 
                            alt="Facility Building" 
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            animate={isInView ? { scale: 1.05 } : {}}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>

                    {/* Right Column: Premium Recognition Logos Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full items-stretch">
                            
                            {/* Great Place to Work logo card */}
                            <div className="sm:col-span-5 h-full">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-full min-h-[290px]"
                                >
                                    <img src="/great-place.png" alt="Great Place to Work" className="max-h-[220px] sm:max-h-[250px] w-auto object-contain" />
                                </motion.div>
                            </div>

                            {/* Dun & Bradstreet & Forbes logo cards stacked */}
                            <div className="sm:col-span-7 flex flex-col gap-6 justify-between h-full">
                                
                                {/* Dun & Bradstreet Card */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    whileHover={{ y: -4 }}
                                    className="transition-all duration-300 flex-1 min-h-[132px] flex items-center justify-center"
                                >
                                    <img src="/Certification_banner_01.png" alt="Dun & Bradstreet" className="w-full h-full object-contain" />
                                </motion.div>

                                {/* Forbes Card */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    whileHover={{ y: -4 }}
                                    className="transition-all duration-300 flex-1 min-h-[132px] flex items-center justify-center"
                                >
                                    <img src="/Certification_banner.png" alt="Forbes India DGEMS" className="w-full h-full object-contain" />
                                </motion.div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;
