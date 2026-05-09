'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '../../components/ui/AppIcon';

const trustPoints = [
  {
    icon: 'ShieldCheckIcon',
    title: 'No Brokerage Trap',
    description: 'Every listing on Nestify is direct — no middlemen inflating costs or taking hidden commissions.',
    color: 'bg-green-50 text-secondary',
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Zero Upfront Fees',
    description: 'List your property today at absolutely no cost. Your wallet stays intact until you get real value.',
    color: 'bg-orange-50 text-primary',
  },
  {
    icon: 'BadgeCheckIcon',
    title: 'Verified Listings Only',
    description: 'Our team manually verifies every listing before it goes live — so buyers see only genuine properties.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Transparent Pricing',
    description: 'Know exactly what you pay, when you pay, and why. No renewal traps, no surprise boost charges.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.remove('section-hidden');
              headingRef.current.classList.add('section-reveal');
            }
            entry.target.querySelectorAll('.trust-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 150 + i * 120);
            });
            setTimeout(() => {
              if (statsRef.current) {
                statsRef.current.classList.remove('section-hidden');
                statsRef.current.classList.add('section-reveal');
              }
            }, 700);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-14 section-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Trust & Transparency</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Built on honesty, not hype
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We believe real estate transactions should be fair, clear, and free from the traditional opacity that costs Indians crores every year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <div key={point.title} className="trust-card section-hidden p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${point.color} bg-opacity-10`}>
                <Icon name={point.icon as any} size={22} className={point.color.split(' ')[1]} />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="mt-16 bg-foreground rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 section-hidden">
          {[
            { value: '2,40,000+', label: 'Active Listings' },
            { value: '18', label: 'Cities Covered' },
            { value: '4.8★', label: 'Average Rating' },
            { value: '₹0', label: 'Upfront Cost' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-white font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}