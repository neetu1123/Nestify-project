'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '../../components/ui/AppIcon';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scale-hidden');
            entry.target.classList.add('scale-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div ref={sectionRef} className="cta-gradient rounded-3xl p-12 md:p-16 relative overflow-hidden scale-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white/80 mb-8">
              <Icon name="BoltIcon" size={14} className="text-accent" />
              Free to start. Forever.
            </div>

            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6">
              Start listing for
              <br />
              <span className="text-accent italic">free today</span>
            </h2>

            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Join 50,000+ property owners who list on Nestify. No upfront fees, no hidden charges, no brokerage trap. Pay only when you get real value.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/post-property"
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Icon name="PlusCircleIcon" size={18} />
                Post Property FREE
              </Link>
              <Link
                href="/property-listings"
                className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                <Icon name="MagnifyingGlassIcon" size={16} />
                Search Properties
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/50">
              ₹0 listing fee · Verified leads · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}