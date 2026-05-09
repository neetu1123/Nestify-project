import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

const packages = [
  {
    name: 'Studio / 1 BHK',
    icon: 'HomeIcon',
    price: 'From ₹4,999',
    items: ['Up to 20 boxes', '1 bedroom furniture', 'Kitchen items', 'Loading & unloading', 'Transit insurance'],
    popular: false,
  },
  {
    name: '2–3 BHK',
    icon: 'BuildingOffice2Icon',
    price: 'From ₹9,999',
    items: ['Up to 60 boxes', 'Full furniture dismantling & assembly', 'Kitchen & appliances', 'Loading & unloading', 'Transit insurance', 'Packing materials included'],
    popular: true,
  },
  {
    name: '4 BHK / Villa',
    icon: 'HomeModernIcon',
    price: 'From ₹18,999',
    items: ['Unlimited boxes', 'Full furniture dismantling & assembly', 'All appliances', 'Dedicated move manager', 'Loading & unloading', 'Premium transit insurance', 'Packing materials included', 'Post-move cleaning'],
    popular: false,
  },
];

const partners = [
  { name: 'SafeMove India', cities: '18 cities', rating: 4.8, moves: '12,400+', badge: 'Top Rated' },
  { name: 'QuickShift Pro', cities: '12 cities', rating: 4.7, moves: '8,200+', badge: null },
  { name: 'PackRight Movers', cities: '8 cities', rating: 4.9, moves: '6,800+', badge: 'Best in Delhi NCR' },
  { name: 'HomeShift Express', cities: '15 cities', rating: 4.6, moves: '9,100+', badge: null },
];

const tips = [
  { icon: 'CalendarDaysIcon', title: 'Book 2 weeks in advance', desc: 'Especially for month-end moves (25th–5th) which are 40% more expensive due to demand.' },
  { icon: 'ArchiveBoxIcon', title: 'Declutter before packing', desc: 'Sell or donate items you haven\'t used in 12 months. Less stuff = lower moving cost.' },
  { icon: 'ShieldCheckIcon', title: 'Always opt for transit insurance', desc: 'It costs ₹500–₹1,500 but covers damage to electronics, furniture, and fragile items.' },
  { icon: 'DocumentTextIcon', title: 'Get a written estimate', desc: 'Never accept verbal quotes. A written estimate protects you from surprise charges on moving day.' },
];

export default function PackersMoversPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              Packers & Movers
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-5 leading-tight">
              Move stress-free with <span className="text-accent">verified movers.</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;ve verified 500+ packers & movers across India. Get 3 quotes in 30 minutes. No broker fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Get Free Quotes
              </Link>
              <Link href="#packages" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                View Packages
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-b border-border py-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Verified Movers' },
              { value: '18 Cities', label: 'Pan India' },
              { value: '36,000+', label: 'Moves Completed' },
              { value: '4.8★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-primary font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">Moving Packages</h2>
              <p className="text-muted-foreground">Transparent pricing. No hidden charges.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-3xl border p-7 relative ${pkg.popular ? 'bg-foreground border-foreground shadow-2xl' : 'bg-white border-border'}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pkg.popular ? 'bg-primary/20' : 'bg-primary/10'}`}>
                    <AppIcon name={pkg.icon as any} size={22} className="text-primary" />
                  </div>
                  <h3 className={`font-semibold text-lg mb-1 ${pkg.popular ? 'text-white' : 'text-foreground'}`}>{pkg.name}</h3>
                  <p className={`font-serif text-3xl font-bold mb-6 ${pkg.popular ? 'text-accent' : 'text-primary'}`}>{pkg.price}</p>
                  <div className="space-y-2.5 mb-7">
                    {pkg.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <AppIcon name="CheckCircleIcon" size={15} className={pkg.popular ? 'text-green-400' : 'text-secondary'} />
                        <span className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-foreground/80'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={`block text-center py-3.5 rounded-xl font-semibold transition-colors ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-muted text-foreground hover:bg-border'}`}
                  >
                    Get Quotes
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 px-4 md:px-6 bg-muted">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">Our Verified Moving Partners</h2>
              <p className="text-muted-foreground">All partners are background-verified, insured, and rated by real customers.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white rounded-2xl p-6 border border-border card-hover text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <AppIcon name="TruckIcon" size={26} className="text-primary" />
                  </div>
                  {partner.badge && (
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                      {partner.badge}
                    </span>
                  )}
                  <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{partner.cities}</p>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <AppIcon name="StarIcon" size={13} className="text-accent" />
                    <span className="text-sm font-bold">{partner.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{partner.moves} moves</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">Moving Tips from Experts</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {tips.map((tip) => (
                <div key={tip.title} className="flex gap-5 bg-white rounded-2xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <AppIcon name={tip.icon as any} size={22} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 cta-gradient">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Ready to move?</h2>
            <p className="text-white/70 mb-8">Get 3 verified quotes in 30 minutes. Completely free.</p>
            <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Get Free Moving Quotes
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
