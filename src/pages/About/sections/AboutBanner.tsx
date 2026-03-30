import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import corporateImg from '../../../assets/images/about_corporate.png';
import labImg from '../../../assets/images/about_lab.png';
import TextReveal from '../../../components/Common/TextReveal';

interface AboutBannerProps {
    title?: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ title }) => {
    const { t } = useLanguage();
    const displayTitle = title || t('navbar.about');

    return (
        <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            {/* Background Images Layered */}
            <div className="absolute inset-0 z-0 text-brand-content">
                <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full relative">
                        <img
                            src={corporateImg}
                            alt="Corporate"
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>
                    <div className="w-1/2 h-full relative">
                        <img
                            src={labImg}
                            alt="Laboratory"
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 w-full">
                {/* Breadcrumb Structure */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2 text-white/60 text-[11px] font-medium tracking-tight  tracking-[0.4em] mb-8"
                >
                    <Link to="/" className="hover:text-white transition-colors">{t('navbar.home')}</Link>
                    <ChevronRight size={12} className="opacity-40" />
                    <span className="text-white/90">{displayTitle}</span>
                </motion.div>

                <div className="mx-auto max-w-5xl">
                    <TextReveal
                        text={displayTitle}
                        mode="light"
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.9] tracking-tighter  justify-center text-center"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
