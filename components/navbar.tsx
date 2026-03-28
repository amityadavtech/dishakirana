'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-border/60 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]'
            : 'bg-gradient-to-b from-background/70 via-background/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 animate-fade-in-scale">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center shadow-md ring-1 ring-primary/20">
                  <span className="text-white font-bold text-lg tracking-tight">DK</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-foreground font-display">Disha Kirana</h1>
                  <p className="text-xs text-muted-foreground">Fresh Daily</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-2 py-1 shadow-sm">
              <button
                onClick={() => scrollToSection('products')}
                className="px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-full transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('delivery')}
                className="px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-full transition-colors"
              >
                Delivery
              </button>
              <button
                onClick={() => scrollToSection('credit')}
                className="px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-full transition-colors"
              >
                Credit
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-full transition-colors"
              >
                Why Us
              </button>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone size={18} />
                <span className="hidden lg:inline">Call Us</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-smooth ring-1 ring-primary/30"
              >
                <MessageCircle size={18} />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-xl transition-colors"
            >
              {isMobileOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileOpen && (
            <div className="md:hidden border-t border-border/60 animate-slide-in-up">
              <div className="px-2 pt-3 pb-4 space-y-1">
                <button
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-3 py-2.5 rounded-xl hover:bg-muted/70 transition-colors font-medium text-foreground/90"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('delivery')}
                  className="block w-full text-left px-3 py-2.5 rounded-xl hover:bg-muted/70 transition-colors font-medium text-foreground/90"
                >
                  Delivery
                </button>
                <button
                  onClick={() => scrollToSection('credit')}
                  className="block w-full text-left px-3 py-2.5 rounded-xl hover:bg-muted/70 transition-colors font-medium text-foreground/90"
                >
                  Credit
                </button>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="block w-full text-left px-3 py-2.5 rounded-xl hover:bg-muted/70 transition-colors font-medium text-foreground/90"
                >
                  Why Us
                </button>
                <div className="border-t border-border pt-2 mt-2">
                  <a
                    href="tel:+919876543210"
                    className="block w-full px-3 py-2.5 bg-muted text-foreground rounded-xl font-semibold text-center hover:bg-muted/80 transition-colors mb-2"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-3 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-center hover:opacity-90 transition-opacity"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
