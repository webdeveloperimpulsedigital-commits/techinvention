import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from './context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

import MembershipPage from './pages/Membership';
import CertificationPage from './pages/Certification';

function AppContent() {
    const { pathname } = useLocation();
    const lenisRef = React.useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Handle scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main className="relative min-h-screen bg-brand-background font-inter">
            <Navbar />

            <div id="content-smooth" className="relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/membership" element={<MembershipPage />} />
                    <Route path="/certification" element={<CertificationPage />} />
                </Routes>
                <Footer />
            </div>

            <ScrollToTop lenisRef={lenisRef} />
        </main>
    );
}

function App() {
    return (
        <LanguageProvider>
            <Router basename="/techinvention/">
                <AppContent />
            </Router>
        </LanguageProvider>
    );
}

export default App;
