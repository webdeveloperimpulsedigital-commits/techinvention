import React, { useRef, useMemo } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { Quote } from 'lucide-react';

import testimonial1 from '../../../../assets/images/testimonial_1.png';
import testimonial2 from '../../../../assets/images/testimonial_2.png';
import testimonial3 from '../../../../assets/images/testimonial_3.png';
import TextReveal from '../../../../components/Common/TextReveal';

const testimonialImages: Record<string, string> = {
    testimonial_1: testimonial1,
    testimonial_2: testimonial2,
    testimonial_3: testimonial3,
};

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    image: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => {
    return (
        <div className="flex-shrink-0 w-[320px] md:w-[450px] px-4">
            <div className="bg-white/40 backdrop-blur-xl border border-black/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group h-full flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                    <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg group-hover:shadow-brand-primary/20">
                        <img
                            src={testimonialImages[image]}
                            alt={name}
                            className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div>
                        <h4 className="text-base md:text-lg font-medium tracking-tight text-brand-content  tracking-widest leading-tight mb-1">
                            {name}
                        </h4>
                        <p className="text-base md:text-lg text-brand-primary font-medium tracking-tight tracking-wide  opacity-80">
                            {role}
                        </p>
                    </div>
                </div>

                <div className="relative flex-grow">
                    <Quote className="absolute -top-4 -left-4 text-brand-primary/10 h-10 w-10 md:h-12 md:w-12 -z-10" />
                    <p className="text-lg md:text-xl text-black leading-relaxed font-medium tracking-tight italic italic-quote">
                        "{content}"
                    </p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const { t } = useLanguage();
    const testimonials = t('testimonials.items') as any[] || [];
    const containerRef = useRef<HTMLDivElement>(null);

    // Duplicate testimonials for seamless looping
    const tripledItems = useMemo(() => [...testimonials, ...testimonials, ...testimonials], [testimonials]);

    const x = useMotionValue(0);
    const baseVelocity = -0.5; // Speed of the slider
    const isHovered = useRef(false);

    useAnimationFrame((time, delta) => {
        if (isHovered.current || !containerRef.current) return;

        // Move the x position
        const moveBy = baseVelocity * (delta / 16);
        let nextX = x.get() + moveBy;

        // Calculate reset point
        const totalWidth = containerRef.current.scrollWidth;
        const oneSetWidth = totalWidth / 3;

        // Reset if it goes beyond the first set
        if (nextX <= -oneSetWidth) {
            nextX = 0;
        }

        x.set(nextX);
    });

    if (!testimonials.length) return null;

    return (
        <section className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden border-t border-black/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-primary/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] font-medium tracking-tight  tracking-[0.4em] text-brand-primary mb-4 block"
                    >
                        {t('common.testimonials') || "PARTNERSHIPS & TESTIMONIALS"}
                    </motion.span>
                    <div className="mb-6">
                        <TextReveal
                            text={t('testimonials.title')}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-content leading-tight tracking-tighter  justify-center text-center"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black max-w-2xl mx-auto text-lg leading-relaxed font-medium tracking-tight"
                    >
                        {t('testimonials.subtitle')}
                    </motion.p>
                </div>
            </div>

            <div
                className="relative cursor-grab active:cursor-grabbing overflow-hidden"
                onMouseEnter={() => isHovered.current = true}
                onMouseLeave={() => isHovered.current = false}
            >
                <motion.div
                    ref={containerRef}
                    className="flex"
                    style={{ x }}
                >
                    {tripledItems.map((item, idx) => (
                        <TestimonialCard
                            key={`${item.name}-${idx}`}
                            {...item}
                        />
                    ))}
                </motion.div>

                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-slate-50/50 via-slate-50/30 to-transparent pointer-events-none z-20" />
                <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-slate-50/50 via-slate-50/30 to-transparent pointer-events-none z-20" />
            </div>
        </section>
    );
};

export default Testimonials;
