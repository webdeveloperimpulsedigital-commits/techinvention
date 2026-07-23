import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SplitTitle } from '../../../components/Common/SplitTitle';

export default function LifeAtTechInvention() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { src: "/team-techinvention.jpg" },
        { src: "/image-1.jpeg" },
        { src: "/img-2.jpeg" },
        { src: "/img-3.jpeg" },
        { src: "/img-4.jpeg" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/4 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">

                {/* Header with Navigation Controls */}
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide">
                        <SplitTitle title="Life as a Techknight" splitIndex={3} />
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrev}
                            className="p-3 bg-[#1955A6] text-white hover:bg-[#1955A6]/90 rounded-full shadow-md transition-all duration-300"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 bg-[#1955A6] text-white hover:bg-[#1955A6]/90 rounded-full shadow-md transition-all duration-300"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider Container with Left and Right Peeking Images */}
                <div className="relative w-full overflow-hidden py-4">
                    {/* Adjusted container height to match 16:9 aspect ratio of landscape photos */}
                    <div className="flex justify-center items-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px]">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {slides.map((slide, idx) => {
                                const N = slides.length;
                                let diff = idx - currentIndex;

                                // Normalize diff to the range [-floor(N/2), floor((N-1)/2)]
                                // for a circular list.
                                if (diff > N / 2) diff -= N;
                                if (diff < -N / 2) diff += N;

                                // Identify slide position
                                let position = "inactive";
                                if (diff === 0) position = "active";
                                else if (diff === -1) position = "left";
                                else if (diff === 1) position = "right";
                                else if (diff < -1) position = "far-left";
                                else if (diff > 1) position = "far-right";

                                // Dynamic width configuration matching landscape 16:9 ratio
                                let transformClass = "";
                                let clickAction = undefined;

                                if (position === "active") {
                                    transformClass = "scale-100 opacity-100 z-20 pointer-events-auto translate-x-0 w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%]";
                                } else if (position === "left") {
                                    transformClass = "scale-90 opacity-40 z-10 pointer-events-auto -translate-x-[48%] sm:-translate-x-[42%] w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%] cursor-pointer hover:opacity-60";
                                    clickAction = handlePrev;
                                } else if (position === "right") {
                                    transformClass = "scale-90 opacity-40 z-10 pointer-events-auto translate-x-[48%] sm:translate-x-[42%] w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%] cursor-pointer hover:opacity-60";
                                    clickAction = handleNext;
                                } else if (position === "far-left") {
                                    transformClass = "scale-75 opacity-0 z-0 pointer-events-none -translate-x-[120%] w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%]";
                                } else if (position === "far-right") {
                                    transformClass = "scale-75 opacity-0 z-0 pointer-events-none translate-x-[120%] w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%]";
                                }

                                return (
                                    <motion.div
                                        key={idx}
                                        layout
                                        onClick={clickAction}
                                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                                        className={`absolute h-full transition-all duration-700 ease-out overflow-hidden rounded-2xl shadow-lg border border-slate-200/40 bg-white ${transformClass}`}
                                    >
                                        <img
                                            src={slide.src}
                                            alt={`Life at TechInvention ${idx + 1}`}
                                            className="w-full h-full object-cover object-center"
                                        />

                                        {/* Click to Navigate Overlays on peeking slides */}
                                        {position !== "active" && (position === "left" || position === "right") && (
                                            <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                                                <div className="p-3 rounded-full bg-white/80 shadow-md text-slate-800 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {position === "left" ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-6 bg-[#1955A6]' : 'w-1.5 bg-slate-300'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
