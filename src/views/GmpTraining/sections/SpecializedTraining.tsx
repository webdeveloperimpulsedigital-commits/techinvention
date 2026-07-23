import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Activity, GitMerge, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const ImageSlider = ({ images }: { images: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-slate-100 group">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            
            {/* Navigation Arrows on Hover */}
            <button 
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-[#1955A6] hover:text-white text-slate-800 backdrop-blur-sm shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-[#1955A6] hover:text-white text-slate-800 backdrop-blur-sm shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next slide"
            >
                <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const specializedPrograms = [
    {
        title: "Biosafety & Biosecurity Training for UNOPS",
        desc: "Delivered structured training in biosafety, biosecurity and containment practices. The program blended technical understanding with practical risk-management approaches for modern biomedical laboratories. It helps build institutional capability for safe, compliant and responsible scientific operations.",
        icon: ShieldAlert,
        color: '#1955A6',
        bg: 'bg-[#1955A6]/5',
        images: [
            "/Biosecurity-Training.jpg",
            "/Biosecurity-Training-1.jpg",
            "/Biosecurity-Training-4.jpg"
        ]
    },
    {
        title: "Training in Vaccine Analytics for UNOPS",
        desc: "Enhanced vaccine development capability through focused training in analytical science and product evaluation. The program supported understanding of critical quality attributes, analytical methods, assay relevance and data interpretation.",
        icon: Activity,
        color: '#5C7625',
        bg: 'bg-[#5C7625]/5',
        images: [
            "/Analytics-Training.jpg",
            "/Analytics-Training-2.jpg",
            "/Analytics-Training-3.jpg"
        ]
    },
    {
        title: "Advanced Bioprocessing Course at Regional Centre for Biotechnology(RCB)",
        desc: "The training covered the fundamentals of upstream and downstream processing, Quality Control, Quality Assurance and Good Manufacturing Practices. The sessions also included hands-on exposure to streaking and shake-flask techniques, fermentation operations, vaccine production workflows, and QC laboratory practices, helping participants connect core bioprocessing concepts with real-world industry applications.",
        icon: GitMerge,
        color: '#1955A6',
        bg: 'bg-[#1955A6]/5',
        images: [
            "/RCB.jpg",
            "/RCB-1.jpg",
            "/RCB-2.jpg"
        ]
    }
];

export default function SpecializedTraining() {
    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title="Successful Programs" />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="space-y-24">
                    {specializedPrograms.map((program, idx) => {
                        const Icon = program.icon;
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center text-left`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 w-full">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 ${program.bg} shadow-sm`}>
                                        <Icon className="w-6 h-6" style={{ color: program.color }} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                        {program.title}
                                    </h3>
                                    <p className="text-slate-600 text-[16px] md:text-[17px] font-medium leading-relaxed">
                                        {program.desc}
                                    </p>
                                </div>

                                {/* Image Slider Side */}
                                <div className="flex-1 w-full max-w-2xl lg:max-w-none">
                                    <ImageSlider images={program.images} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
