'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../components/ui/AppIcon';

const faqs = [
  {
    q: 'Is listing on Nestify really free?',
    a: 'Yes, 100% free. Creating a property listing on Nestify costs ₹0. No sign-up fee, no listing fee, no credit card required. You can add photos, descriptions, pricing, and all details at absolutely no cost.',
  },
  {
    q: 'When exactly do I pay?',
    a: 'You only pay when you receive a verified lead — meaning a genuine buyer or renter who has expressed specific interest in your property. If you receive no leads, you pay nothing. If you close a deal, you pay a small, pre-disclosed success fee.',
  },
  {
    q: 'How are leads verified?',
    a: 'Every lead goes through a 3-step verification: (1) Phone number OTP verification, (2) Budget and requirement matching against your property, (3) A brief qualification call by our team. Only leads that pass all three steps reach you.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'None. We are built on transparency. There are no listing renewal fees, no "boost" charges, no featured placement upsells that inflate your costs. The only payment you ever make is the per-lead fee — which is always disclosed upfront before you agree to it.',
  },
  {
    q: 'Can buyers use Nestify for free?',
    a: 'Yes. Searching, shortlisting, and contacting property owners on Nestify is completely free for buyers and renters. We do not charge any brokerage from the buyer side, ever.',
  },
  {
    q: 'How is Nestify different from 99acres or MagicBricks?',
    a: 'Traditional portals charge sellers ₹5,000–₹25,000 upfront regardless of results. Nestify charges ₹0 upfront. You only pay per verified lead received. This aligns our incentives with yours — we only make money when we deliver real value.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
            entry.target.querySelectorAll('.faq-item').forEach((item, i) => {
              setTimeout(() => {
                item.classList.remove('section-hidden');
                item.classList.add('section-reveal');
              }, 200 + i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-14 section-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Questions we actually get asked
          </h2>
          <p className="text-lg text-muted-foreground">
            Honest answers. No marketing fluff.
          </p>
        </div>

        <div className="space-y-3">
          {faqs?.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item section-hidden border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'border-primary/30 shadow-sm' : 'border-border'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-base font-semibold leading-snug ${openIndex === idx ? 'text-primary' : 'text-foreground'}`}>
                  {faq?.q}
                </span>
                <span className={`ml-4 shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  openIndex === idx ? 'bg-primary text-white rotate-45' : 'bg-muted text-foreground/60'
                }`}>
                  <Icon name="PlusIcon" size={14} />
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq?.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}