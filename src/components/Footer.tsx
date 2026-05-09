import React from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';

const footerLinks = {
  buy: [
    { label: 'Flats in Delhi', href: '/property-listings' },
    { label: 'Flats in Mumbai', href: '/property-listings' },
    { label: 'Villas in Bangalore', href: '/property-listings' },
    { label: 'Plots in Noida', href: '/property-listings' },
  ],
  rent: [
    { label: 'Rent in Gurgaon', href: '/property-listings' },
    { label: 'Rent in Pune', href: '/property-listings' },
    { label: 'PG in Delhi', href: '/property-listings' },
    { label: 'Rent in Hyderabad', href: '/property-listings' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Find an Agent', href: '/agents' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: 'Home Loans', href: '/home-loans' },
    { label: 'Legal Assistance', href: '/legal-assistance' },
    { label: 'Packers & Movers', href: '/packers-movers' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      {/* Main links row */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <AppLogo size={28} />
              <span className="font-serif text-lg text-foreground">Nestify</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India&apos;s first Pay-As-You-Go real estate marketplace.
            </p>
          </div>
          {/* Buy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Buy</p>
            <ul className="space-y-2">
              {footerLinks?.buy?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Rent */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Rent</p>
            <ul className="space-y-2">
              {footerLinks?.rent?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Company</p>
            <ul className="space-y-2">
              {footerLinks?.company?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Services</p>
            <ul className="space-y-2">
              {footerLinks?.services?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Legal</p>
            <ul className="space-y-2">
              {footerLinks?.legal?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nestify Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}