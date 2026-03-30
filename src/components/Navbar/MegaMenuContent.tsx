import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MegaMenuLink {
    name: string;
    href: string;
    description?: string;
}

interface MegaMenuSection {
    title: string;
    links: MegaMenuLink[];
}

interface MegaMenuContentProps {
    sections: MegaMenuSection[];
    featured?: {
        title: string;
        description: string;
        image: string;
        link: string;
    };
}

const MegaMenuContent: React.FC<MegaMenuContentProps> = ({ sections, featured }) => {
    const { t } = useLanguage();
    return (
        <div className="flex bg-white w-full max-w-7xl mx-auto min-h-[400px]">
            {/* Left/Center: Main Links */}
            <div className="flex flex-1 p-10 gap-16">
                {sections.map((section, idx) => (
                    <div key={idx} className="flex-1 min-w-[200px]">
                        <h3 className="text-black text-xl font-medium tracking-tight  tracking-[0.2em] mb-6 pb-2 border-b border-gray-100">
                            {section.title}
                        </h3>
                        <ul className="space-y-4">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <Link 
                                        to={link.href}
                                        className="group block"
                                    >
                                        <div className="text-[15px] font-medium tracking-tight text-black group-hover:text-brand-primary transition-colors flex items-center gap-1">
                                            {link.name}
                                            <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </div>
                                        {link.description && (
                                            <p className="text-[14px] text-black mt-1 font-medium leading-relaxed">
                                                {link.description}
                                            </p>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Right: Featured Content */}
            {featured && (
                <div className="w-[350px] bg-gray-50 p-10 flex flex-col">
                    <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
                        <img src={featured.image} alt={featured.title} className="w-full h-48 object-cover" />
                    </div>
                    <h4 className="text-black text-xl font-medium tracking-tight mb-3">{featured.title}</h4>
                    <p className="text-[15px] text-black mb-6 leading-relaxed">
                        {featured.description}
                    </p>
                    <Link 
                        to={featured.link}
                        className="text-[14px] font-medium tracking-tight  tracking-widest text-brand-primary hover:gap-3 transition-all flex items-center gap-2"
                    >
                        {t('common.exploreNow')} <ChevronRight size={14} />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MegaMenuContent;
