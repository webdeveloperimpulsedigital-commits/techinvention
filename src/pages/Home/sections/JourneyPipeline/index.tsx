import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const UserGroupIcon = ({ color, className }: { color: string, className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color}>
    <circle cx="50" cy="30" r="14" />
    <path d="M 50 48 C 25 48 15 65 15 85 L 85 85 C 85 65 75 48 50 48 Z" />
    <circle cx="20" cy="40" r="10" />
    <path d="M 20 55 C 5 55 0 70 0 85 L 30 85 C 30 70 25 55 20 55 Z" />
    <circle cx="80" cy="40" r="10" />
    <path d="M 80 55 C 65 55 60 70 60 85 L 100 85 C 100 70 95 55 80 55 Z" />
  </svg>
);

const UserIcon = ({ color, className }: { color: string, className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color}>
    <circle cx="50" cy="35" r="18" />
    <path d="M 50 58 C 20 58 5 80 5 95 L 95 95 C 95 80 80 58 50 58 Z" />
  </svg>
);

const JourneyPipeline = () => {
    const { t } = useLanguage();
    const phases = (t('journeyPipeline.phases') || ["PHASE 1", "PHASE 2", "PHASE 3", "PHASE 4"]) as string[];
    const boxes = (t('journeyPipeline.boxes') || [
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." },
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." },
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." },
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." }
    ]) as { title: string, desc: string }[];

    return (
        <section id="journey-pipeline" className="relative py-16 md:py-24 bg-white overflow-hidden">
            {/* max-w-7xl allows it to expand to 1280px on large screens */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative w-full overflow-x-auto pb-8 scrollbar-hide">
                
                {/* Header Title */}
                <div className="mb-16 flex flex-col items-start sticky left-0 min-w-[300px]">
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.4em] text-[#2F62A4] mb-3 uppercase">
                        {t('journeyPipeline.tag') as string}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                        <span className="text-[#2F62A4]">{t('journeyPipeline.title1') as string}</span>
                        <span className="text-[#6D8337]">{t('journeyPipeline.title2') as string}</span>
                    </h2>
                </div>

                {/* Fluid Fixed-Aspect Container (Desktop) */}
                {/* min-w-[1024px] guarantees readability, visible only on lg+ screens */}
                <div className="hidden lg:block w-full min-w-[1024px] aspect-[1024/600] relative mx-auto font-sans bg-transparent">
                    
                    {/* SVG Connector Lines Overlay */}
                    {/* viewBox perfectly maps the exact geometric layout lines directly to the container overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" width="100%" height="100%" viewBox="0 0 1024 600" preserveAspectRatio="none">
                        {/* Top-Left Yellow Line (to Phase 1) */}
                        <path d="M 100 210 L 100 230 L 342 230 L 342 260" fill="none" stroke="#FFD100" strokeWidth="2.5" strokeLinejoin="round" />
                        <circle cx="100" cy="210" r="5.5" fill="#FFD100" stroke="#fff" strokeWidth="2" />

                        {/* Top-Right Yellow Line (to Phase 2) */}
                        <path d="M 850 210 L 850 230 L 466 230 L 466 260" fill="none" stroke="#FFD100" strokeWidth="2.5" strokeLinejoin="round" />
                        <circle cx="850" cy="210" r="5.5" fill="#FFD100" stroke="#fff" strokeWidth="2" />

                        {/* Bottom-Left Blue/Dark Line (to Phase 3) */}
                        <path d="M 400 390 L 400 370 L 590 370 L 590 340" fill="none" stroke="#17438E" strokeWidth="2.5" strokeLinejoin="round" />
                        <circle cx="400" cy="390" r="5.5" fill="#fff" stroke="#17438E" strokeWidth="3" />

                        {/* Bottom-Right Pink Line (to Phase 4) */}
                        <path d="M 850 390 L 850 370 L 714 370 L 714 340" fill="none" stroke="#D136B0" strokeWidth="2.5" strokeLinejoin="round" />
                        <circle cx="850" cy="390" r="5.5" fill="#fff" stroke="#D136B0" strokeWidth="3" />
                    </svg>

                    {/* Syringe Component */}
                    <div className="absolute flex items-center z-20" 
                         style={{ top: '43.333%', left: '14.648%', width: '68.359%', height: '13.333%' }}>
                        
                        {/* Plunger Handle */}
                        <div className="w-[10%] h-[50%] flex items-center justify-end">
                            <div className="h-[150%] w-[12px] bg-slate-200 border border-slate-300 rounded-sm"></div>
                            <div className="h-[25%] w-full bg-slate-200 border-y border-slate-300"></div>
                        </div>
                        
                        {/* Syringe Base */}
                        <div className="w-[2.5%] h-[125%] bg-slate-200 border border-slate-300 rounded-sm shadow-sm z-10"></div>
                        
                        {/* Syringe Barrel (4 Phases) */}
                        <div className="relative flex-grow h-full border-[4px] border-slate-300 bg-white shadow-sm flex rounded-r-[40px] overflow-hidden z-10">
                            {/* Piston Rubber */}
                            <div className="w-[4%] h-full bg-[#333] flex-shrink-0"></div>
                            {/* Phases Container */}
                            <div className="flex flex-grow text-white text-[clamp(8px,1vw,12px)] font-bold tracking-widest text-center uppercase">
                                <div className="flex-1 bg-[#FFA400] flex items-center justify-center border-r border-white/20">{phases[0]}</div>
                                <div className="flex-1 bg-[#FFD100] flex items-center justify-center text-[#333] border-r border-[#333]/10">{phases[1]}</div>
                                <div className="flex-1 bg-[#17438E] flex items-center justify-center border-r border-white/20">{phases[2]}</div>
                                <div className="flex-1 bg-[#8B45B5] flex items-center justify-center">{phases[3]}</div>
                            </div>
                        </div>
                        
                        {/* Needle Attach */}
                        <div className="w-[3%] h-[35%] bg-slate-200 border border-slate-300 rounded-r z-10"></div>
                        {/* Needle Tip */}
                        <div className="w-[12%] h-[2px] bg-slate-400 rounded-r-full shadow-sm"></div>
                    </div>

                    {/* HTML Overlay text scales correctly via width percentages */}
                    
                    {/* Top Left Text Block */}
                    <div className="absolute" style={{ top: '8.333%', left: '4.882%', width: '34.179%' }}>
                        <h3 className="font-bold text-[clamp(18px,2vw,24px)] mb-2 text-[#000]">{boxes[0].title}</h3>
                        <div className="w-full h-[2px] bg-[#FFD100] mb-3"></div>
                        <div className="flex justify-between items-start gap-2">
                            <p className="text-[clamp(11px,1.2vw,14px)] leading-relaxed text-gray-700 font-medium max-w-[70%]">
                                {boxes[0].desc}
                            </p>
                            <UserGroupIcon color="#FFA400" className="w-[80px]" />
                        </div>
                    </div>

                    {/* Top Right Text Block */}
                    <div className="absolute" style={{ top: '8.333%', left: '53.71%', width: '34.179%' }}>
                        <h3 className="font-bold text-[clamp(18px,2vw,24px)] mb-2 text-[#000]">{boxes[1].title}</h3>
                        <div className="w-full h-[2px] bg-[#FFD100] mb-3"></div>
                        <div className="flex justify-between items-start gap-2">
                            <p className="text-[clamp(11px,1.2vw,14px)] leading-relaxed text-gray-700 font-medium max-w-[70%]">
                                {boxes[1].desc}
                            </p>
                            <UserGroupIcon color="#FFD100" className="w-[80px]" />
                        </div>
                    </div>

                    {/* Bottom Left Text Block */}
                    <div className="absolute" style={{ top: '68.333%', left: '4.882%', width: '34.179%' }}>
                        <h3 className="font-bold text-[clamp(18px,2vw,24px)] mb-2 text-[#000]">{boxes[2].title}</h3>
                        <div className="w-full h-[1px] bg-black/30 mb-4"></div>
                        <div className="flex items-start gap-4">
                            <UserGroupIcon color="#15428F" className="w-[70px] shrink-0 border border-[#15428F]/20 p-2 rounded-xl bg-white" />
                            <p className="text-[clamp(11px,1.2vw,14px)] leading-relaxed text-gray-700 font-medium max-w-[75%]">
                                {boxes[2].desc}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Right Text Block */}
                    <div className="absolute" style={{ top: '68.333%', left: '53.71%', width: '34.179%' }}>
                        <h3 className="font-bold text-[clamp(18px,2vw,24px)] mb-2 text-[#000]">{boxes[3].title}</h3>
                        <div className="w-full h-[1px] bg-[#8B45B5] mb-4"></div>
                        <div className="flex items-start gap-4">
                            <div className="relative shrink-0 w-[60px] h-[60px] border-[2px] border-[#9747FF] rounded-full flex items-center justify-center bg-white">
                                <UserIcon color="#9747FF" className="w-[40px]" />
                                <span className="absolute -right-2 top-[35%] text-[#9747FF] bg-white leading-none">➔</span>
                            </div>
                            <p className="text-[clamp(11px,1.2vw,14px)] leading-relaxed text-gray-700 font-medium max-w-[75%]">
                                {boxes[3].desc}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Mobile / Tablet Vertical Layout */}
                <div className="lg:hidden w-full max-w-2xl mx-auto flex flex-col gap-10 mt-8">
                    
                    {/* Mobile Syringe Graphic */}
                    <div className="w-full aspect-[800/150] relative mb-6">
                        <div className="absolute flex items-center w-full h-full left-0 top-0">
                            {/* Plunger Handle */}
                            <div className="w-[10%] h-[50%] flex items-center justify-end">
                                <div className="h-[150%] w-[12px] bg-slate-200 border border-slate-300 rounded-sm"></div>
                                <div className="h-[25%] w-full bg-slate-200 border-y border-slate-300"></div>
                            </div>
                            
                            {/* Syringe Base */}
                            <div className="w-[2.5%] h-[125%] bg-slate-200 border border-slate-300 rounded-sm shadow-sm z-10"></div>
                            
                            {/* Syringe Barrel (4 Phases) */}
                            <div className="relative flex-grow h-full border-[4px] border-slate-300 bg-white shadow-sm flex rounded-r-[30px] sm:rounded-r-[40px] overflow-hidden z-10">
                                {/* Piston Rubber */}
                                <div className="w-[4%] h-full bg-[#333] flex-shrink-0"></div>
                                {/* Phases Container */}
                                <div className="flex flex-grow text-white text-[clamp(8px,2.5vw,14px)] font-bold tracking-widest text-center uppercase">
                                    <div className="flex-1 bg-[#FFA400] flex items-center justify-center border-r border-white/20 px-1">{phases[0]}</div>
                                    <div className="flex-1 bg-[#FFD100] flex items-center justify-center text-[#333] border-r border-[#333]/10 px-1">{phases[1]}</div>
                                    <div className="flex-1 bg-[#17438E] flex items-center justify-center border-r border-white/20 px-1">{phases[2]}</div>
                                    <div className="flex-1 bg-[#8B45B5] flex items-center justify-center px-1">{phases[3]}</div>
                                </div>
                            </div>
                            
                            {/* Needle Attach */}
                            <div className="w-[3%] h-[35%] bg-slate-200 border border-slate-300 rounded-r z-10"></div>
                            {/* Needle Tip */}
                            <div className="w-[12%] h-[2px] bg-slate-400 rounded-r-full shadow-sm"></div>
                        </div>
                    </div>

                    {/* Phase 1 */}
                    <div className="relative pl-8 border-l-2 border-[#FFA400]">
                        <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#FFA400] border-4 border-white"></div>
                        <div className="inline-block px-3 py-1 bg-[#FFA400] rounded text-white text-xs font-bold tracking-widest mb-3 uppercase">
                            {phases[0]}
                        </div>
                        <h3 className="font-bold text-[clamp(18px,5vw,24px)] mb-3 text-[#000]">{boxes[0].title}</h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                {boxes[0].desc}
                            </p>
                            <UserGroupIcon color="#FFA400" className="w-[60px] shrink-0" />
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative pl-8 border-l-2 border-[#FFD100]">
                        <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#FFD100] border-4 border-white"></div>
                        <div className="inline-block px-3 py-1 bg-[#FFD100] rounded text-[#333] text-xs font-bold tracking-widest mb-3 uppercase">
                            {phases[1]}
                        </div>
                        <h3 className="font-bold text-[clamp(18px,5vw,24px)] mb-3 text-[#000]">{boxes[1].title}</h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                {boxes[1].desc}
                            </p>
                            <UserGroupIcon color="#FFD100" className="w-[60px] shrink-0" />
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative pl-8 border-l-2 border-[#17438E]">
                        <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#17438E] border-4 border-white"></div>
                        <div className="inline-block px-3 py-1 bg-[#17438E] rounded text-white text-xs font-bold tracking-widest mb-3 uppercase">
                            {phases[2]}
                        </div>
                        <h3 className="font-bold text-[clamp(18px,5vw,24px)] mb-3 text-[#000]">{boxes[2].title}</h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                {boxes[2].desc}
                            </p>
                            <UserGroupIcon color="#17438E" className="w-[60px] shrink-0 border border-[#15428F]/20 p-2 rounded-xl bg-white" />
                        </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="relative pl-8 border-l-2 border-[#8B45B5]">
                        <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#8B45B5] border-4 border-white"></div>
                        <div className="inline-block px-3 py-1 bg-[#8B45B5] rounded text-white text-xs font-bold tracking-widest mb-3 uppercase">
                            {phases[3]}
                        </div>
                        <h3 className="font-bold text-[clamp(18px,5vw,24px)] mb-3 text-[#000]">{boxes[3].title}</h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                {boxes[3].desc}
                            </p>
                            <div className="relative shrink-0 w-[60px] h-[60px] border-[2px] border-[#9747FF] rounded-full flex items-center justify-center bg-white">
                                <UserIcon color="#9747FF" className="w-[40px]" />
                                <span className="absolute -right-2 top-[35%] text-[#9747FF] bg-white leading-none">➔</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default JourneyPipeline;
