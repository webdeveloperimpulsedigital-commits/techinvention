import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AboutHeader from '../About/sections/AboutBanner';
import MemberLogos from './sections/MemberLogos';
import CTASection from '../../components/CTASection';

const MembershipPage = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <AboutHeader title={t('navbar.membership')} />
            <MemberLogos />
            <CTASection />
        </div>
    );
};

export default MembershipPage;
