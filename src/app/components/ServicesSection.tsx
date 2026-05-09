'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '../../components/ui/AppIcon';

const services = [
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Home Loans',
    description: 'Compare rates from 20+ banks. Get pre-approved in 48 hours with minimal documentation.',
    cta: 'Check eligibility',
    href: '/home-loans',
    color: 'bg-orange-50',
    iconBg: 'bg-primary/10 text-primary',
  },
  {
    icon: 'ScaleIcon',
    title: 'Legal Assistance',
    description: 'Expert lawyers for sale agreements, title verification, and registration. Fixed transparent fees.',
    cta: 'Get legal help',
    href: '/legal-assistance',
    color: 'bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: 'TruckIcon',
    title: 'Packers & Movers',
    description: 'Verified, insured moving partners. Book in 2 minutes, move on your schedule.',
    cta: 'Get quotes',
    href: '/packers-movers',
    color: 'bg-green-50',
    iconBg: 'bg-green-100 text-secondary',
  },
  {
    icon: 'StarIcon',
    title: 'Vastu Consultation',
    description: 'Certified Vastu experts available online. Get a report for your new home before you move in.',
    cta: 'Book a session',
    href: '/contact',
    color: 'bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-600',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.remove('section-hidden');
              headingRef.current.classList.add('section-reveal');
            }
            entry.target.querySelectorAll('.service-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 200 + i * 120);
            });
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
    <section ref={sectionRef} className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-12 section-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Everything after the search
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            From financing to moving day — we have trusted partners for every step of your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <div key={svc.title} className={`service-card section-hidden ${svc.color} rounded-2xl p-6 border border-border/50 hover:shadow-md transition-all duration-300 group flex flex-col`}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${svc.iconBg}`}>
                <Icon name={svc.icon as any} size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2">{svc.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">{svc.description}</p>
              <Link
                href={svc.href}
                className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200"
              >
                {svc.cta}
                <Icon name="ArrowRightIcon" size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}