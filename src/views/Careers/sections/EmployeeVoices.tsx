import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const testimonials = [
    {
        name: "Shahnawaz Shaikh",
        designation: "Admin and HR",
        experience: "9+ Years",
        quote: "Having joined TechInvention in an Admin and HR role 10 years ago, I have had the privilege of growing alongside the organisation and taking on greater responsibility, ownership and purpose over the years. It has been an inspiring and deeply fulfilling journey, and I am proud to have witnessed and contributed to TechInvention's remarkable growth and evolution.",
        image: "/Shahnawaz.jpg"
    },
    {
        name: "Aziz Mandsaurwala",
        designation: "Senior Manager - Global BD",
        experience: "6+ Years",
        quote: "Working at TechInvention means being part of projects that connect science, strategy and real-world healthcare impact. Every assignment brings learning and growth.",
        image: "/Aziz.jpeg"
    },
    {
        name: "Sarang Pathak",
        designation: "General Manager",
        experience: "9+ Years",
        quote: "Working at TechInvention has given me the opportunity to continuously learn, take on diverse responsibilities and contribute to meaningful work. The trust, exposure and support I have received here have played an important role in my professional growth and confidence.",
        image: "/Sarang-Pathak.jpeg"
    },
    {
        name: "Priya Dhawale",
        designation: "Deputy Manager - GBD",
        experience: "5+ Years",
        quote: "Completing over six years at TechInvention has been an incredibly rewarding journey. It has been inspiring to witness the company's transformation from a startup into a growing MSME with a strong global presence. Throughout this journey, I have been given the opportunity to work on diverse international business development and strategic consulting projects, collaborate with global stakeholders, and continuously expand my knowledge in the life sciences sector. The trust, support, and learning opportunities provided by the leadership and my colleagues have played a significant role in my professional growth. I look forward to being part of TechInvention's continued success and innovation.",
        image: "/Priya-photo.jpg"
    }
];

export default function EmployeeVoices() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1955A6]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#5C7625]/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide mb-4 leading-tight text-slate-900">
                            <SplitTitle title="Employee Voices" />
                        </h2>
                        <h3 className="text-[18px] md:text-[20px] font-medium text-slate-500">
                            Stories from the people growing with TechInvention.
                        </h3>
                    </ScrollReveal>
                </div>
            </div>

            {/* Infinite Marquee Slider container */}
            <div className="relative w-full overflow-hidden py-10">
                <motion.div 
                    className="flex gap-6 md:gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {/* Duplicate the array to create a seamless loop */}
                    {[...testimonials, ...testimonials].map((testimonial, idx) => (
                        <div 
                            key={idx} 
                            className="w-[320px] md:w-[420px] bg-[#1955A6] rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/20 z-0" />
                            
                            {/* Profile Info Header (Image + Info first) */}
                            <div className="flex items-center gap-5 mb-6 relative z-10">
                                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden flex items-center justify-center flex-shrink-0">
                                    {testimonial.image ? (
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User className="w-8 h-8 text-white/30" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-bold text-white mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[14px] font-semibold text-white/80 mb-1">
                                        {testimonial.designation}
                                    </p>
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider">
                                        {testimonial.experience}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Quote Content */}
                            <div className="relative z-10 flex-1">
                                <p className="text-[15px] md:text-[16px] leading-relaxed text-white/95 font-medium italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
