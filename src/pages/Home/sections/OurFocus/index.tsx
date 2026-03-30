import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import { Syringe, Microscope, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurFocus = () => {
    const { t } = useLanguage();

    const items = [
        {
            title: t('megaMenu.diagnostics') || 'Diagnostics',
            icon: <Microscope className="w-12 h-12 md:w-16 md:h-16 text-brand-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.5} />,
            link: '/solutions'
        },
        {
            title: t('megaMenu.vaccines') || 'Vaccines',
            icon: <Syringe className="w-12 h-12 md:w-16 md:h-16 text-brand-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.5} />,
            link: '/solutions'
        },
        {
            title: t('hero.slides.2.title') || 'Biotherapeutics',
            icon: <Dna className="w-12 h-12 md:w-16 md:h-16 text-brand-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-indigo-600" strokeWidth={1.5} />,
            link: '/solutions'
        }
    ];

    return (
        <section className="w-full bg-white relative z-20 py-16 pb-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 w-full">
                    {items.map((item, index) => (
                        <Link 
                            to={item.link} 
                            key={index} 
                            className="relative group flex flex-col items-center justify-center text-center"
                        >
                            {/* Circle Container */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(23,85,166,0.15)] group-hover:border-brand-primary/20 transition-all duration-500 flex items-center justify-center mb-6 relative overflow-hidden">
                                {/* Subtle hover background glow */}
                                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                {item.icon}
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-brand-primary">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurFocus;
