import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';
import DNAHelixTransition from '../../../../components/DNAHelixTransition';

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

const VaccinePipeline = () => {
    const { t } = useLanguage();

    const pipelineData = t('vaccinePipeline.items') as PipelineItem[] || [];
    const stages = t('vaccinePipeline.stages') as Record<string, string> || {};
    const stageLabels = Object.values(stages);

    if (!pipelineData.length) return null;

    return (
        <section id="vaccine-pipeline" className="relative py-24 md:py-32 bg-white">
            <DNAHelixTransition align="right" className="top-[-100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-3xl">
                        <ScrollReveal direction="up">
                            <span className="text-[11px] font-medium tracking-[0.4em] text-brand-primary mb-4 block">
                                {t('vaccinePipeline.tag') || "R&D INNOVATION"}
                            </span>
                        </ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight tracking-wide mb-6">
                            <SplitTitle title={t('vaccinePipeline.title').replace('{pipeline}', t('vaccinePipeline.pipeline'))} />
                        </h2>
                    </div>
                </div>

                {/* DESKTOP LAYOUT (Horizontal Timeline) */}
                <div className="hidden lg:block w-full overflow-x-auto pb-8 scrollbar-hide">
                    <div className="min-w-[1024px]">
                        {/* Table Header (Phases) */}
                        <div className="grid grid-cols-[200px_480px_300px] gap-0 text-[13px] font-semibold text-black tracking-wide pb-4 border-b border-slate-300">
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
                            <div className="absolute inset-0 grid grid-cols-[200px_480px_300px] gap-0 pointer-events-none pb-8 h-full z-0">
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
                                    // 100% progress spans exactly the 5 columns (Pre-clinical to Approved).
                                    const lineWidthPercent = `${item.progress}%`;
                                    const isAlternate = idx % 2 !== 0;

                                    return (
                                        <div 
                                            key={idx} 
                                            className={`grid grid-cols-[200px_480px_300px] items-stretch min-h-[120px] w-full ${isAlternate ? 'bg-slate-50' : 'bg-transparent'}`}
                                        >
                                            {/* Left Text Label */}
                                            <div className="pr-6 flex items-center justify-end text-right text-base text-black py-6 border-r border-transparent">
                                                {item.name}
                                            </div>

                                            {/* Tracking Line Area */}
                                            <div className="relative flex items-center py-6 w-full pr-12 pl-16 pointer-events-none">
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
                                                    
                                                    {/* Large Left Start Node Bubble */}
                                                    <motion.div 
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ type: "spring", duration: 0.8 }}
                                                        className="absolute -left-12 w-20 h-20 flex flex-col items-center justify-center bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border-[3px] border-slate-50 z-20 flex-shrink-0"
                                                    >
                                                        <VialIcon className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
                                                    </motion.div>

                                                    {/* End Node Circle (Empty Ring) */}
                                                    <motion.div 
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: 1.6 }}
                                                        className="absolute w-5 h-5 rounded-full bg-white border-[3px] z-20"
                                                        style={{ left: lineWidthPercent, borderColor: item.color, transform: 'translateX(-50%)' }}
                                                    />

                                                    {/* Sub-label next to end node */}
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 1.8 }}
                                                        className="absolute text-[11px] text-black font-medium tracking-tight whitespace-nowrap z-30"
                                                        style={{ left: `calc(${lineWidthPercent} + 1.25rem)` }}
                                                    >
                                                        {idx % 2 === 0 ? t('vaccinePipeline.targetAdults') as string : t('vaccinePipeline.targetInfants') as string}
                                                    </motion.div>

                                                </div>
                                            </div>

                                            {/* Right Milestones / Notes */}
                                            <div className="pl-8 py-6 text-[12px] font-medium tracking-tight text-black flex flex-col justify-center border-l border-slate-300">
                                                {item.note ? (
                                                    <div className="space-y-2">
                                                        <p className="font-medium text-black mb-2">{t('vaccinePipeline.announceSafety') as string}</p>
                                                        <ul className="list-disc pl-4 space-y-1">
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
                                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col gap-6"
                            >
                                {/* Header: VAX ID & Name */}
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm border-[3px] border-slate-50 z-20 shrink-0"
                                    >
                                        <VialIcon className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <div className="flex flex-col justify-center pt-1">
                                        <h3 className="text-lg md:text-base font-medium text-black leading-tight">
                                            {item.name}
                                        </h3>
                                        <span className="text-base text-black font-medium tracking-tight mt-1">
                                            {t('vaccinePipeline.target') as string} {idx % 2 === 0 ? t('vaccinePipeline.targetAdults') as string : t('vaccinePipeline.targetInfants') as string}
                                        </span>
                                    </div>
                                </div>

                                {/* Tracking Bar */}
                                <div className="w-full relative mt-2 mb-2">
                                    <div className="flex justify-between text-[10px] md:text-base text-black mb-3 px-1">
                                        <span>{t('vaccinePipeline.phases.preClinical') as string}</span>
                                        <span>{t('vaccinePipeline.phases.phase3') as string}</span>
                                        <span className="font-bold text-brand-primary">{t('vaccinePipeline.phases.approved') as string}</span>
                                    </div>
                                    <div className="relative w-full h-2 bg-slate-200 rounded-full">
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
                                            className="absolute w-4 h-4 rounded-full bg-white border-[3px] top-1/2 -translate-y-1/2 shadow-sm"
                                            style={{ left: lineWidthPercent, borderColor: item.color, transform: 'translate(-50%, -50%)' }}
                                        />
                                    </div>
                                </div>

                                {/* Milestones */}
                                {item.note && (
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <p className="font-medium text-[11px] text-black mb-2">{t('vaccinePipeline.milestonesTitleShort') as string}</p>
                                        <ul className="text-[11px] font-medium tracking-tight text-black list-disc pl-4 space-y-1">
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
        </section>
    );
};

export default VaccinePipeline;
