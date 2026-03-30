import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Syringe, Microscope, Dna, ArrowRight, FlaskConical, HeartPulse, Activity, TestTube, Pill } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/Common/ScrollReveal";
import { useLanguage } from '../../../../context/LanguageContext';
import vaccineImg from '../../../../assets/images/case-study/vaccine_lab.png';
import diagnosticImg from '../../../../assets/images/case-study/diagnostic_test.png';
import biotechImg from '../../../../assets/images/case-study/biotech_research.png';

const FEATURES = [
  {
    id: "vaccines",
    label: "Vaccines",
    icon: Syringe,
    image: vaccineImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/solutions"
  },
  {
    id: "diagnostics",
    label: "Diagnostics",
    icon: Microscope,
    image: diagnosticImg,
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/solutions"
  },
  {
    id: "biotherapeutics",
    label: "Biotherapeutics",
    icon: Dna,
    image: biotechImg,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "/solutions"
  },
  {
    id: "clinical_trials",
    label: "Clinical Trials",
    icon: Activity,
    image: diagnosticImg,
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/solutions"
  },
  {
    id: "global_health",
    label: "Global Health",
    icon: HeartPulse,
    image: vaccineImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    link: "/solutions"
  },
  {
    id: "rd_innovation",
    label: "R&D Innovation",
    icon: FlaskConical,
    image: biotechImg,
    description: "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.",
    link: "/solutions"
  },
  {
    id: "quality_control",
    label: "Quality Control",
    icon: TestTube,
    image: diagnosticImg,
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    link: "/solutions"
  },
  {
    id: "therapeutics",
    label: "Therapeutics",
    icon: Pill,
    image: biotechImg,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    link: "/solutions"
  }
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 70;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const CaseStudy = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 relative">
        

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
            <ScrollReveal direction="up" delay={0.2} className="text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-brand-primary mb-5">
                    {t('caseStudy.titlePrefix')} <span className="text-brand-secondary">{t('caseStudy.titleHighlight')}</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                    {t('caseStudy.desc')}
                </p>
            </ScrollReveal>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="relative flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px] items-center justify-between w-full h-full gap-12 lg:gap-0">
                
                {/* Left Side: Text Navigation */}
                <div className="w-full lg:w-[40%] min-h-[350px] relative z-30 flex flex-col items-center justify-center px-4 sm:px-8 lg:pl-0 shrink-0">
                    <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent z-40" />
                    <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-40" />
                    
                    <div className="relative w-full h-[350px] lg:h-[500px] flex items-center justify-center lg:justify-start z-20">
                        {FEATURES.map((feature, index) => {
                            const isActive = index === currentIndex;
                            const distance = index - currentIndex;
                            const wrappedDistance = wrap(-(FEATURES.length / 2), FEATURES.length / 2, distance);

                            return (
                                <motion.div
                                    key={feature.id}
                                    style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                                    animate={{ 
                                        y: wrappedDistance * ITEM_HEIGHT, 
                                        opacity: 1 - Math.abs(wrappedDistance) * 0.35 
                                    }}
                                    transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                                    className="absolute flex items-center justify-start w-full lg:w-auto px-4 lg:px-0"
                                >
                                    <button
                                        onClick={() => handleChipClick(index)}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                        className={cn(
                                            "relative w-full lg:w-auto flex items-center justify-center lg:justify-start gap-4 px-6 md:px-10 py-4 md:py-5 rounded-full transition-all duration-700 text-left mx-auto",
                                            isActive
                                            ? "bg-brand-primary text-white z-10 scale-105 shadow-xl shadow-brand-primary/20"
                                            : "bg-white text-gray-500 hover:text-gray-900 scale-100 shadow-sm border border-gray-100"
                                        )}
                                    >
                                        <div className={cn("flex items-center justify-center transition-colors duration-500", isActive ? "text-white" : "text-brand-primary/60 group-hover:text-brand-primary")}>
                                            <feature.icon size={22} strokeWidth={2} />
                                        </div>
                                        <span className="font-semibold text-sm md:text-base tracking-wide uppercase">
                                            {t(`caseStudy.features.${index}.label`)}
                                        </span>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Image Carousel */}
                <div className="flex-1 w-full lg:w-auto min-h-[500px] lg:min-h-[700px] relative flex items-center justify-center py-8">
                    <div className="relative w-full max-w-[450px] lg:max-w-[550px] aspect-[4/5] flex items-center justify-center">
                        {FEATURES.map((feature, index) => {
                            const status = getCardStatus(index);
                            const isActive = status === "active";
                            const isPrev = status === "prev";
                            const isNext = status === "next";

                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={false}
                                    animate={{
                                        x: isActive ? 0 : isPrev ? -120 : isNext ? 120 : 0,
                                        scale: isActive ? 1 : isPrev || isNext ? 0.8 : 0.65,
                                        opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                                        rotate: isPrev ? -6 : isNext ? 6 : 0,
                                        zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                                        pointerEvents: isActive ? "auto" : "none",
                                    }}
                                    transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                                    className="absolute inset-x-4 lg:inset-0 aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[6px] md:border-8 border-white bg-white origin-center shadow-xl"
                                >
                                    <div className="relative w-full h-full group">
                                        <img
                                            src={feature.image}
                                            alt={feature.label}
                                            className={cn(
                                                "w-full h-full object-cover transition-all duration-700",
                                                isActive ? "grayscale-0 blur-0 scale-100" : "grayscale blur-[2px] brightness-75 scale-105"
                                            )}
                                        />

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute inset-x-0 bottom-0 p-6 md:p-8 pt-32 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent flex flex-col justify-end"
                                                >
                                                    <div className="bg-white text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] w-fit shadow-md mb-4 pointer-events-none">
                                                        {index + 1} / {FEATURES.length} • {t('caseStudy.tag')}
                                                    </div>
                                                    <p className="text-white font-medium text-xl md:text-2xl leading-snug drop-shadow-md tracking-tight mb-6 pointer-events-none line-clamp-3">
                                                        {t(`caseStudy.features.${index}.desc`)}
                                                    </p>
                                                    
                                                    <Link to={feature.link} className="block w-fit">
                                                        <motion.div
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="group relative flex items-center gap-4 bg-brand-primary text-white px-7 py-3 md:px-8 md:py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-xl overflow-hidden w-fit pointer-events-auto shadow-xl border border-white/10"
                                                        >
                                                            <span className="relative z-10 tracking-widest text-[10px] uppercase">
                                                                {t('oneHealth.knowMore')}
                                                            </span>
                                                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                                            </div>
                                                            {/* Shine Effect */}
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                                        </motion.div>
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default CaseStudy;
