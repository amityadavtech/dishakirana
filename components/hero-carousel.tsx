'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const backgroundImages = slides.map(slide => slide.image);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen max-h-[600px] md:max-h-[700px] overflow-hidden rounded-b-3xl">
      {/* Scrolling Background Strip */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-ticker">
            {backgroundImages.concat(backgroundImages).map((src, index) => (
              <div
                key={`bg-${index}`}
                className="relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <div className="text-center animate-fade-in-scale max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 text-balance">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-smooth backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-smooth backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-smooth rounded-full ${
              index === currentSlide
                ? 'bg-white w-8 h-2'
                : 'bg-white/50 hover:bg-white/70 w-2 h-2'
            }`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-6 right-6 z-20 px-4 py-2 bg-white/20 hover:bg-white/40 text-white rounded-full text-sm font-medium transition-smooth backdrop-blur-sm"
      >
        {isAutoPlay ? '⏸ Pause' : '▶ Play'}
      </button>
      <style jsx>{`
        .hero-ticker {
          display: flex;
          align-items: center;
          gap: 16px;
          width: max-content;
          animation: hero-scroll 40s linear infinite;
          will-change: transform;
        }
        @keyframes hero-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
