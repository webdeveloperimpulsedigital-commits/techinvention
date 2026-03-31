import React from 'react';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { useLanguage } from '../../../../context/LanguageContext';

import horizonImg from '../../../../assets/images/hor.jpg';
import gcmcImg from '../../../../assets/images/banner1.jpg';
import { LocationCard } from '../../../../components/ui/location-card';

const Horizon = () => {
    const { t } = useLanguage();

    return (
        <section id="gcmc-innovation-bento" className="relative py-24 md:py-32 bg-slate-50 border-y border-slate-200">
            {/* Background Texture */}
            <div className="absolute inset-0 noise-texture opacity-[0.02] mix-blend-overlay pointer-events-none" />

            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">


                <ScrollReveal direction="up" delay={0.2} className="w-full">
                    {/* Desktop/Tablet Flex Container */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full justify-center">

                        {/* 1. HORIZON Card */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <LocationCard
                                city={t('horizon.title') as string}
                                address={t('horizon.subtitle') as string}
                                description={t('horizon.desc') as string}
                                imageUrl={horizonImg}
                                className="max-w-2xl h-[450px] lg:h-[550px]"
                            />
                        </div>

                        {/* 2. GCMC Card */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <LocationCard
                                city={t('horizon.gcmcTitle') as string}
                                address={t('horizon.gcmcSubtitle') as string}
                                description={t('horizon.gcmcDesc') as string}
                                imageUrl={gcmcImg}
                                className="max-w-2xl h-[450px] lg:h-[550px]"
                            />
                        </div>

                    </div>

                </ScrollReveal>
            </div>

        </section>
    );
};

export default Horizon;