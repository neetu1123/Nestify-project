'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '../../components/ui/AppIcon';

const steps = [
  {
    number: '01',
    icon: 'PlusCircleIcon',
    title: 'List your property for free',
    description: 'Create a detailed listing with photos, pricing, and amenities — completely free. No credit card required.',
    color: 'bg-orange-50',
    iconColor: 'text-primary',
    borderColor: 'border-orange-200',
  },
  {
    number: '02',
    icon: 'UserGroupIcon',
    title: 'Get verified leads',
    description: 'We connect you with genuine, verified buyers and renters who match your property. Every lead is screened.',
    color: 'bg-green-50',
    iconColor: 'text-secondary',
    borderColor: 'border-green-200',
  },
  {
    number: '03',
    icon: 'CurrencyRupeeIcon',
    title: 'Pay only when you get value',
    description: 'Only pay when you receive a qualified lead or close a deal. Zero risk. Complete transparency.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
  },
];

export default function PayAsYouGoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate heading first
            if (headingRef.current) {
              headingRef.current.classList.remove('section-hidden');
              headingRef.current.classList.add('section-reveal');
            }
            // Then stagger step cards
            entry.target.querySelectorAll('.step-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 200 + i * 160);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div ref={headingRef} className="max-w-2xl mb-16 section-hidden">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">★</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            The Pay-As-You-Go
            <span className="italic text-primary"> difference</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional portals charge you upfront — whether or not you get results. Nestify flips the model completely.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`step-card section-hidden relative p-8 rounded-2xl border ${step.borderColor} ${step.color} overflow-hidden`}
            >
              <span className="absolute top-4 right-6 font-serif text-7xl font-bold text-foreground/5 select-none pointer-events-none">
                {step.number}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm`}>
                <Icon name={step.icon as any} size={22} className={step.iconColor} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3 leading-snug">{step.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
                    <Icon name="ArrowRightIcon" size={14} className="text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/post-property"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Start Listing for Free
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">No credit card required · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}