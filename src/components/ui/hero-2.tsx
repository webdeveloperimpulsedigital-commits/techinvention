import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero2 = () => {
    const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

    return (
        <div className={cn("flex flex-col items-center gap-4 w-full rounded-lg")}>
            <div className="w-full">
                {/* Header removed from the replacement just to clean it up for hero or keep it? The user hasn't complained yet, I'll keep it as is. */}
                <header className="py-4 bg-white sm:py-6">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="shrink-0">
                                <a href="#" title="" className="flex font-bold text-3xl text-gray-900">
                                    Logo
                                </a>
                            </div>

                            <div className="flex md:hidden">
                                <button
                                    type="button"
                                    className="text-gray-900"
                                    onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                                >
                                    {!mobileMenuExpanded ? (
                                        <Menu className="w-7 h-7" />
                                    ) : (
                                        <X className="w-7 h-7" />
                                    )}
                                </button>
                            </div>

                            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                                <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Products</a>
                                <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Features</a>
                                <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Pricing</a>
                                <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Support</a>
                            </nav>
                        </div>

                        {mobileMenuExpanded && (
                            <nav className="md:hidden">
                                <div className="flex flex-col pt-8 pb-4 space-y-6">
                                    <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Products</a>
                                    <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Features</a>
                                    <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Pricing</a>
                                    <a href="#" title="" className="text-base font-medium text-gray-600 transition-all duration-200 hover:text-gray-900">Support</a>
                                </div>
                            </nav>
                        )}
                    </div>
                </header>

                <section className="py-12 bg-white sm:pb-16 lg:pb-20 xl:pb-24 overflow-hidden">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="relative">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="lg:w-2/3"
                            >
                                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">A Hub for Designers, Developers & Marketers</p>
                                <h1 className="mt-6 text-4xl font-semibold text-black sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                                    <span className="text-brand-primary">Unlimited</span> <span className="text-green-500">Design</span> Inspiration
                                </h1>
                                <p className="max-w-lg mt-4 text-xl font-normal text-gray-600 sm:mt-8">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                                </p>
                                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-brand-primary group-hover:shadow-lg group-hover:shadow-brand-primary/50 opacity-20"></div>
                                    <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-brand-primary border border-transparent rounded-full transition-all duration-200 hover:bg-brand-primary/90" role="button">
                                        Start Exploring Inspiration
                                    </a>
                                </div>

                                <div>
                                    <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-200 sm:pt-10 sm:mt-14">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs>
                                                <linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%" style={{ stopColor: '#1755A6' }} />
                                                    <stop offset="100%" style={{ stopColor: '#22c55e' }} />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <span className="ml-2 text-base font-medium text-gray-900">42 new design inspiration was added last week</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <motion.img 
                                    className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" 
                                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" 
                                    alt="" 
                                    animate={{
                                        y: [0, -20, 0, 20, 0],
                                        x: [0, 20, 0, -20, 0],
                                        rotate: [0, 5, 0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
