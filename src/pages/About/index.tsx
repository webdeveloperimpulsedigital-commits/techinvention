import AboutHeader from './sections/AboutBanner';
import AboutProfile from '../Home/sections/About';
import CompanyStory from './sections/CompanyStory';
import TeamSection from './sections/TeamSection';
import VisionMissionValues from './sections/VisionMissionValues';
import CTASection from '../../components/CTASection';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <AboutHeader />
            <AboutProfile />
            <CompanyStory />
            <TeamSection />
            <VisionMissionValues />
            <CTASection />
        </div>
    );
};

export default AboutPage;
