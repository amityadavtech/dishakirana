'use client';

import { Award, Shield, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

export function BusinessInfo() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-emerald-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Business Card */}
        <ScrollReveal animation="fade-in-scale">
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-primary/10 shadow-xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="grid md:grid-cols-3 gap-12 items-center">
                  {/* Left Section - Brand Info */}
                  <div className="md:col-span-1">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Award size={32} className="text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-emerald-600">
                        Run By ~ Disha Traders
                      </h2>
                      <p className="text-muted-foreground font-medium">
                        Your Neighborhood Grocery Partner
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">Trusted Since</p>
                          <p className="text-muted-foreground">Serving the community with integrity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">Fast Delivery</p>
                          <p className="text-muted-foreground">Within minutes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Section - GST & Legal */}
                  <div className="md:col-span-1">
                    <div className="bg-gradient-to-br from-primary/10 to-emerald-600/10 rounded-2xl p-5 sm:p-6 md:p-8 border border-primary/20">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 sm:mb-4">
                        Business Details
                      </h3>

                      <div className="space-y-5 sm:space-y-6">
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 sm:mb-2">
                            GST Number
                          </p>

                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground font-mono tracking-wider break-all">
                            09APUPM4488D1Z8
                          </p>
                        </div>

                        <div className="pt-5 sm:pt-6 border-t border-primary/20">
                          <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 sm:mb-2">
                            Business Type
                          </p>

                          <p className="text-base sm:text-lg font-bold text-foreground">
                            Grocery & Essentials
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Certification */}
                  <div className="md:col-span-1">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
                        Certifications
                      </h3>

                      <div className="space-y-3">
                        {[
                          { title: 'GST Registered', desc: 'Official Business License' },
                          { title: '100% Genuine', desc: 'Verified Products' },
                          { title: 'Quality Assured', desc: 'Premium Selection' },
                        ].map((cert, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-emerald-600" />
                            <div>
                              <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                              <p className="text-xs text-muted-foreground">{cert.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        {/* <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Years', value: '5+' },
            { label: 'Happy Customers', value: '5000+' },
            { label: 'Products', value: '1000+' },
            { label: 'Delivery Rate', value: '99.8%' },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="stagger-item bg-white rounded-2xl p-6 shadow-md border border-primary/10 text-center hover:shadow-lg hover:border-primary/30 transition-all"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2">
                {badge.value}
              </p>
              <p className="text-muted-foreground font-medium">{badge.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
