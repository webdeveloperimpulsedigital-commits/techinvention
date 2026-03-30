import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import { AnimatedTestimonials } from '../../../../components/ui/animated-testimonials';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';


import testimonial1 from '../../../../assets/images/testimonial_1.png';
import testimonial2 from '../../../../assets/images/testimonial_2.png';
import testimonial3 from '../../../../assets/images/testimonial_3.png';

const testimonialImages: Record<string, string> = {
    testimonial_1: testimonial1,
    testimonial_2: testimonial2,
    testimonial_3: testimonial3,
};

const TestimonialsAnimated = () => {
    const { t } = useLanguage();
    const testimonialsData = t('testimonials.items') as any[] || [];

    const formattedTestimonials = testimonialsData.map((item) => ({
        quote: item.content,
        name: item.name,
        designation: item.role,
        src: testimonialImages[item.image] || item.image,
    }));

    if (!formattedTestimonials.length) return null;

    return (
        <section id="testimonials" className="relative py-12 md:py-32 bg-slate-50/50 border-t border-black/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-primary/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-8 md:mb-20 z-20 relative">
                    <ScrollReveal direction="up">
                        <span className="text-[11px] font-medium tracking-tight  tracking-[0.4em] text-brand-primary mb-4 block">
                            {t('common.testimonials') || "PARTNERSHIPS & TESTIMONIALS"}
                        </span>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight tracking-tighter justify-center text-center mb-6">
                            <SplitTitle title={t('testimonials.title') as string} />
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-black max-w-2xl mx-auto text-lg leading-relaxed font-medium tracking-tight">
                            {t('testimonials.subtitle')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="mt-4 md:mt-10">
                    <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAnimated;
