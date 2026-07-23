import React from 'react';
import logoImg from '../../assets/images/brand_logo.png';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

const FooterLink = ({ href, isExternal, children }: { href: string, isExternal?: boolean, children: React.ReactNode }) => {
    const content = (
        <span className="relative block overflow-hidden w-fit">
            <span className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-[120%]">
                {children}
            </span>
            <span className="absolute inset-0 block -translate-y-[120%] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 text-brand-primary">
                {children}
            </span>
        </span>
    );

    const className = "group cursor-pointer block w-full";

    if (isExternal) {
        return (
            <a href={href} target={href.startsWith('mailto') ? undefined : "_blank"} rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"} className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {content}
        </Link>
    );
};

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-accent pt-20 pb-28 sm:pb-12 border-t border-brand-gray-light/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-24">
                    <div className="md:w-1/4">
                        <div className="flex items-center gap-2 mb-8">
                            <img
                                src={logoImg}
                                alt={t('common.brandName')}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-black text-[13px] 2xl:text-[14px] font-semibold tracking-wide leading-relaxed max-w-xs">
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 md:w-3/4">
                        <div>
                            <h4 className="text-lg font-medium tracking-tight tracking-widest text-brand-content mb-8">{t('footer.company')}</h4>
                            <ul className="space-y-4 text-[13px] 2xl:text-[14px] text-black font-semibold tracking-wide">
                                <li>
                                    <FooterLink href="/">Home</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/about">About</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/about/csr-initiatives">CSR</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/about/awards-certifications">Awards &amp; Certifications</FooterLink>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium tracking-tight tracking-widest text-brand-content mb-8">{t('footer.solutions')}</h4>
                            <ul className="space-y-4 text-[13px] 2xl:text-[14px] text-black font-semibold tracking-wide">
                                <li>
                                    <FooterLink href="/products">Products</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/rnd">R&amp;D</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/cdmo">Manufacturing</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/consulting">Consulting</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/careers">Careers</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/gmp-training">Training</FooterLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-lg font-medium tracking-tight tracking-widest text-brand-content mb-8">{t('footer.connect')}</h4>
                            <ul className="space-y-4 text-[13px] 2xl:text-[14px] text-black font-semibold tracking-wide">
                                <li>
                                    <FooterLink href="https://www.linkedin.com/company/healthequity4all" isExternal>LinkedIn</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://x.com/TechinventionL" isExternal>Twitter (X)</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://www.youtube.com/@techinventionlifecarepvt.l4675" isExternal>YouTube</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="/contact-us">Contact Us</FooterLink>
                                </li>
                                <li className="break-all">
                                    <FooterLink href="mailto:connect@techinvention.biz" isExternal>connect@techinvention.biz</FooterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-brand-gray-light/20 text-[13px] 2xl:text-[14px] text-brand-gray-light font-semibold tracking-wide">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-6 md:mb-0">
                        <span className="whitespace-nowrap">© {currentYear} {t('common.brandName') as string}</span>
                        <span className="whitespace-nowrap">{t('footer.allRightsReserved')}</span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 md:pr-24">
                        <Link href="/terms-and-conditions" className="hover:text-brand-content transition-colors cursor-pointer whitespace-nowrap">Terms &amp; Conditions</Link>
                        <Link href="/disclaimer" className="hover:text-brand-content transition-colors cursor-pointer whitespace-nowrap">Disclaimer</Link>
                    </div>
                </div>

                {/* Centered Credit at the bottom */}
                <div className="text-center pt-6 text-[13px] 2xl:text-[14px] text-brand-gray-light font-semibold tracking-wide">
                    <span>Powered by <a href="https://www.theimpulsedigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-content transition-colors font-semibold">Impulse Digital Pvt. Ltd.</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
