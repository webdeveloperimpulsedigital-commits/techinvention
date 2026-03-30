import React from 'react';
import logoImg from '../../assets/images/brand_logo.png';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-accent pt-24 pb-12 border-t border-brand-gray-light/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <img
                                src={logoImg}
                                alt={t('common.brandName')}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-black text-[11px] font-medium tracking-tight leading-relaxed max-w-xs  tracking-wider">
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium tracking-tight  tracking-widest text-brand-content mb-8">{t('footer.solutions')}</h4>
                        <ul className="space-y-4 text-[11px] text-black font-medium tracking-tight  tracking-wider">
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('solutions.items.0.title')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('solutions.items.1.title')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('solutions.items.2.title')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('solutions.items.3.title')}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium tracking-tight  tracking-widest text-brand-content mb-8">{t('footer.company')}</h4>
                        <ul className="space-y-4 text-[11px] text-black font-medium tracking-tight  tracking-wider">
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('megaMenu.aboutUs')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('map.tag')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('homeStats.header.tag')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('megaMenu.pipeline')}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium tracking-tight  tracking-widest text-brand-content mb-8">{t('footer.connect')}</h4>
                        <ul className="space-y-4 text-[11px] text-black font-medium tracking-tight  tracking-wider">
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('footer.linkedin')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('footer.twitter')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('navbar.contactUs')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">{t('footer.partnerPortal')}</li>
                            <li className="hover:text-brand-primary transition-colors cursor-pointer">
                                <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-brand-gray-light/20 text-[10px]  tracking-widest text-brand-gray-light font-medium tracking-tight">
                    <div className="flex gap-8 mb-4 md:mb-0">
                        <span>© {currentYear} {t('common.brandName') as string}</span>
                        <span>{t('footer.allRightsReserved')}</span>
                    </div>
                    <div className="flex gap-8">
                        <span className="hover:text-brand-content transition-colors cursor-pointer">{t('footer.privacyPolicy')}</span>
                        <span className="hover:text-brand-content transition-colors cursor-pointer">{t('footer.termsOfService')}</span>
                        <span className="hover:text-brand-content transition-colors cursor-pointer">{t('footer.globalCompliance')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

