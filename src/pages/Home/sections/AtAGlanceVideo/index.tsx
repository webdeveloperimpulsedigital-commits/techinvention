import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';

const AtAGlanceVideo = () => {
    const { t } = useLanguage();
    return (
        <section className="relative w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ScrollReveal direction="up" delay={0.2} className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-primary tracking-tighter mb-4">
                        {t('glanceVideo.titlePrefix')} <span className="text-brand-secondary">{t('glanceVideo.titleHighlight')}</span>
                    </h2>
                </ScrollReveal>
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" delay={0.4} className="relative aspect-video max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_25px_50px_rgba(23,85,166,0.15)] group border border-slate-100 bg-black/5">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/HrRivdT_2So?si=eKpf-oPb-jVo8tSi&vq=hd1080"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AtAGlanceVideo;
