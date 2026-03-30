import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/brand_logo.png';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../../context/LanguageContext';
import { Globe, ChevronDown, Menu, X, Search, Bell, ShoppingCart, User, Grid } from 'lucide-react';
import MegaMenuContent from './MegaMenuContent';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);

    const toggleMobileMenu = (item: string) => {
        setOpenMobileMenus(prev => 
            prev.includes(item) 
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'Hindi' },
        { code: 'ar', label: 'Arabic' },
        { code: 'es', label: 'Spanish' },
        { code: 'fr', label: 'French' },
    ];

    const megaMenusData: Record<string, any> = {
        products: {
            label: t('navbar.products'),
            sections: [
                {
                    title: t('megaMenu.vaccines'),
                    links: [
                        { name: t('megaMenu.humanVaccines'), href: '/', description: t('hero.slides.0.desc') }, // Reusing slide desc if possible or just leaving plain
                        { name: t('megaMenu.animalVaccines'), href: '/' },
                        { name: t('megaMenu.pipeline'), href: '/' },
                    ]
                },
                {
                    title: t('megaMenu.diagnostics'),
                    links: [
                        { name: t('megaMenu.molecular'), href: '/' },
                        { name: t('megaMenu.rapidTest'), href: '/' },
                    ]
                },
            ],
            featured: {
                title: t('megaMenu.ipPortfolio'),
                description: t('hero.slides.3.desc'),
                image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop',
                link: '/'
            }
        },
        solutions: {
            label: t('navbar.solutions'),
            sections: [
                {
                    title: t('megaMenu.services'),
                    links: [
                        { name: t('megaMenu.oneHealth'), href: '/' },
                        { name: t('megaMenu.rnd'), href: '/' },
                        { name: t('megaMenu.manufacturing'), href: '/' },
                    ]
                },
            ],
            featured: {
                title: t('common.testimonials'),
                description: t('testimonials.subtitle'),
                image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=800&auto=format&fit=crop',
                link: '/'
            }
        },
        company: {
            label: t('navbar.company'),
            sections: [
                {
                    title: t('megaMenu.aboutUs'),
                    links: [
                        { name: t('megaMenu.vision'), href: '/' },
                        { name: t('megaMenu.team'), href: '/' },
                        { name: t('megaMenu.careers'), href: '/' },
                    ]
                },
                {
                    title: t('megaMenu.credentials'),
                    links: [
                        { name: t('megaMenu.certifications'), href: '/' },
                        { name: t('megaMenu.memberships'), href: '/' },
                    ]
                }
            ],
            featured: {
                title: t('about.leadership.title'),
                description: t('about.leadership.tagline'),
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop',
                link: '/'
            }
        },
        learn: {
            label: t('navbar.learn'),
            sections: [
                {
                    title: t('megaMenu.knowledgeCenter'),
                    links: [
                        { name: t('megaMenu.caseStudies'), href: '/' },
                        { name: t('megaMenu.whitePapers'), href: '/' },
                        { name: t('megaMenu.newsMedia'), href: '/' },
                    ]
                }
            ]
        },
        support: {
            label: t('navbar.support'),
            sections: [
                {
                    title: t('megaMenu.helpContact'),
                    links: [
                        { name: t('navbar.contactUs'), href: '/' },
                        { name: t('megaMenu.faqs'), href: '/' },
                        { name: t('megaMenu.technicalSupport'), href: '/' },
                    ]
                }
            ]
        }
    };

    const mainNavItems = ['products', 'solutions', 'learn', 'company', 'support'];

    return (
        <header className={`fixed top-0 left-0 right-0 z-[5000] border-b transition-all duration-300 ${isScrolled ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/95 border-gray-100'}`}>
            <div className="max-w-[1440px] mx-auto w-full h-20 md:h-24 flex items-center px-4 md:px-8 gap-8">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src={logoImg} alt="Brand Logo" className="h-8 md:h-12 w-auto" />
                </Link>

                <div className="ml-auto flex items-center gap-8">
                    {/* Main Navigation */}
                    <nav className="hidden lg:flex items-center">
                        <ul className="flex items-center gap-8">
                            {mainNavItems.map((item) => (
                                <li 
                                    key={item}
                                    className="relative"
                                    onMouseEnter={() => setActiveMegaMenu(item)}
                                    onMouseLeave={() => setActiveMegaMenu(null)}
                                >
                                    <button className={`px-2 py-2 text-[14px] font-medium tracking-[0.2em] transition-all relative  ${activeMegaMenu === item ? 'text-brand-primary' : 'text-black hover:text-brand-primary'}`}>
                                        {megaMenusData[item]?.label || item}
                                        {activeMegaMenu === item && (
                                            <motion.div 
                                                layoutId="activeNav"
                                                className="absolute bottom-[-10px] left-2 right-2 h-[3px] bg-brand-primary rounded-t-full"
                                            />
                                        )}
                                    </button>

                                    {/* Mega Menu Flyout */}
                                    <AnimatePresence>
                                        {activeMegaMenu === item && megaMenusData[item] && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="fixed top-[80px] md:top-[96px] left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-[4900]"
                                            >
                                                <div className="border-b border-gray-100 bg-gray-50/30">
                                                    <MegaMenuContent 
                                                        sections={megaMenusData[item].sections} 
                                                        featured={megaMenusData[item].featured}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Side Actions: Search & Language */}
                    <div className="flex items-center gap-6">
                        {/* Search Bar */}
                        <div className="hidden md:flex w-[200px] lg:w-[240px] relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-black group-focus-within:text-brand-primary transition-colors">
                                <Search size={16} />
                            </div>
                            <input 
                                type="text" 
                                placeholder={t('navbar.searchPlaceholder') || "Search TechInvention..."}
                                className="w-full bg-gray-50 border border-transparent group-hover:border-gray-100 rounded-full py-2 pl-10 pr-4 text-[14px] font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all shadow-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Language Switcher */}
                            <div className="hidden relative">
                                <button 
                                    onClick={() => setIsLangOpen(!isLangOpen)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-black"
                                >
                                    <Globe size={18} className="text-brand-primary" />
                                    <span className="text-[14px] font-medium  tracking-widest hidden sm:inline">{language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : language === 'es' ? 'Spanish' : 'French'}</span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isLangOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-3 w-40 bg-white shadow-2xl border border-gray-100 py-2 z-[6000] rounded-xl overflow-hidden"
                                        >
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setLanguage(lang.code);
                                                        setIsLangOpen(false);
                                                    }}
                                                    className={`w-full text-left px-5 py-3 text-[14px] font-medium tracking-tight  tracking-widest transition-colors ${language === lang.code ? 'bg-brand-primary/10 text-brand-primary' : 'text-black hover:bg-gray-50 hover:text-brand-primary'}`}
                                                >
                                                    {lang.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Toggle */}
                            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-50 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 top-20 md:top-24 z-[4800] lg:hidden bg-white overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 divide-y divide-gray-100 pb-32">
                            {mainNavItems.map(item => (
                                <div key={item} className="py-4">
                                    <button 
                                        onClick={() => toggleMobileMenu(item)}
                                        className="w-full flex items-center justify-between outline-none"
                                    >
                                        <span className="text-lg font-medium tracking-widest text-black">{megaMenusData[item]?.label}</span>
                                        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${openMobileMenus.includes(item) ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openMobileMenus.includes(item) && megaMenusData[item] && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 flex flex-col gap-3 pl-2 border-l border-gray-100">
                                            {megaMenusData[item].sections.map((sec: any, sIdx: number) => (
                                                <div key={sIdx}>
                                                    <span className="text-[13px] font-medium tracking-tight text-brand-primary  tracking-widest">{sec.title}</span>
                                                    {sec.links.map((link: any, lIdx: number) => (
                                                        <Link 
                                                            key={lIdx} 
                                                            to={link.href} 
                                                            className="block py-2 text-[14px] font-medium tracking-tight text-black"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
