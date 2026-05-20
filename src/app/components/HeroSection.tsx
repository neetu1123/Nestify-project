'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../components/ui/AppIcon';

const tabs = ['Buy', 'Rent', 'PG'];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Buy');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [bhk, setBhk] = useState('');
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: textRef.current, hidden: 'slide-left-hidden', reveal: 'slide-left-reveal' },
      { el: imageRef.current, hidden: 'slide-right-hidden', reveal: 'slide-right-reveal' },
    ];
    const observers: IntersectionObserver[] = [];
    items.forEach(({ el, hidden, reveal }) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove(hidden);
              entry.target.classList.add(reveal);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient flex flex-col justify-center pt-16 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text + Search */}
          <div ref={textRef} className="flex flex-col items-start text-left slide-left-hidden">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground/70 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              India&apos;s First Pay-As-You-Go Real Estate Platform
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] tracking-tight mb-6">
              List Free.{' '}
              <span className="italic text-primary">Pay Only</span>
              <br />
              When You Get Value.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-foreground/70 mb-4 max-w-xl leading-relaxed">
              India&apos;s first Pay-As-You-Go Real Estate Marketplace
            </p>
            <p className="text-base text-foreground/50 mb-10 flex items-center gap-2">
              <Icon name="ShieldCheckIcon" size={16} className="text-secondary" />
              No upfront fees. No hidden charges. No brokerage trap.
            </p>

            {/* Search Module */}
            <div className="bg-white rounded-2xl shadow-xl border border-border p-2 w-full max-w-xl">
              {/* Tabs */}
              <div className="flex gap-1 mb-3 p-1 bg-muted rounded-xl">
                {tabs?.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-white text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Icon name="MapPinIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="City, locality, or project"
                    value={location}
                    onChange={(e) => setLocation(e?.target?.value)}
                    className="w-full pl-9 pr-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="relative sm:w-36">
                  <Icon name="CurrencyRupeeIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e?.target?.value)}
                    className="w-full pl-9 pr-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none transition-all"
                  >
                    <option value="">Budget</option>
                    <option>Under ₹50L</option>
                    <option>₹50L – ₹1Cr</option>
                    <option>₹1Cr – ₹2Cr</option>
                    <option>₹2Cr+</option>
                  </select>
                </div>
                <Link
                  href="/property-listings"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md shrink-0"
                >
                  <Icon name="MagnifyingGlassIcon" size={16} />
                  Search
                </Link>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/post-property"
                className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Icon name="PlusCircleIcon" size={16} />
                Post Property FREE
              </Link>
              <p className="text-sm text-muted-foreground">
                Already listed?{' '}
                <Link href="/sign-up-login" className="text-primary font-semibold hover:underline">
                  Check your leads
                </Link>
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: '2.4L+', label: 'Active Listings' },
                { value: '18 Cities', label: 'Pan India' },
                { value: '₹0', label: 'Upfront Cost' },
              ]?.map((stat) => (
                <div key={stat?.label} className="text-left">
                  <div className="font-serif text-2xl md:text-3xl text-foreground font-bold">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Premium Property Image */}
          <div ref={imageRef} className="relative hidden lg:flex flex-col items-center justify-center slide-right-hidden">
            {/* Main image card */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/luxury_hero_property.png"
                alt="Premium luxury villa with infinity pool and stunning architecture — featured property on Nestify"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Property badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">✦ Premium</span>
                        <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                      </div>
                      <p className="font-serif text-base font-bold text-foreground">Luxury Villa, Gurgaon</p>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Icon name="MapPinIcon" size={12} />
                        DLF Phase 5, Sector 43
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-serif text-lg font-bold text-primary">₹4.2 Cr</p>
                      <p className="text-xs text-muted-foreground">4 BHK · 3,800 sq ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-border px-4 py-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name="ShieldCheckIcon" size={16} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">RERA Verified</p>
                <p className="text-xs text-muted-foreground">100% Authentic</p>
              </div>
            </div>

            {/* Floating stats badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-border px-4 py-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="HomeIcon" size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">2.4L+ Listings</p>
                <p className="text-xs text-muted-foreground">Across 18 cities</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}