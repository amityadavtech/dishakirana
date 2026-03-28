'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isAutoScrollPausedRef = useRef(false);

  // Calculate items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1.5);
        setIsMobile(true);
      }
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
      if (window.innerWidth >= 640) setIsMobile(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    updateScrollState();
    container.addEventListener('scroll', updateScrollState, { passive: true });
    return () => container.removeEventListener('scroll', updateScrollState);
  }, []);

  // Auto-scroll on mobile for a smooth, premium feel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isMobile) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const pause = () => {
      isAutoScrollPausedRef.current = true;
    };
    const resume = () => {
      isAutoScrollPausedRef.current = false;
    };

    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume, { passive: true });
    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    let rafId = 0;
    const speed = 0.45;
    const step = () => {
      if (!container) return;
      if (!isAutoScrollPausedRef.current) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (maxScrollLeft > 0) {
          if (container.scrollLeft >= maxScrollLeft - 1) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += speed;
          }
        }
      }
      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(rafId);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, [isMobile, products.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScroll =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });

      setCurrentIndex(prev =>
        direction === 'left' ? Math.max(0, prev - 1) : prev + 1
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 stagger-item"
          >
            <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth hover-lift cursor-pointer h-full">
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 bg-muted overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading='eager'
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h4>
                <div className="mt-3 flex items-center justify-between">
                  {/* <span className="text-lg font-bold text-primary">{product.price}</span> */}
                  {/* <button className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    Add
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
