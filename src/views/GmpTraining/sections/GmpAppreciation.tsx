import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const certificates = [
    {
        id: 'feedback1',
        image: '/application-feedback-1.jpg',
        title: 'Appreciation Letter',
        issuer: 'UNOPS'
    },
    {
        id: 'feedback2',
        image: '/application-feedback-2.jpg',
        title: 'Appreciation Letter',
        issuer: 'UNOPS'
    }
];

export default function GmpAppreciation() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide">
                            <SplitTitle title="Recognition" />
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Grid - Centered 2-column layout for the two feedback letters */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="bg-[#F8FAFC] border border-slate-200/50 rounded-[2rem] p-6 text-left relative flex flex-col justify-between group hover:bg-white hover:shadow-xl cursor-pointer transition-all duration-500"
                        >
                            <div>
                                {/* image preview container */}
                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-4 shadow-sm">
                                    <img loading="lazy"
                                        src={cert.image}
                                        alt={cert.title}
                                        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#1955A6]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                            <ZoomIn className="w-5 h-5 text-[#1955A6]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Lightbox Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                className="relative bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black rounded-full transition-colors z-10"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="w-full flex flex-col items-center pt-4">
                                    {/* High-res image display */}
                                    <div className="w-full bg-[#fcfcfc] rounded-2xl border border-slate-100 p-6 flex items-center justify-center max-h-[75vh] overflow-hidden">
                                        <img loading="lazy"
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            className="max-w-full max-h-[70vh] object-contain drop-shadow-xl"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
