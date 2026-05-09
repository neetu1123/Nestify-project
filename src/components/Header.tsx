'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';
import Icon from './ui/AppIcon';

const buyRentMegaMenu = {
  propertyTypes: [
    { label: 'Flats / Apartments', icon: 'BuildingOffice2Icon', href: '/property-listings?type=apartment' },
    { label: 'Independent House', icon: 'HomeIcon', href: '/property-listings?type=house' },
    { label: 'Villas', icon: 'HomeModernIcon', href: '/property-listings?type=villa' },
    { label: 'Plots / Land', icon: 'MapIcon', href: '/property-listings?type=plot' },
  ],
  budgets: [
    { label: 'Under ₹50L', sub: 'Affordable homes', href: '/property-listings?budget=under-50l' },
    { label: '₹50L – ₹1Cr', sub: 'Mid segment', href: '/property-listings?budget=50l-1cr' },
    { label: '₹1Cr – ₹2Cr', sub: 'Premium', href: '/property-listings?budget=1cr-2cr' },
    { label: '₹2Cr+', sub: 'Luxury', href: '/property-listings?budget=above-2cr' },
  ],
  bhk: [
    { label: '1 BHK', href: '/property-listings?bhk=1' },
    { label: '2 BHK', href: '/property-listings?bhk=2' },
    { label: '3 BHK', href: '/property-listings?bhk=3' },
    { label: '4+ BHK', href: '/property-listings?bhk=4' },
  ],
  cities: [
    { label: 'Delhi', href: '/locality/delhi' },
    { label: 'Gurgaon', href: '/locality/gurgaon' },
    { label: 'Noida', href: '/locality/noida' },
    { label: 'Mumbai', href: '/locality/mumbai' },
    { label: 'Bangalore', href: '/locality/bangalore' },
    { label: 'Pune', href: '/locality/pune' },
  ],
  filters: [
    { label: 'Verified Listings', icon: 'ShieldCheckIcon', href: '/property-listings?filter=verified' },
    { label: 'Owner Properties', icon: 'UserIcon', href: '/property-listings?filter=owner' },
    { label: 'Ready to Move', icon: 'CheckCircleIcon', href: '/property-listings?filter=ready' },
    { label: 'New Launch', icon: 'SparklesIcon', href: '/property-listings?filter=new-launch' },
  ],
};

const sellMenu = [
  { label: 'Post Property FREE', href: '/post-property', highlight: true },
  { label: 'Property Valuation', href: '/pricing' },
  { label: 'Pricing & Plans', href: '/pricing' },
  { label: 'How it Works', href: '/about' },
  { label: 'Agent Directory', href: '/agents' },
];

