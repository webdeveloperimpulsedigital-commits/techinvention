'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import './product-slider.css';

// Import local images for themed slides
import diagnosticsImg from '../../../../assets/images/diagnostics_hero.png';
import vaccineImg from '../../../../assets/images/vaccine_hero.png';
import equityImg from '../../../../assets/images/one_health_ecosystem.png';
import ipImg from '../../../../assets/images/ip_hero.png';

const imageMap: Record<string, string> = {
    diagnostics: diagnosticsImg,
    vaccine: vaccineImg,
    equity: equityImg,
    ip: ipImg
};

interface SlideData {
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    imageUrl: string;
}

export default function ProductSlider() {
    const { t } = useLanguage();
    const slides = t('elegantCarousel.slides') as SlideData[];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [, setDirection] = useState<'next' | 'prev'>('next');
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // If translations are not loaded yet or invalid
    if (!Array.isArray(slides)) return null;

    const SLIDE_DURATION = 6000;
    const TRANSITION_DURATION = 800;

    const goToSlide = useCallback(
        (index: number, dir?: 'next' | 'prev') => {
            if (isTransitioning || index === currentIndex) return;
            setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
            setIsTransitioning(true);
            setProgress(0);

            setTimeout(() => {
                setCurrentIndex(index);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 50);
            }, TRANSITION_DURATION / 2);
        },
        [isTransitioning, currentIndex]
    );

    const goNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex, 'next');
    }, [currentIndex, goToSlide, slides.length]);

    const goPrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex, 'prev');
    }, [currentIndex, goToSlide, slides.length]);

    useEffect(() => {
        if (isPaused) return;

        progressRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 100 / (SLIDE_DURATION / 50);
            });
        }, 50);

        intervalRef.current = setInterval(() => {
            goNext();
        }, SLIDE_DURATION);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressRef.current) clearInterval(progressRef.current);
        };
    }, [currentIndex, isPaused, goNext]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 60) {
            if (diff > 0) goNext();
            else goPrev();
        }
    };

    const currentSlide = slides[currentIndex];

    return (
        <ScrollReveal direction="up">
            <section
            id="product-slider"
            className="carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Background accent wash */}
                <div
                    className="carousel-bg-wash"
                    style={{
                        background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}08 0%, transparent 70%)`,
                    }}
                />

                <div className="carousel-inner">
                    {/* Left: Text Content */}
                    <div className="carousel-content h-full">
                        <div className="carousel-content-inner relative">

                            {/* Collection number */}
                            <div
                                className={`carousel-collection-num ${isTransitioning ? 'transitioning' : 'visible'}`}
                            >
                                <span className="carousel-num-line" />
                                <span className="carousel-num-text">
                                    {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Title */}
                            <h2
                                className={`carousel-title ${isTransitioning ? 'transitioning' : 'visible'}`}
                            >
                                {currentSlide.title}
                            </h2>

                            {/* Subtitle */}
                            <p
                                className={`carousel-subtitle ${isTransitioning ? 'transitioning' : 'visible'}`}
                                style={{ color: currentSlide.accent }}
                            >
                                {currentSlide.subtitle}
                            </p>

                            {/* Description */}
                            <p
                                className={`carousel-description ${isTransitioning ? 'transitioning' : 'visible'}`}
                            >
                                {currentSlide.description}
                            </p>

                            {/* Navigation Arrows */}
                            <div className="carousel-nav-arrows">
                                <button
                                    onClick={goPrev}
                                    className="carousel-arrow-btn"
                                    aria-label="Previous slide"
                                >
                                    <ArrowLeft size={24} />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="carousel-arrow-btn"
                                    aria-label="Next slide"
                                >
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="carousel-image-container">
                        <div
                            className={`carousel-image-frame ${isTransitioning ? 'transitioning' : 'visible'}`}
                        >
                            <img
                                src={imageMap[currentSlide.imageUrl] || currentSlide.imageUrl}
                                alt={currentSlide.title}
                                className="carousel-image"
                            />
                            <div
                                className="carousel-image-overlay"
                                style={{
                                    background: `linear-gradient(135deg, ${currentSlide.accent}15 0%, transparent 50%)`,
                                }}
                            />
                        </div>

                        {/* Decorative frame corner */}
                        <div className="carousel-frame-corner carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
                        <div className="carousel-frame-corner carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="carousel-progress-bar">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`carousel-progress-item ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div className="carousel-progress-track">
                                <div
                                    className="carousel-progress-fill"
                                    style={{
                                        width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                                        backgroundColor: index === currentIndex ? currentSlide.accent : undefined,
                                    }}
                                />
                            </div>
                            <span className="carousel-progress-label">{slide.title}</span>
                        </button>
                    ))}
                </div>
            </section>
        </ScrollReveal>
    );
}
