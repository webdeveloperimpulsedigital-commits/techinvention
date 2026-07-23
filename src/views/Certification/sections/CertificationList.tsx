import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// --- IMAGE REGISTRY ---
import bradstreet from '../../../assets/images/certifications/Bradstreet.png';
import cert2 from '../../../assets/images/certifications/Cert_2-702x1024.jpeg';
import cert3 from '../../../assets/images/certifications/Cert_3-713x1024.jpeg';
import cert4 from '../../../assets/images/certifications/Cert_4.png';
import cert5 from '../../../assets/images/certifications/Cert_5.jpg';
import cert6 from '../../../assets/images/certifications/Cert_6.jpg';
import cert7 from '../../../assets/images/certifications/Cert_7.jpg';
import cert8 from '../../../assets/images/certifications/Cert_8.png';
import cert9 from '../../../assets/images/certifications/Cert_9.png';
import iso from '../../../assets/images/certifications/ISO-655x1024.jpg';

const CERT_CONFIG = [
    {
        id: 'dnb',
        image: bradstreet,
        name: 'Rated as a Lowest Risk SME by Dun & Bradstreet',
        year: '2025',
        info: 'TechInvention Lifecare Ltd. has achieved a score of 81, placing us in the Lowest Risk category as per Dun & Bradstreet’s SME Risk Score reflecting our strong financial health, governance, and operational performance.'
    },
    {
        id: 'iso13485',
        image: iso,
        name: 'ISO 13485:2016 Certificate',
        year: '2025',
        info: 'We are certified to ISO 13485:2016 the international standard for quality management systems specific to the medical device industry. This certification reflects our commitment to delivering safe, high-quality, and compliant medical products, reinforcing our dedication to excellence and adherence to global standards.'
    },
    {
        id: 'esg',
        image: '/esg-certificate.png',
        name: 'ESG Certificate',
        year: '2024',
        info: 'We have received the Environmental, Social, and Governance (ESG) Certification from Dun & Bradstreet, as a recognition of our commitment to sustainability, social responsibility, and ethical governance. This milestone highlights our efforts to promote health equity through affordable healthcare solutions, adopt sustainable practices, and uphold transparency and compliance.'
    },
    {
        id: 'duns',
        image: cert3,
        name: 'DUNS Certificate',
        year: '2024',
        info: 'We have attained the D-U-N-S® Certification from Dun & Bradstreet. This certification enhances our credibility, fosters trust, and streamlines global partnerships, reinforcing our commitment to transparency and excellence in delivering innovative healthcare solutions.'
    },
    {
        id: 'dsir',
        image: '/dsir.png',
        name: 'DSIR Certificate of Recognition',
        year: '2024',
        info: 'Our in-house R&D Unit has been recognized by the Department of Scientific and Industrial Research (DSIR), Government of India. This certification is crucial for fostering innovation, enabling access to government incentives, and strengthening our research capabilities to develop affordable vaccines, biotherapeutics, and diagnostics.'
    },
    {
        id: 'iso9001',
        image: cert5,
        name: 'ISO 9001:2015 Certificate',
        year: '2023',
        info: 'We have attained the ISO 9001:2015 certification, the international standard for quality management systems. The certification is a testament to an organization’s dedication to quality, efficiency, and customer satisfaction, providing a competitive edge in the marketplace.'
    },
    {
        id: 'gptw',
        image: cert6,
        name: 'GPTW Certificates 2022-2024',
        year: '2022 - 2024',
        info: 'We have been recognised as a Great Place to Work® for two consecutive years, 2021-2022 and 2022-2023. The certification is a globally recognized benchmark for identifying and recognizing outstanding employee experiences. Achieving this distinction for two consecutive years testifies to our positive, and healthy environment where employees feel valued and empowered in our inclusive workplace culture.'
    },
    {
        id: 'tax80iac',
        image: cert7,
        name: '80-IAC Certificate',
        year: '2022',
        info: 'We have been granted the 80-IAC Tax Exemption Certificate from the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This certification is given to startups meeting a number of criterias of which one of focus is innovative business models. This exemption enables us to reinvest savings into research and development.'
    },
    {
        id: 'helloTomorrow',
        image: cert8,
        name: 'DeepTech Pioneer',
        year: '2022',
        info: 'Recognised as a Deep Tech Pioneer by Hello Tomorrow, a leading global organization dedicated to advancing deep technology solutions underscores our work in leveraging cutting-edge science and technology to create impactful healthcare solutions.'
    },
    {
        id: 'innovative100',
        image: cert9,
        name: 'Innovation Council Innovative SME',
        year: '2021',
        info: 'We were featured among the Innovative 100 SMEs by the Innovation Council, Geneva during the World Intellectual Property (IP) Day celebrations in April 2021 for our work on novel products and services.'
    }
];

