import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';
import DNAHelixTransition from '../../../../components/DNAHelixTransition';

// Using the generated CEO portrait and another image for the second profile
import ceoPortrait from '/C:/Users/AAA RENTAL LLP/.gemini/antigravity/brain/152e41d4-d80f-41ac-9bbc-a95afd216297/ceo_portrait_techinvention_1772909834784.png';
import elenaPortrait from '../../../../assets/images/testimonial_1.png';

const About = () => {
    const { t } = useLanguage();

    const rawProfiles = t('about.leadership.profiles');
    const profiles = Array.isArray(rawProfiles) ? rawProfiles : [
        {
            name: t('about.leadership.ceo.name') || 'Syed S. Ahmed',
            role: t('about.leadership.ceo.role') || 'Founder & CEO',
            message: t('about.leadership.ceo.message') || '',
            viewProfile: t('about.leadership.ceo.viewProfile') || 'View Profile'
        },
        {
            name: 'Dr. Elena Rodriguez',
            role: 'Head of Vaccine R&D',
            message: 'Committed to global health equity.',
            viewProfile: 'View Profile'
        }
    ];

    const images = [ceoPortrait, elenaPortrait];
    const displayProfiles = profiles.slice(0, 2);

    return (
        <section id="about" className="relative bg-slate-50 py-16 md:py-24 border-y border-slate-100">
            <DNAHelixTransition />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <ScrollReveal direction="up" className="max-w-3xl w-full">
                        <span className="text-[11px] font-medium tracking-[0.4em] text-brand-primary uppercase block mb-4">
                            {t('about.leadership.title') as string || "Our Leadership"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-wide mb-6 whitespace-nowrap">
                            <SplitTitle title={t('about.leadership.tagline') as string || "Lorem Ipsum"} />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {displayProfiles.map((profile, index) => (
                        <ScrollReveal 
                            key={index}
                            direction={index === 0 ? "right" : "left"} 
                            delay={0.1}
                            className="group relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <img 
                                src={images[index % images.length]} 
                                alt={profile.name} 
                                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 origin-center"
                            />

                            {/* Permanent Bottom Gradient for name legibility */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
                            
                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-brand-primary/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-sm" />

                            {/* Content Container */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
                                
                                {/* Message and Button (Revealed on Hover) */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-30 transform translate-y-16 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="mb-auto mt-8 hidden md:block">
                                        <div className="w-10 h-1 bg-white/50 rounded-full" />
                                    </div>
                                    <p className="text-white/95 text-base md:text-lg leading-relaxed line-clamp-4 lg:line-clamp-6 mb-8 font-medium">
                                        "{profile.message || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}"
                                    </p>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group/btn relative flex items-center gap-4 bg-white text-brand-primary px-7 py-3 md:px-8 md:py-4 rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-slate-50 overflow-hidden w-fit shadow-xl border border-transparent"
                                    >
                                        <span className="relative z-10 tracking-widest text-[10px] uppercase">
                                            {profile.viewProfile || 'View Profile'}
                                        </span>
                                        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center text-brand-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover/btn:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                    </motion.button>
                                </div>

                                {/* Always Visible: Name and Role */}
                                <div className="relative transform transition-transform duration-500 ease-out group-hover:-translate-y-32 group-hover:opacity-0 md:group-hover:-translate-y-48">
                                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-white mb-2 md:mb-3 tracking-tight">
                                        {profile.name}
                                    </h3>
                                    <p className="text-white group-hover:text-white/80 font-medium tracking-[0.2em] text-[10px] md:text-[11px] uppercase transition-colors duration-500">
                                        {profile.role}
                                    </p>
                                </div>

                            </div>
                            
                            {/* Corner Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-colors duration-700" />
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Subtle Noise Texture for tactile feel */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] noise-texture mix-blend-overlay" />
        </section>
    );
};

export default About;
