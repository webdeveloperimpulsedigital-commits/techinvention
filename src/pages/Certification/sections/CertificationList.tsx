import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import TextReveal from '../../../components/Common/TextReveal';

// --- IMAGE REGISTRY ---
// Change image paths here to update them throughout the component
import dnbRisk from '../../../assets/images/certifications/dnb_risk_score.png';
import iso13485 from '../../../assets/images/certifications/iso13485.png';
import esgDuns from '../../../assets/images/certifications/esg_duns.png';
import dsirIso from '../../../assets/images/certifications/dsir_iso9001.png';
import gptw from '../../../assets/images/certifications/gptw_80iac.png';
import pioneer from '../../../assets/images/certifications/pioneer_sme.png';

/**
 * Configuration for certifications.
 * Each 'id' corresponds exactly to the key in our translation files.
 * This makes it extremely easy to reorder or swap images.
 */
const CERT_CONFIG = [
    { id: 'dnb', image: dnbRisk },
    { id: 'iso13485', image: iso13485 },
    { id: 'esg', image: esgDuns },
    { id: 'duns', image: esgDuns },
    { id: 'dsir', image: dsirIso },
    { id: 'iso9001', image: dsirIso },
    { id: 'gptw', image: gptw },
    { id: 'tax80iac', image: gptw },
    { id: 'helloTomorrow', image: pioneer },
    { id: 'innovative100', image: pioneer }
];

const CertificationList = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-[11px] block">
                            {t('certifications.tag')}
                        </span>
                    </div>
                    <div className="mb-6">
                        <TextReveal
                            text={t('certifications.title').replace('{certifications}', t('certifications.certifications'))}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-content leading-tight tracking-tighter  justify-center text-center"
                        />
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <TextReveal
                            text={t('certifications.desc')}
                            className="text-black text-lg leading-relaxed justify-center text-center"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {CERT_CONFIG.map((cert, index) => {
                        // Dynamically resolve translation strings using the key ID
                        const name = t(`certifications.list.${cert.id}.name`);
                        const year = t(`certifications.list.${cert.id}.year`);
                        const info = t(`certifications.list.${cert.id}.info`);

                        return (
                            <ScrollReveal
                                key={cert.id}
                                direction="up"
                                delay={0.05 * index}
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-brand-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden flex flex-col items-center text-center h-full"
                                >
                                    {/* Background Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/10 transition-colors" />

                                    {/* Image First - Manage these in lines 7-12 */}
                                    <div className="w-40 h-40 md:w-48 md:h-48 mb-8 relative shrink-0">
                                        <div className="absolute inset-0 bg-brand-primary/15 rounded-full blur-3xl scale-0 group-hover:scale-150 transition-transform duration-1000" />
                                        <img
                                            src={cert.image}
                                            alt={name}
                                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center flex-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="bg-brand-primary/10 text-brand-primary px-4 py-1 rounded-full font-medium tracking-tight text-[10px] tracking-[0.2em] ">
                                                {year}
                                            </span>
                                            <div className="w-8 h-[1px] bg-brand-primary/20" />
                                            <span className="text-black font-medium tracking-tight text-[10px] tracking-[0.2em]  italic">Verified</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-content  tracking-tighter mb-4 italic leading-[1.1]">
                                            {name}
                                        </h3>

                                        <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                                            {info}
                                        </p>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificationList;