const CertificationCard = ({ cert }: { cert: typeof CERT_CONFIG[0] }) => (
    <div className="relative w-full rounded-none overflow-hidden group transition-all duration-700 hover:-translate-y-2 cursor-pointer aspect-[3/4] md:aspect-[4/5] lg:h-[500px]">
        {/* Image Container */}
        <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <img loading="lazy" 
                src={typeof cert.image === 'string' ? cert.image : (cert.image as any).src} 
                alt={cert.name}
                className="max-w-full max-h-full object-contain drop-shadow-2xl mix-blend-multiply"
            />
        </div>

        {/* Hover Reveal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 md:p-8 translate-y-8 group-hover:translate-y-0 overflow-y-auto scrollbar-thin">
            <div className="flex flex-col justify-end min-h-full">
                <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="h-[2px] w-8 bg-white/80"></div>
                    <span className="text-white font-mono text-sm tracking-widest font-bold">
                        {cert.year}
                    </span>
                </div>
                <h3 className="text-2xl font-light text-white mb-3 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {cert.name}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {cert.info}
                </p>
            </div>
        </div>
    </div>
);

const CertificationList = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Transforms for the 3 columns (Subtle scroll effect without breaking layout)
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

    const displayCerts = CERT_CONFIG;

    // Split array into 3 columns for Masonry layout
    const col1 = displayCerts.filter((_, i) => i % 3 === 0);
    const col2 = displayCerts.filter((_, i) => i % 3 === 1);
    const col3 = displayCerts.filter((_, i) => i % 3 === 2);

    return (
        <section ref={containerRef} className="bg-[#fafafa] pt-8 pb-24 md:pt-20 md:pb-28 relative selection:bg-brand-primary selection:text-white overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-left mb-12 max-w-4xl">
                        <ScrollReveal direction="up">
                            <div className="flex flex-col items-start text-left">
                                <div className="mb-4">
                                    <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                        <SplitTitle title={t('certifications.title').replace('{certifications}', t('certifications.certifications'))} />
                                    </h2>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Parallax Masonry Grid (Desktop) */}
                    <div className="hidden lg:grid grid-cols-3 gap-8 group/grid relative pb-16">
                        <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                            {col1.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
                        </motion.div>
                        
                        <motion.div style={{ y: y2 }} className="flex flex-col gap-8">
                            {col2.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
                        </motion.div>
                        
                        <motion.div style={{ y: y3 }} className="flex flex-col gap-8">
                            {col3.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
                        </motion.div>
                    </div>

                    {/* Mobile/Tablet Slider (lg:hidden) */}
                    <div className="lg:hidden flex flex-col items-center gap-6 relative">
                        <div className="relative w-full max-w-sm mx-auto overflow-hidden px-4">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <CertificationCard cert={displayCerts[activeIdx]} />
                            </motion.div>
                        </div>

                        {/* Navigation Buttons and Dots */}
                        <div className="flex items-center gap-4 mt-2">
                            <button
                                onClick={() => setActiveIdx((prev) => (prev - 1 + displayCerts.length) % displayCerts.length)}
                                className="p-3 bg-white border border-slate-200/80 shadow-md rounded-full text-slate-800 active:scale-95 transition-all cursor-pointer"
                                aria-label="Previous certificate"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            {/* Dots */}
                            <div className="flex gap-1.5 max-w-[150px] overflow-x-auto py-1 scrollbar-none">
                                {displayCerts.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            idx === activeIdx ? 'w-5 bg-[#1955A6]' : 'w-2 bg-slate-300'
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveIdx((prev) => (prev + 1) % displayCerts.length)}
                                className="p-3 bg-white border border-slate-200/80 shadow-md rounded-full text-slate-800 active:scale-95 transition-all cursor-pointer"
                                aria-label="Next certificate"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationList;

