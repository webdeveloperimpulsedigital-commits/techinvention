import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const grantsList = [
    {
        name: "BIRAC",
        logo: "/Grant-section/BIRAC.png"
    },
    {
        name: "TBVI",
        logo: "/Grant-section/TBVI-logo-2016-Klein.jpg"
    },
    {
        name: "BactiVac",
        logo: "/Grant-section/bactivac.png"
    }
];

export default function Grants() {
    return (
        <section className="py-20 bg-slate-50 relative font-sans border-b border-slate-200/60">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-primary/3 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/3 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide">
                            <SplitTitle title="Grants & Funding Support" />
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Grid of Grants Logos */}
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {grantsList.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full h-[140px] md:h-[180px]"
                                >
                                    <img
                                        src={item.logo}
                                        alt={`${item.name} Logo`}
                                        className="max-h-[90%] max-w-[90%] w-auto h-auto object-contain transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
