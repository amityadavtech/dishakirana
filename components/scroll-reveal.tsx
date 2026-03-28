'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in-scale' | 'slide-in-up' | 'slide-in-left';
  delay?: number;
}

export function ScrollReveal({
  children,
  animation = 'fade-in-scale',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          if (ref.current) {
            ref.current.classList.remove('opacity-0');
            ref.current.classList.add(`animate-${animation}`);
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation]);

  const animationClass = {
    'fade-in-scale': 'animate-fade-in-scale',
    'slide-in-up': 'animate-slide-in-up',
    'slide-in-left': 'animate-slide-in-left',
  }[animation];

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`opacity-0 ${animationClass}`}
    >
      {children}
    </div>
  );
}
