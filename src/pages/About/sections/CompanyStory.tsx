import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { MagicText } from '../../../components/ui/magic-text';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const CompanyStory = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div>

                    {/* Mandela Quote */}
                    <ScrollReveal direction="up">
                        <div className="mb-16">
                            <MagicText
                                text={`"${t('about.story.mandelaQuote')}"`}
                                className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-brand-content leading-tight tracking-tight italic text-justify"
                            />
                            <div className="w-16 h-1 bg-brand-primary mt-8 rounded-full" />
                        </div>
                    </ScrollReveal>

                    {/* Company Narrative - Clean Editorial Style */}
                    <div className="space-y-8">
                        <ScrollReveal direction="up" delay={0.2}>
                            <MagicText
                                text={t('about.story.commitment')}
                                className="font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-justify"
                            />
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <MagicText
                                text={t('about.story.expertise')}
                                className="font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-justify"
                            />
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyStory;
