import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import TextReveal from '../../../components/Common/TextReveal';
import { ArrowRight } from 'lucide-react';

// Import images
import member1 from '../../../assets/images/team/member_1.png';
import member2 from '../../../assets/images/team/member_2.png';
import member3 from '../../../assets/images/team/member_3.png';
import member4 from '../../../assets/images/team/member_4.png';

const TeamSection = () => {
    const { t } = useLanguage();

    const teamMembersData = t('about.leadership.team.members') || [];
    const memberImages = [member1, member2, member3, member4];

    // Create a doubled list for seamless infinite loop
    const doubledMembers = [...teamMembersData, ...teamMembersData];
    const doubledImages = [...memberImages, ...memberImages];

    return (
        <section className="py-32 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-medium tracking-tight tracking-[0.4em]  text-[11px] mb-6 block">
                            {t('about.leadership.team.title')}
                        </span>
                        <div className="mb-8">
                            <TextReveal
                                text={t('about.leadership.team.tagline')}
                                className="text-4xl md:text-6xl font-medium tracking-tight text-brand-content  tracking-tighter leading-tight justify-center"
                            />
                        </div>
                        <TextReveal
                            text={t('about.leadership.team.cta')}
                            className="text-black text-lg md:text-xl font-medium max-w-3xl leading-relaxed mx-auto"
                        />
                    </ScrollReveal>
                </div>
            </div>

            {/* Infinite Looping Slider */}
            <div className="relative w-full">
                <div className="flex">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{
                            x: [0, "-50%"],
                        }}
                        transition={{
                            duration: 25,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        style={{ width: "fit-content" }}
                        // Pause on hover for easier interaction
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {doubledMembers.map((member: any, idx: number) => (
                            <div key={idx} className="w-[300px] md:w-[400px] shrink-0">
                                <MemberCard member={member} image={doubledImages[idx]} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const MemberCard = ({ member, image }: { member: any, image: string }) => (
    <motion.div
        className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 h-[450px] md:h-[550px] flex flex-col transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
    >
        {/* Card Background Image */}
        <div className="absolute inset-0 overflow-hidden">
            <img
                src={image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
            />

            {/* Blue Reveal Mask */}
            <div className="absolute inset-0 bg-brand-primary/95 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-end p-10 lg:p-12">
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-16 h-1 bg-white/40 rounded-full mb-6"
                    />

                    <div className="mb-6">
                        <h3 className="text-3xl font-medium tracking-tight text-white  tracking-tight mb-2">
                            {member.name}
                        </h3>
                        <p className="text-white text-[10px] font-medium tracking-tight  tracking-[0.4em]">
                            {member.role}
                        </p>
                    </div>

                    <p className="text-white text-lg lg:text-base font-medium leading-relaxed italic line-clamp-6 mb-8">
                        "{member.bio}"
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group/btn hover:bg-white hover:border-white transition-all duration-300">
                            <ArrowRight size={18} className="text-white group-hover/btn:text-brand-primary -rotate-45" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Static Float Label (Entries) */}
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-all duration-500 transform group-hover:translate-y-4">
            <h3 className="text-2xl font-medium tracking-tight text-white  tracking-tight">
                {member.name}
            </h3>
            <div className="flex items-center gap-3 mt-2">
                <div className="w-6 h-1 bg-white rounded-full" />
                <p className="text-white text-[10px] font-medium tracking-tight  tracking-[0.3em]">
                    {member.role}
                </p>
            </div>
        </div>
    </motion.div>
);

export default TeamSection;