const servicesMenu = [
  { label: 'Home Loans', icon: 'CurrencyRupeeIcon', href: '/home-loans' },
  { label: 'Legal Assistance', icon: 'ScaleIcon', href: '/legal-assistance' },
  { label: 'Packers & Movers', icon: 'TruckIcon', href: '/packers-movers' },
  { label: 'Vastu Consultation', icon: 'StarIcon', href: '/contact' },
  { label: 'Agent Directory', icon: 'UserGroupIcon', href: '/agents' },
  { label: 'Blog & Guides', icon: 'BookOpenIcon', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMenuEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const navItems = [
    { label: 'Buy', key: 'buy' },
    { label: 'Rent', key: 'rent' },
    { label: 'Sell', key: 'sell' },
    { label: 'Services', key: 'services' },
    { label: 'Commercial', key: null, href: '/property-listings' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center gap-2 shrink-0">
              <AppLogo size={32} />
              <span className="font-serif text-xl text-foreground tracking-tight hidden sm:block">
                Nestify
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={menuRef}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.key && handleMenuEnter(item.key)}
                  onMouseLeave={handleMenuLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-all duration-200">
                      {item.label}
                      <Icon name="ChevronDownIcon" size={14} className={`transition-transform duration-200 ${activeMenu === item.key ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  {/* Buy/Rent Mega Menu */}
                  {(item.key === 'buy' || item.key === 'rent') && activeMenu === item.key && (
                    <div
                      className="mega-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] bg-white rounded-2xl shadow-2xl border border-border p-6 z-50"
                      onMouseEnter={() => handleMenuEnter(item.key!)}
                      onMouseLeave={handleMenuLeave}
                    >
                      <div className="grid grid-cols-5 gap-6">
                        {/* Col 1: Property Types */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Property Type</p>
                          <ul className="space-y-2">
                            {buyRentMegaMenu.propertyTypes.map((pt) => (
                              <li key={pt.label}>
                                <Link href={pt.href} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1">
                                  <Icon name={pt.icon as any} size={14} className="text-primary/60" />
                                  {pt.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Col 2: Budget */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Budget</p>
                          <ul className="space-y-2">
                            {buyRentMegaMenu.budgets.map((b) => (
                              <li key={b.label}>
                                <Link href={b.href} className="block text-sm text-foreground/80 hover:text-primary transition-colors py-1">
                                  <span className="font-medium">{b.label}</span>
                                  <span className="block text-xs text-muted-foreground">{b.sub}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Col 3: BHK */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">BHK</p>
                          <ul className="space-y-2">
                            {buyRentMegaMenu.bhk.map((b) => (
                              <li key={b.label}>
                                <Link href={b.href} className="text-sm text-foreground/80 hover:text-primary transition-colors py-1 block">
                                  {b.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Col 4: Cities */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Popular Cities</p>
                          <ul className="space-y-2">
                            {buyRentMegaMenu.cities.map((c) => (
                              <li key={c.label}>
                                <Link href={c.href} className="text-sm text-foreground/80 hover:text-primary transition-colors py-1 block">
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Col 5: Smart Filters */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Smart Filters</p>
                          <ul className="space-y-2">
                            {buyRentMegaMenu.filters.map((f) => (
                              <li key={f.label}>
                                <Link href={f.href} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1">
                                  <Icon name={f.icon as any} size={13} className="text-secondary" />
                                  {f.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                        <Link href="/property-listings" className="text-xs text-primary font-semibold hover:underline">
                          View all {item.key === 'buy' ? 'properties for sale' : 'rental properties'} →
                        </Link>
                        <span className="text-border">|</span>
                        <Link href="/agents" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                          Find an Agent
                        </Link>
                        <span className="text-border">|</span>
                        <Link href="/property-detail" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                          Sample Property
                        </Link>
                        <span className="text-border">|</span>
                        <Link href="/blog" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                          Buying Guide
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Sell Dropdown */}
                  {item.key === 'sell' && activeMenu === 'sell' && (
                    <div
                      className="mega-menu absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-border py-2 z-50"
                      onMouseEnter={() => handleMenuEnter('sell')}
                      onMouseLeave={handleMenuLeave}
                    >
                      {sellMenu.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${s.highlight ? 'text-primary font-semibold hover:bg-orange-50' : 'text-foreground/80 hover:text-foreground hover:bg-muted'}`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Services Dropdown */}
                  {item.key === 'services' && activeMenu === 'services' && (
                    <div
                      className="mega-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border py-2 z-50"
                      onMouseEnter={() => handleMenuEnter('services')}
                      onMouseLeave={handleMenuLeave}
                    >
                      {servicesMenu.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                        >
                          <Icon name={s.icon as any} size={15} className="text-primary/70" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/sign-up-login"
                className="hidden md:block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2"
              >
                Login
              </Link>
              <Link
                href="/post-property"
                className="flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Icon name="PlusCircleIcon" size={15} />
                <span className="hidden sm:inline">Post Property</span>
                <span className="sm:hidden">Post</span>
                <span className="hidden sm:inline text-white/80 font-normal">FREE</span>
              </Link>
              {/* Hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground rounded-xl hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground rounded-xl hover:bg-muted"
                        onClick={() => setMobileExpanded(mobileExpanded === item.key ? null : item.key)}
                      >
                        {item.label}
                        <Icon name="ChevronDownIcon" size={16} className={`transition-transform ${mobileExpanded === item.key ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpanded === item.key && (
                        <div className="pl-4 pb-2 space-y-1">
                          {(item.key === 'buy' || item.key === 'rent') && (
                            <>
                              <p className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Property Types</p>
                              {buyRentMegaMenu.propertyTypes.map((pt) => (
                                <Link key={pt.label} href={pt.href} className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary" onClick={() => setMobileOpen(false)}>
                                  {pt.label}
                                </Link>
                              ))}
                              <p className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Popular Cities</p>
                              {buyRentMegaMenu.cities.map((c) => (
                                <Link key={c.label} href={c.href} className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary" onClick={() => setMobileOpen(false)}>
                                  {c.label}
                                </Link>
                              ))}
                              <Link href="/property-listings" className="block px-4 py-2 text-sm font-semibold text-primary hover:underline" onClick={() => setMobileOpen(false)}>
                                View All Listings →
                              </Link>
                              <Link href="/agents" className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary" onClick={() => setMobileOpen(false)}>
                                Find an Agent
                              </Link>
                            </>
                          )}
                          {item.key === 'sell' && sellMenu.map((s) => (
                            <Link key={s.label} href={s.href} className={`block px-4 py-2 text-sm ${s.highlight ? 'text-primary font-semibold' : 'text-foreground/70 hover:text-primary'}`} onClick={() => setMobileOpen(false)}>
                              {s.label}
                            </Link>
                          ))}
                          {item.key === 'services' && servicesMenu.map((s) => (
                            <Link key={s.label} href={s.href} className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary" onClick={() => setMobileOpen(false)}>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Link href="/sign-up-login" className="block w-full text-center px-4 py-3 text-sm font-medium border border-border rounded-xl hover:bg-muted" onClick={() => setMobileOpen(false)}>
                  Login / Sign Up
                </Link>
                <Link href="/post-property" className="block w-full text-center px-4 py-3 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90" onClick={() => setMobileOpen(false)}>
                  Post Property FREE
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}