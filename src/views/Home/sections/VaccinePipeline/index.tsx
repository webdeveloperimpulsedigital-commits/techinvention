import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';
const logoDNA = "/TechInvention-gif.gif";

import { Syringe } from 'lucide-react';

const SyringeIcon = ({ color = "currentColor", className = "" }) => (
    <Syringe color={color} className={className} />
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

    const bioData = (t('biotherapeuticsPipeline.items') as any[]) || [
        { name: "Recombinant Human Erythropoietin", phase: "Phase 3", color: "#2065B3", desc: "For treatment of anemia" },
        { name: "Pegfilgrastim", phase: "Phase 1", color: "#87A840", desc: "For neutropenia treatment" }
    ];

    return (
        <section id="vaccine-pipeline" className="pt-16 md:pt-20 pb-4 md:pb-8 relative bg-brand-primary/5 overflow-hidden border-t border-brand-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* GLOBAL SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title={t('vaccinePipeline.title')?.replace('{pipeline}', t('vaccinePipeline.pipeline') as string) || "Vaccine & Biotherapeutics Pipeline"} />
                        </h2>
                    </div>
                </div>

                <div className="w-full">
                    
                    {/* VACCINE PIPELINE */}
                    <div className="w-full flex flex-col pt-4">

                {/* DESKTOP LAYOUT (Horizontal Timeline) */}
                <div className="hidden lg:block w-full pb-8 pr-4">
                    <div className="w-full">
                        {/* Table Header (Phases) */}
                        <div className="grid grid-cols-[160px_1fr] xl:grid-cols-[180px_1fr] gap-0 text-[11px] xl:text-[12px] font-semibold text-black tracking-wide pb-4 border-b border-slate-300">
                            <div>{/* Empty for row label */}</div>
                            
                            {/* Phase Columns Container */}
                            <div className="grid grid-cols-4 w-full pr-12">
                                <div className="text-center font-bold">{t('vaccinePipeline.phases.rd') as string}</div>
                                <div className="text-center font-bold">{t('vaccinePipeline.phases.poc') as string}</div>
                                <div className="text-center font-bold">{t('vaccinePipeline.phases.preClinical') as string}</div>
                                <div className="text-center font-bold">{t('vaccinePipeline.phases.phase12') as string}</div>
                            </div>
                        </div>

                        {/* Table Rows Container with vertical guides */}
                        <div className="relative mt-8">
                            
                            {/* Vertical Dotted Guide Lines (Background Layer) */}
                            <div className="absolute inset-0 grid grid-cols-[160px_1fr] xl:grid-cols-[180px_1fr] gap-0 pointer-events-none pb-8 h-full z-0">
                                <div></div>
                                <div className="grid grid-cols-4 w-full pr-12 h-full">
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                    <div className="border-l border-dotted border-slate-300"></div>
                                </div>
                            </div>

                            {/* Data Rows Container */}
                            <div className="relative z-10 flex flex-col gap-0 w-full border-b border-slate-100">
                                {pipelineData.map((item, idx) => {
                                    // 100% progress spans exactly the 4 columns (R&D to Phase 1/2).
                                    const lineWidthPercent = `${item.progress}%`;
                                    const isAlternate = idx % 2 !== 0;

                                    return (
                                        <div 
                                            key={idx} 
                                            className={`grid grid-cols-[160px_1fr] xl:grid-cols-[180px_1fr] items-stretch min-h-[120px] w-full ${isAlternate ? 'bg-slate-50' : 'bg-transparent'}`}
                                        >
                                            {/* Left Text Label */}
                                            <div className="pr-4 xl:pr-6 flex items-center justify-end text-right text-[14px] xl:text-[15px] font-medium text-black py-4 border-r border-transparent">
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
                                                        <SyringeIcon className="w-7 h-7" color={item.color} />
                                                    </motion.div>



                                                </div>
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
                                className="bg-slate-50 rounded-none p-6 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col gap-6"
                            >
                                {/* Header: VAX ID & Name */}
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm border-[3px] border-slate-50 z-20 shrink-0"
                                    >
                                        <SyringeIcon className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <div className="flex flex-col justify-center pt-1">
                                        <h3 className="text-[18px] font-medium text-black leading-tight">
                                            {item.name}
                                        </h3>

                                    </div>
                                </div>

                                {/* Tracking Bar */}
                                <div className="w-full relative mt-2 mb-2">
                                    <div className="flex justify-between text-[18px] text-black mb-3 px-1">
                                        <span>{t('vaccinePipeline.phases.rd') as string}</span>
                                        <span>{t('vaccinePipeline.phases.preClinical') as string}</span>
                                        <span className="font-bold text-brand-primary">{t('vaccinePipeline.phases.phase12') as string}</span>
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
                                            className="absolute top-1/2 shadow-sm z-10"
                                            style={{ left: lineWidthPercent, transform: 'translate(-25%, -50%)' }}
                                        >
                                            <SyringeIcon className="w-5 h-5 bg-white rounded-full drop-shadow-sm" color={item.color} />
                                        </motion.div>
                                    </div>
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
};

export default VaccinePipeline;
