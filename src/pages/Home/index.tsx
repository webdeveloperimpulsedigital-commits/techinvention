import React from 'react';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Horizon from './sections/Horizon';
import Facilities from './sections/Facilities';
import AtAGlanceVideo from './sections/AtAGlanceVideo';
import CaseStudy from './sections/CaseStudy';
import OneHealth from './sections/OneHealth';
import GlobalProjects from './sections/GlobalProjects';
import Testimonials from './sections/Testimonials/TestimonialsAnimated';
import ProductSlider from './sections/ProductSlider';
import VaccinePipeline from './sections/VaccinePipeline';
import Awards from './sections/Awards';
import FAQSection from './sections/FAQ';
import Blogs from './sections/Blogs';
import CTASection from '../../components/CTASection';
import FloatingDNA from '../../components/FloatingDNA';

const Home = () => {
    return (
        <div className="relative">
            {/* <FloatingDNA /> temporrily removed by request */}
            <Hero />
            <About />
            <Stats />
            <AtAGlanceVideo />
            <OneHealth />
            {/* <ProductSlider /> temporrily removed by request */}
            <VaccinePipeline />
            <Horizon />
            <Awards />
            <CaseStudy />
            <GlobalProjects />
            <Testimonials />
            <FAQSection />
            <Blogs />
            <CTASection />
        </div>
    );
};

export default Home;
