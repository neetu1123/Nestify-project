'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '../../components/ui/AppIcon';

const rows = [
  { feature: 'Listing Cost', nestify: '₹0 — completely free', others: '₹5,000 – ₹25,000 upfront', nestifyGood: true },
  { feature: 'Pay Structure', nestify: 'Pay only per verified lead', others: 'Flat fee regardless of results', nestifyGood: true },
  { feature: 'Transparency', nestify: 'Full visibility on every lead', others: 'Black-box lead delivery', nestifyGood: true },
  { feature: 'Risk to Seller', nestify: 'Zero — no results, no payment', others: 'High — pay upfront, hope for leads', nestifyGood: true },
  { feature: 'Lead Verification', nestify: 'Every lead manually verified', others: 'Unverified, often spam', nestifyGood: true },
  { feature: 'Hidden Charges', nestify: 'None — ever', others: 'Renewal fees, boost charges', nestifyGood: true },
];

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.remove('section-hidden');
              headingRef.current.classList.add('section-reveal');
            }
            setTimeout(() => {
              if (tableRef.current) {
                tableRef.current.classList.remove('scale-hidden');
                tableRef.current.classList.add('scale-reveal');
              }
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-14 section-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Nestify</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            We&apos;re built different
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Traditional portals profit from your listing fee — whether you sell or not. Nestify only wins when you do.
          </p>
        </div>

        <div ref={tableRef} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm scale-hidden">
          <div className="grid grid-cols-3 bg-foreground text-white">
            <div className="px-6 py-4 text-sm font-semibold text-white/70">Feature</div>
            <div className="px-6 py-4 text-sm font-bold text-center border-l border-white/10">
              <span className="text-primary">Nestify</span>
            </div>
            <div className="px-6 py-4 text-sm font-semibold text-center border-l border-white/10 text-white/70">
              Other Portals
            </div>
          </div>

          {rows?.map((row, idx) => (
            <div
              key={row?.feature}
              className={`grid grid-cols-3 border-t border-border ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/20'}`}
            >
              <div className="px-6 py-4 text-sm font-medium text-foreground/80">{row?.feature}</div>
              <div className="px-6 py-4 border-l border-border">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircleIcon" size={16} className="text-secondary mt-0.5 shrink-0" variant="solid" />
                  <span className="text-sm text-secondary font-medium">{row?.nestify}</span>
                </div>
              </div>
              <div className="px-6 py-4 border-l border-border">
                <div className="flex items-start gap-2">
                  <Icon name="XCircleIcon" size={16} className="text-red-400 mt-0.5 shrink-0" variant="solid" />
                  <span className="text-sm text-muted-foreground">{row?.others}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}