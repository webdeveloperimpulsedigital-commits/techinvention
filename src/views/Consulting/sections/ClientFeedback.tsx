import React, { useState } from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientFeedback() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const feedbackImages = [
        { src: "/feedback-4.png", alt: "Client Feedback Letter - IAVI" },
        { src: "/feedback-3.jpg", alt: "Client Feedback Letter - UNOPS Biosafety & Biosecurity Training" },
        { src: "/feedback-2.jpg", alt: "Client Feedback Letter - UNOPS Vaccine Analytics Training" },
        { src: "/feedback-1.jpg", alt: "Client Feedback Letter - WHO" }
    ];

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100 font-sans">
            <div className="max-w-[1300px] mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[38px] font-medium tracking-wide">
                            <span className="text-[#1955A6]">Feedback</span> <span className="text-[#5C7625]">from Clients</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* 4-Column Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {feedbackImages.map((img, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                            <div 
                                onClick={() => setSelectedImage(img.src)}
                                className="group bg-white p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-[#1955A6]/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Image Container */}
                                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-white border border-slate-200/80 flex items-center justify-center">
                                    <img 
                                        src={img.src} 
                                        alt={img.alt} 
                                        className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]" 
                                    />
                                    
                                    {/* Hover overlay icon */}
                                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/90 p-3 rounded-full shadow-lg text-slate-800 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <Maximize2 size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>

            {/* Lightbox / Modal View */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Image Container */}
                        <motion.div 
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-[95%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] bg-white rounded-2xl p-2 flex items-center justify-center shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image card
                        >
                            <img 
                                src={selectedImage} 
                                alt="Client Feedback Letter Fullscreen" 
                                className="max-w-full max-h-[85vh] object-contain rounded-xl cursor-default" 
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
