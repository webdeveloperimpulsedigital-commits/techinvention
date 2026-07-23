"use client";
import AboutHeader from './sections/AboutBanner';
import CompanyStory from './sections/CompanyStory';
import BoardOfDirectors from './sections/BoardOfDirectors';
import OfficeEnvironment from './sections/OfficeEnvironment';
import VisionMissionValues from './sections/VisionMissionValues';
import TeamSection from './sections/TeamSection';
import ScientificAdvisoryBoard from './sections/ScientificAdvisoryBoard';
import Responsibility from './sections/Responsibility';
import Spotlight from './sections/Spotlight';
import CTASection from '../../components/CTASection';

const AboutPage = () => {
    
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            {/* 1. Company Landing Hero */}
            <AboutHeader title="About Techinvention" />

            {/* Banner Image */}
            <div className="w-full bg-white pt-4 pb-8 md:pt-6 md:pb-12">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <img 
                        src="/abt-banner.jpeg" 
                        alt="TechInvention About Banner" 
                        className="w-full h-auto block rounded-none"
                    />
                </div>
            </div>

            {/* 2. About Section */}
            <CompanyStory />
            {/* <OfficeEnvironment /> */}
            <BoardOfDirectors />
            {/* <ScientificAdvisoryBoard /> */}
            <VisionMissionValues />

            {/* 3. Leadership / Team Section (Removed as requested) */}
            {/* <TeamSection /> */}



            {/* 5. Responsibility / CSR (Removed as requested) */}
            {/* <Responsibility /> */}

            {/* 6. Spotlight (Hidden for now as requested) */}
            {/* <Spotlight /> */}

            {/* 7. Media Centre (Removed) */}

            <CTASection />
        </div>
    );
};

export default AboutPage;
