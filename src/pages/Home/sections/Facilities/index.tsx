import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import horizonImg from '../../../../assets/images/about_lab.png';
import gcmcImg from '../../../../assets/images/about_corporate.png';

const slideData = [
  {
    id: 'horizon',
    title: 'HORIZON',
    subtitleParts: [
        { letter: 'L', rest: 'orem ipsum dolor ' },
        { letter: 'S', rest: 'it amet ' }
    ],
    color: '#8a1c14',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: horizonImg
  },
  {
    id: 'gcmc',
    title: 'GCMC',
    subtitleParts: [
        { letter: 'L', rest: 'orem ipsum dolor ' },
        { letter: 'S', rest: 'it amet ' }
    ],
    color: '#1755A6',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: gcmcImg
  }
];

const Facilities = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slideData.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length);

    return (
        <section id="infrastructure" className="w-full bg-gray-50 py-24 pb-32 relative overflow-hidden border-y border-gray-200">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">

                <div className="relative bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 flex flex-col-reverse md:flex-row min-h-[600px] xl:w-11/12 mx-auto">
                    {/* Content Side */}
                    <div className="w-full md:w-1/2 px-8 pt-16 pb-32 md:p-16 lg:p-24 flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                className="flex flex-col h-full"
                            >
                                <h3 className="text-5xl lg:text-[4rem] font-bold mb-6 tracking-tight uppercase text-gray-900 md:text-left text-center">
                                    {slideData[currentIndex].title}
                                </h3>
                                
                                <p className="text-gray-900 font-medium text-lg lg:text-xl tracking-wide mb-8 leading-relaxed max-w-lg md:text-left text-center">
                                    {slideData[currentIndex].subtitleParts.map(part => part.letter + part.rest).join('')}
                                </p>
                                
                                <p className="text-gray-600 text-[17px] leading-relaxed mb-8 md:mb-16 max-w-xl md:text-left text-center">
                                    {slideData[currentIndex].description}
                                </p>
                                
                                <div className="mt-auto flex w-full justify-center md:justify-start">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative flex items-center gap-4 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-xl overflow-hidden w-fit"
                                    >
                                        <span className="relative z-10 tracking-widest text-[10px] uppercase">
                                            Read More
                                        </span>
                                        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Controls - Centered gracefully between image and text on mobile, bottom right on desktop */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:translate-x-0 md:translate-y-0 md:bottom-16 md:left-auto md:right-16 flex items-center gap-4 z-30 bg-white/50 backdrop-blur-md md:bg-transparent md:backdrop-blur-none p-2 md:p-0 rounded-full shadow-sm md:shadow-none">
                            <button 
                                onClick={prevSlide}
                                aria-label="Previous Slide"
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm hover:shadow active:scale-95 bg-white/50 md:bg-transparent"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button 
                                onClick={nextSlide}
                                aria-label="Next Slide"
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm hover:shadow active:scale-95 bg-white/50 md:bg-transparent"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden bg-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={currentIndex}
                                src={slideData[currentIndex].image}
                                alt={slideData[currentIndex].title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Overlay to ensure text readability isn't an issue here, but also protects from harsh contrast edges */}
                        <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Facilities;
