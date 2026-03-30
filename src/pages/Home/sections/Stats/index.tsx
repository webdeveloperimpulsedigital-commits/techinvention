import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../translations';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { Trophy, ClipboardPlus, Star, Globe } from 'lucide-react';
import HospitalImage from '../../../../assets/images/hospital image.webp';
import { motion, useInView, animate, useScroll, useTransform } from 'framer-motion';


// Helper component to animate numbers on scroll
const AnimatedCounter = ({ valueStr }: { valueStr: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [suffix, setSuffix] = useState("");
    
    const numMatch = valueStr.match(/[\d.]+/);
    const target = numMatch ? parseFloat(numMatch[0]) : 0;
    const extractedSuffix = valueStr.replace(/[\d.]+/g, '');

    useEffect(() => {
        setSuffix(extractedSuffix);
        
        if (inView && ref.current) {
            const controls = animate(0, target, {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = Math.round(value).toString();
                    }
                }
            });
            return () => controls.stop();
        }
    }, [target, inView, extractedSuffix]);

    return (
        <span className="flex items-baseline gap-1">
            <span ref={ref}>0</span>
            <span className="text-3xl lg:text-5xl font-medium tracking-tight text-brand-primary">{suffix}</span>
        </span>
    );
};

// Modern Glassmorphic Box Component
const StatBox = ({ icon: Icon, valueStr, label, delay, className = "" }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`flex-1 bg-white border border-slate-100 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(23,85,166,0.15)] hover:border-brand-primary/30 rounded-[1.5rem] p-6 relative overflow-hidden group transition-all duration-500 ease-out min-w-[140px] ${className}`}
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.01] via-transparent to-brand-primary/[0.01] group-hover:from-brand-primary/[0.04] group-hover:to-brand-primary/[0.08] transition-all duration-500" />
            
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-700 ease-out bg-brand-primary/5 group-hover:bg-brand-primary/20 group-hover:scale-[1.8] group-hover:-translate-x-4" />
                
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-xl -ml-16 -mb-16 transition-all duration-700 ease-out delay-75 bg-brand-primary/[0.02] group-hover:bg-brand-primary/10 group-hover:scale-150" />
            
            <div className="w-16 h-16 border bg-slate-50 border-slate-100 group-hover:border-transparent group-hover:bg-white text-brand-primary rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 ease-out relative z-10 group-hover:shadow-lg group-hover:scale-110">
                <Icon size={32} strokeWidth={1.5} className="group-hover:scale-[1.15] transition-transform duration-500 ease-out" />
            </div>
            
            <div className="relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                <div className="text-4xl lg:text-5xl font-medium tracking-tight mb-2 text-black">
                    <AnimatedCounter valueStr={valueStr} />
                </div>
                <div className="text-sm lg:text-base font-medium tracking-wide transition-opacity text-black opacity-80 group-hover:opacity-100">
                    {label}
                </div>
            </div>
        </motion.div>
    );
};

const Stats = () => {
    const { language } = useLanguage();
    const t = translations[language].homeStats;
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

    return (
        <section className="-mt-8 lg:-mt-12 pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-24 lg:pb-32 relative bg-slate-50 z-20 rounded-t-[2rem] lg:rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.03)]">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            

            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
                        
                        {/* Text and Stats Column */}
                        <div className="flex flex-col">
                            <div className="mb-12">
                                <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-[11px] mb-4 block animate-fade-in">{t.header?.tag || "Our Impact"}</span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-primary leading-tight tracking-tighter  mb-6">{t.header?.title1 || "Measuring "} <br/><span className="text-brand-secondary">{t.header?.title2 || "Excellence"}</span>
                                </h2>
                                <p className="text-black text-lg leading-relaxed max-w-xl">{t.header?.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                <StatBox icon={Trophy} valueStr={t.awards?.value || "90+"} label={t.awards?.label || "Total Awards"} delay={0.1} />
                                <StatBox icon={ClipboardPlus} valueStr={t.experts?.value || "143+"} label={t.experts?.label || "Total Experts"} delay={0.2} />
                                <StatBox icon={Star} valueStr={t.patients?.value || "2M+"} label={t.patients?.label || "Satisfied Patients"} delay={0.3} className="col-span-2" />
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[800px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
                            <img 
                                src={HospitalImage} 
                                alt="Facility" 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 origin-center"
                            />
                        </div>

                    </div>
            </div>
        </section>
    );
};

export default Stats;
