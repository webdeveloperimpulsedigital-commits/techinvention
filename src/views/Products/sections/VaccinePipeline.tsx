import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';

const logoDNA = "/TechInvention-gif.gif";

const VialIcon = ({ color = "currentColor", className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M 35,15 L 65,15" />
        <rect x="30" y="15" width="40" height="12" rx="3" />
        <path d="M 38,27 L 38,40" />
        <path d="M 62,27 L 62,40" />
        <path d="M 38,40 Q 25,40 25,55 L 25,85 Q 25,95 35,95 L 65,95 Q 75,95 75,85 L 75,55 Q 75,40 62,40" />
        <path d="M 25,60 C 45,55 55,75 75,65" />
        <line x1="42" y1="83" x2="45" y2="83" />
        <line x1="52" y1="83" x2="62" y2="83" />
    </svg>
);

interface PipelineItem {
    name: string;
    progress: number;
    color: string;
    note?: string;
}

export default function VaccinePipeline() {
    const { t } = useLanguage();

    const pipelineData = t('vaccinePipeline.items') as PipelineItem[] || [];

    if (!pipelineData.length) return null;

    return (
        <section id="vaccine-pipeline" className="py-24 relative bg-slate-50/50 overflow-hidden border-t border-b border-slate-200/60 font-sans">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
                {/* GLOBAL SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                    <div className="max-w-3xl text-left">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide mb-6 text-left">
                            <SplitTitle title="R&D Vaccine & Biologics Pipeline" />
                        </h2>
                    </div>
                </div>

                <div className="w-full flex flex-col pt-4">

                    {/* DESKTOP LAYOUT (Horizontal Timeline) */}
                    <div className="hidden lg:block w-full pb-8">
                        <div className="w-full">
                            {/* Table Header (Phases) */}
                            <div className="grid grid-cols-[200px_1fr_280px] xl:grid-cols-[240px_1fr_320px] gap-0 text-[11px] xl:text-[12px] font-bold text-slate-800 tracking-wide pb-4 border-b border-slate-300">
                                <div>{/* Empty for row label */}</div>
                                
                                {/* Phase Columns Container */}
                                <div className="grid grid-cols-5 w-full pr-12">
                                    <div className="text-center font-bold">{t('vaccinePipeline.phases.preClinical') as string}</div>
                                    <div className="text-center">{t('vaccinePipeline.phases.phase1') as string}</div>
                                    <div className="text-center">{t('vaccinePipeline.phases.phase2') as string}</div>
                                    <div className="text-center">{t('vaccinePipeline.phases.phase3') as string}</div>
                                    <div className="text-center font-bold">{t('vaccinePipeline.phases.approved') as string}</div>
                                </div>
                                
                                <div className="text-left pl-8">{t('vaccinePipeline.milestonesTitle') as string}</div>
                            </div>

                            {/* Table Rows Container with vertical guides */}
                            <div className="relative mt-8">
                                
                                {/* Vertical Dotted Guide Lines (Background Layer) */}
                                <div className="absolute inset-0 grid grid-cols-[200px_1fr_280px] xl:grid-cols-[240px_1fr_320px] gap-0 pointer-events-none pb-8 h-full z-0">
                                    <div></div>
                                    <div className="grid grid-cols-5 w-full pr-12 h-full">
                                        <div className="border-l border-dotted border-slate-300"></div>
                                        <div className="border-l border-dotted border-slate-300"></div>
                                        <div className="border-l border-dotted border-slate-300"></div>
                                        <div className="border-l border-dotted border-slate-300"></div>
                                        <div className="border-l border-dotted border-slate-300"></div>
                                    </div>
                                    <div></div>
                                </div>

                                {/* Data Rows Container */}
                                <div className="relative z-10 flex flex-col gap-0 w-full border-b border-slate-100">
                                    {pipelineData.map((item, idx) => {
                                        const lineWidthPercent = `${item.progress}%`;
                                        const isAlternate = idx % 2 !== 0;

                                        return (
                                            <div 
                                                key={idx} 
                                                className={`grid grid-cols-[200px_1fr_280px] xl:grid-cols-[240px_1fr_320px] items-stretch min-h-[120px] w-full ${isAlternate ? 'bg-slate-50/50' : 'bg-transparent'}`}
                                            >
                                                {/* Left Text Label */}
                                                <div className="pr-4 xl:pr-6 flex items-center justify-end text-right text-[14px] xl:text-[15px] font-bold text-slate-900 py-4 border-r border-transparent">
                                                    {item.name}
                                                </div>

                                                {/* Tracking Line Area */}
                                                <div className="relative flex items-center py-6 w-full pr-12 pl-0 pointer-events-none">
                                                    <div className="relative w-full h-24 flex items-center">
                                                        
                                                        {/* Central tracking line connecting nodes */}
                                                        <motion.div 
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: lineWidthPercent }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                            className="h-1.5 z-10 rounded-full"
                                                            style={{ backgroundColor: item.color }}
                                                        />

                                                        {/* End Node Vial (Tip of progress) */}
                                                        <motion.div 
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 1.6 }}
                                                            className="absolute z-20"
                                                            style={{ left: lineWidthPercent, transform: 'translateX(-25%)' }}
                                                        >
                                                            <VialIcon className="w-7 h-7 bg-white rounded-full p-0.5" color={item.color} />
                                                        </motion.div>

                                                        {/* Sub-label next to end node */}
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 1.8 }}
                                                            className="absolute text-[12px] text-slate-800 font-bold tracking-tight whitespace-nowrap z-30"
                                                            style={{ left: `calc(${lineWidthPercent} + 28px)` }}
                                                        >
                                                            {idx % 2 === 0 ? t('vaccinePipeline.targetAdults') as string : t('vaccinePipeline.targetInfants') as string}
                                                        </motion.div>

                                                    </div>
                                                </div>

                                                {/* Right Milestones / Notes */}
                                                <div className="pl-8 py-6 text-[12px] font-medium tracking-tight text-slate-800 flex flex-col justify-center border-l border-slate-300 text-left">
                                                    {item.note ? (
                                                        <div className="space-y-2">
                                                            <p className="font-bold text-slate-900 mb-1">{t('vaccinePipeline.announceSafety') as string}</p>
                                                            <ul className="list-disc pl-4 space-y-1 font-medium text-slate-700">
                                                                <li>{item.note}</li>
                                                                {idx % 2 === 0 && <li>{t('vaccinePipeline.phase3Trials') as string}</li>}
                                                            </ul>
                                                        </div>
                                                    ) : (
                                                        <span className="opacity-0">Placeholder</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE / TABLET LAYOUT (Stacked Cards) */}
                    <div className="flex lg:hidden flex-col gap-6 mt-4">
                        {pipelineData.map((item, idx) => {
                            const lineWidthPercent = `${item.progress}%`;
                            return (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-none p-6 border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col gap-6 text-left"
                                >
                                    {/* Header: VAX ID & Name */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-none border border-slate-100 z-20 shrink-0">
                                            <VialIcon className="w-8 h-8 text-brand-primary" />
                                        </div>
                                        <div className="flex flex-col justify-center pt-1">
                                            <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                                {item.name}
                                            </h3>
                                            <span className="text-xs text-[#5C7625] font-bold tracking-wider uppercase mt-1">
                                                {t('vaccinePipeline.target') as string} {idx % 2 === 0 ? t('vaccinePipeline.targetAdults') as string : t('vaccinePipeline.targetInfants') as string}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Tracking Bar */}
                                    <div className="w-full relative mt-2 mb-2">
                                        <div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-wider mb-3 px-1">
                                            <span>{t('vaccinePipeline.phases.preClinical') as string}</span>
                                            <span>{t('vaccinePipeline.phases.phase3') as string}</span>
                                            <span className="font-bold text-[#1955A6]">{t('vaccinePipeline.phases.approved') as string}</span>
                                        </div>
                                        <div className="relative w-full h-2 bg-slate-100 rounded-full">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: lineWidthPercent }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                className="absolute top-0 left-0 h-full rounded-full"
                                                style={{ backgroundColor: item.color }}
                                            />
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 1.6 }}
                                                className="absolute top-1/2 shadow-sm z-10"
                                                style={{ left: lineWidthPercent, transform: 'translate(-25%, -50%)' }}
                                            >
                                                <VialIcon className="w-5 h-5 bg-white rounded-full border border-slate-100 p-0.5" color={item.color} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Milestones */}
                                    {item.note && (
                                        <div className="bg-slate-50 rounded-none p-4 border border-slate-200/60">
                                            <p className="font-bold text-[10px] uppercase tracking-wider text-slate-500 mb-2">{t('vaccinePipeline.milestonesTitleShort') as string}</p>
                                            <ul className="text-xs font-medium text-slate-700 list-disc pl-4 space-y-1">
                                                <li>{item.note}</li>
                                                {idx % 2 === 0 && <li>{t('vaccinePipeline.phase3Trials') as string}</li>}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
