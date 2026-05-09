import React from 'react';
import AuthPanel from './components/AuthPanel';
import Link from 'next/link';
import AppLogo from '../../components/ui/AppLogo';

export default function SignUpLoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 cta-gradient flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2 relative z-10">
          <AppLogo size={36} />
          <span className="font-serif text-2xl text-white">Nestify</span>
        </Link>

        {/* Value Props */}
        <div className="relative z-10">
          <h2 className="font-serif text-4xl text-white leading-tight mb-6">
            India&apos;s first<br />
            <span className="text-accent italic">Pay-As-You-Go</span><br />
            real estate platform
          </h2>
          <div className="space-y-4">
            {[
              { icon: 'CheckCircleIcon', text: 'List your property for ₹0 upfront' },
              { icon: 'ShieldCheckIcon', text: 'Pay only when you get verified leads' },
              { icon: 'UserGroupIcon', text: 'Connect directly with genuine buyers' },
              { icon: 'DocumentTextIcon', text: 'Full transparency — no hidden charges ever' },
            ]?.map((item) => (
              <div key={item?.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <span className="text-white/80 text-sm">{item?.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 bg-white/10 border border-white/20 rounded-2xl p-5">
          <p className="text-white/80 text-sm italic mb-3">
            &ldquo;Listed for free, got 6 leads in a week, sold in 35 days. Paid only ₹2,400 total. Best real estate experience I&apos;ve had.&rdquo;
          </p>
          <p className="text-white/60 text-xs">— Vikram Singh, sold in Gurgaon</p>
        </div>
      </div>
      {/* Right Auth Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link href="/homepage" className="flex items-center gap-2 mb-8 lg:hidden">
            <AppLogo size={32} />
            <span className="font-serif text-xl text-foreground">Nestify</span>
          </Link>
          <AuthPanel />
        </div>
      </div>
    </main>
  );
}