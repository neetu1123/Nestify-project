'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import AppIcon from '../../components/ui/AppIcon';

const stats = [
{ value: '2.4L+', label: 'Active Listings' },
{ value: '18 Cities', label: 'Pan India Presence' },
{ value: '₹0', label: 'Upfront Listing Cost' },
{ value: '94%', label: 'Seller Satisfaction' }];


const values = [
{
  icon: 'ShieldCheckIcon',
  title: 'Radical Transparency',
  desc: 'No hidden fees, no surprise charges. Every rupee you spend is justified by real value received.'
},
{
  icon: 'UserGroupIcon',
  title: 'Seller-First Philosophy',
  desc: 'We built Nestify because sellers were tired of paying lakhs upfront with zero guarantee of results.'
},
{
  icon: 'LightBulbIcon',
  title: 'Technology-Driven',
  desc: 'AI-powered lead verification, smart matching, and fraud detection keep our marketplace clean.'
},
{
  icon: 'HeartIcon',
  title: 'Community Trust',
  desc: 'Every listing is reviewed. Every lead is verified. We protect both buyers and sellers equally.'
}];


const team = [
{
  name: 'Arjun Mehta',
  role: 'Co-founder & CEO',
  bio: 'Ex-Magicbricks, 12 years in PropTech. Frustrated by opaque pricing, he built the alternative.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_179ebd6f2-1763294255544.png",
  alt: 'Arjun Mehta, Co-founder and CEO of Nestify, smiling professional headshot'
},
{
  name: 'Priya Sharma',
  role: 'Co-founder & CPO',
  bio: 'IIT Delhi, ex-NoBroker. Designed the pay-as-you-go model that makes Nestify unique.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
  alt: 'Priya Sharma, Co-founder and CPO of Nestify, professional headshot'
},
{
  name: 'Rahul Verma',
  role: 'CTO',
  bio: 'Ex-Flipkart engineering. Built the fraud-detection and lead-scoring engine from scratch.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  alt: 'Rahul Verma, CTO of Nestify, professional headshot'
},
{
  name: 'Sneha Kapoor',
  role: 'Head of Growth',
  bio: 'Ex-Housing.com. Scaled Nestify from 3 cities to 18 cities in under 18 months.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
  alt: 'Sneha Kapoor, Head of Growth at Nestify, professional headshot'
}];


const milestones = [
{ year: '2021', event: 'Founded in a Gurgaon co-working space with 3 people and a big idea.' },
{ year: '2022', event: 'Launched in Delhi NCR. First 1,000 listings in 60 days. Zero upfront fees.' },
{ year: '2023', event: 'Expanded to Mumbai, Bangalore, Pune. Series A funding of ₹42 Cr.' },
{ year: '2024', event: '18 cities. 2.4 lakh active listings. India\'s fastest-growing PropTech.' },
{ year: '2025', event: 'Launched AI lead scoring. 94% seller satisfaction. Profitable operations.' },
{ year: '2026', event: 'Pan-India expansion. Commercial real estate. NRI listings going live.' }];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-20 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
              We built Nestify because<br />
              <span className="text-accent">the old way was broken.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Sellers were paying ₹30,000–₹80,000 upfront with no guarantee. Buyers were drowning in spam calls. We said: there has to be a better way.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-b border-border">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) =>
              <div key={s.label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl text-primary mb-2">{s.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Our Mission</span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                  Make real estate transactions fair for everyone.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In India, selling a property meant paying a broker 1–2% commission or shelling out ₹50,000+ to portals — before a single buyer even saw your listing. That&apos;s not fair.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nestify flips the model. List for free. We only earn when you get a verified lead. If you don&apos;t get value, you don&apos;t pay. Simple, transparent, and aligned with your success.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">

                  See Our Pricing
                  <AppIcon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                  <AppImage
                    src="https://images.unsplash.com/photo-1693309181863-ea540b749e04"
                    alt="Modern residential apartment building in India with lush green surroundings"
                    fill
                    className="object-cover" />

                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-border">
                  <p className="font-serif text-2xl text-primary font-bold">₹0</p>
                  <p className="text-xs text-muted-foreground mt-1">to list your property</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 md:px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">What We Stand For</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) =>
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <AppIcon name={v.icon as any} size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Our Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">From Idea to India&apos;s Fastest-Growing PropTech</h2>
            </div>
            <div className="space-y-0">
              {milestones.map((m, i) =>
              <div key={m.year} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-white text-xs font-bold shadow-lg">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2 mb-2" />}
                  </div>
                  <div className="pb-8 pt-1.5">
                    <p className="text-xs font-semibold text-primary mb-1">{m.year}</p>
                    <p className="text-foreground/80 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 md:px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">The People</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Meet the Founders</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) =>
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-border card-hover">
                  <div className="aspect-square relative">
                    <AppImage
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover" />

                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-6 cta-gradient">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Join the movement.</h2>
            <p className="text-white/70 mb-8 text-lg">List your property for free. Pay only when you get real leads.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/post-property" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Post Property FREE
              </Link>
              <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>);

}