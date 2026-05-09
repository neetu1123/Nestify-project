'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

const plans = [
  {
    name: 'Free Listing',
    price: '₹0',
    period: 'forever',
    highlight: false,
    badge: null,
    description: 'List your property and wait for organic enquiries.',
    features: [
      'Unlimited property photos',
      'Basic listing visibility',
      'Standard search placement',
      'Self-managed enquiries',
      'Email support',
    ],
    notIncluded: [
      'Verified lead delivery',
      'Priority placement',
      'Lead quality guarantee',
      'Dedicated relationship manager',
    ],
    cta: 'List for Free',
    href: '/post-property',
  },
  {
    name: 'Pay Per Lead',
    price: '₹499',
    period: 'per verified lead',
    highlight: true,
    badge: 'Most Popular',
    description: 'Only pay when a verified, interested buyer contacts you.',
    features: [
      'Everything in Free Listing',
      'Verified buyer leads only',
      'Lead quality guarantee',
      'Priority search placement',
      'WhatsApp lead alerts',
      'Lead contact details',
      'Phone support',
    ],
    notIncluded: [
      'Dedicated relationship manager',
    ],
    cta: 'Start with Pay Per Lead',
    href: '/post-property',
  },
  {
    name: 'Premium Seller',
    price: '₹2,999',
    period: 'per month',
    highlight: false,
    badge: 'Best Value',
    description: 'Maximum visibility with unlimited leads and a dedicated manager.',
    features: [
      'Everything in Pay Per Lead',
      'Unlimited verified leads',
      'Top-of-search placement',
      'Featured property badge',
      'Professional photography tips',
      'Dedicated relationship manager',
      'Priority phone & WhatsApp support',
      'Monthly performance report',
    ],
    notIncluded: [],
    cta: 'Go Premium',
    href: '/post-property',
  },
];

const faqs = [
  {
    q: 'Is listing really free?',
    a: 'Yes, 100%. You can list your property with photos, description, and all details at absolutely no cost. You only pay if you choose to receive verified leads.',
  },
  {
    q: 'What counts as a "verified lead"?',
    a: 'A verified lead is a buyer or tenant who has confirmed their phone number via OTP, stated their genuine interest in your property, and passed our fraud-detection filters. We do not charge for spam or bot enquiries.',
  },
  {
    q: 'When exactly do I get charged?',
    a: 'On the Pay Per Lead plan, you are charged only after a verified lead is delivered to you — meaning you receive the buyer\'s contact details. No lead, no charge.',
  },
  {
    q: 'Can I switch plans anytime?',
    a: 'Yes. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. No lock-in periods.',
  },
  {
    q: 'What if a lead turns out to be fake?',
    a: 'We have a Lead Quality Guarantee. If a lead is found to be fraudulent or uncontactable within 48 hours, we refund the lead credit — no questions asked.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'None. The price you see is the price you pay. No GST surprises (GST is shown separately at checkout as required by law), no platform fees, no renewal traps.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-20 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              Transparent Pricing
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-5 leading-tight">
              Pay only for<br /><span className="text-accent">real results.</span>
            </h1>
            <p className="text-white/70 text-lg">No upfront fees. No hidden charges. India&apos;s only Pay-As-You-Go real estate marketplace.</p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {plans?.map((plan) => (
                <div
                  key={plan?.name}
                  className={`rounded-3xl border p-8 relative ${
                    plan?.highlight
                      ? 'bg-foreground border-foreground shadow-2xl scale-105'
                      : 'bg-white border-border'
                  }`}
                >
                  {plan?.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${plan?.highlight ? 'bg-primary text-white' : 'bg-accent text-foreground'}`}>
                      {plan?.badge}
                    </span>
                  )}
                  <h3 className={`font-semibold text-lg mb-1 ${plan?.highlight ? 'text-white' : 'text-foreground'}`}>{plan?.name}</h3>
                  <p className={`text-sm mb-5 ${plan?.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>{plan?.description}</p>
                  <div className="mb-6">
                    <span className={`font-serif text-5xl font-bold ${plan?.highlight ? 'text-white' : 'text-foreground'}`}>{plan?.price}</span>
                    <span className={`text-sm ml-2 ${plan?.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>/ {plan?.period}</span>
                  </div>
                  <Link
                    href={plan?.href}
                    className={`block text-center py-3.5 rounded-xl font-semibold mb-8 transition-colors ${
                      plan?.highlight
                        ? 'bg-primary text-white hover:bg-primary/90' :'bg-muted text-foreground hover:bg-border'
                    }`}
                  >
                    {plan?.cta}
                  </Link>
                  <div className="space-y-3">
                    {plan?.features?.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <AppIcon name="CheckCircleIcon" size={16} className={`shrink-0 mt-0.5 ${plan?.highlight ? 'text-green-400' : 'text-secondary'}`} />
                        <span className={`text-sm ${plan?.highlight ? 'text-white/80' : 'text-foreground/80'}`}>{f}</span>
                      </div>
                    ))}
                    {plan?.notIncluded?.map((f) => (
                      <div key={f} className="flex items-start gap-3 opacity-40">
                        <AppIcon name="XMarkIcon" size={16} className={`shrink-0 mt-0.5 ${plan?.highlight ? 'text-white' : 'text-muted-foreground'}`} />
                        <span className={`text-sm ${plan?.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How billing works */}
        <section className="py-20 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">How billing actually works</h2>
            <p className="text-muted-foreground mb-12">No surprises. Here&apos;s exactly what happens when you get a lead.</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Buyer shows interest', desc: 'A buyer clicks "Contact Seller" on your listing.' },
                { step: '2', title: 'OTP verification', desc: 'Buyer verifies their phone number via OTP.' },
                { step: '3', title: 'Lead delivered to you', desc: 'You receive buyer\'s contact details on WhatsApp & email.' },
                { step: '4', title: 'You\'re charged ₹499', desc: 'Only now does the ₹499 lead fee apply. Not before.' },
              ]?.map((item) => (
                <div key={item?.step} className="bg-white rounded-2xl p-6 border border-border text-left">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mb-4">{item?.step}</div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item?.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Pricing FAQs</h2>
              <p className="text-muted-foreground">Everything you need to know about how we charge.</p>
            </div>
            <div className="space-y-3">
              {faqs?.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq?.q}</span>
                    <AppIcon
                      name={openFaq === i ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                      size={18}
                      className="text-muted-foreground shrink-0"
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq?.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 cta-gradient">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Ready to list for free?</h2>
            <p className="text-white/70 mb-8">Join 2.4 lakh+ sellers who trust Nestify.</p>
            <Link href="/post-property" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Post Property FREE
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
