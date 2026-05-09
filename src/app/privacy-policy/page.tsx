import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'April 1, 2026';

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: `Nestify Technologies Private Limited ("Nestify", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use the Nestify platform.

This policy complies with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDPA).`,
    },
    {
      id: 'data-collected',
      title: '2. Data We Collect',
      content: `2.1 Information you provide:
• Name, email address, phone number, and password when you register
• Property details, photos, and descriptions when you list a property
• Payment information (processed securely by our payment partners)
• Communications you send to us or other users

2.2 Information collected automatically:
• Device information (IP address, browser type, operating system)
• Usage data (pages visited, search queries, time spent)
• Location data (city/region level, with your permission)
• Cookies and similar tracking technologies

2.3 Information from third parties:
• Social login data (if you sign in via Google or Facebook)
• Credit bureau data (for home loan eligibility checks, with your consent)`,
    },
    {
      id: 'data-use',
      title: '3. How We Use Your Data',
      content: `We use your personal data to:

• Create and manage your account
• Display your property listings to potential buyers/tenants
• Deliver verified leads to property sellers
• Process payments and send invoices
• Send transactional notifications (lead alerts, enquiry confirmations)
• Send marketing communications (with your consent; you can opt out anytime)
• Improve our platform through analytics
• Detect and prevent fraud and abuse
• Comply with legal obligations`,
    },
    {
      id: 'data-sharing',
      title: '4. Data Sharing',
      content: `We share your data only in the following circumstances:

4.1 With other users: When a buyer enquires about your property, we share your contact details with them (and vice versa). This is the core function of our marketplace.

4.2 With service partners: We share data with home loan lenders, legal service providers, and packers & movers partners only when you request these services.

4.3 With payment processors: Payment data is shared with our PCI-DSS compliant payment partners (Razorpay, PayU).

4.4 With analytics providers: Anonymised usage data is shared with Google Analytics and similar tools.

4.5 Legal requirements: We may disclose data if required by law, court order, or government authority.

We do NOT sell your personal data to third parties.`,
    },
    {
      id: 'cookies',
      title: '5. Cookies',
      content: `We use cookies and similar technologies to:

• Keep you logged in
• Remember your search preferences
• Analyse platform usage
• Serve relevant advertisements

You can control cookies through your browser settings. Disabling cookies may affect platform functionality.

Types of cookies we use:
• Essential cookies: Required for the platform to function
• Analytics cookies: Help us understand usage patterns
• Marketing cookies: Used for targeted advertising (opt-out available)`,
    },
    {
      id: 'data-retention',
      title: '6. Data Retention',
      content: `We retain your personal data for as long as your account is active or as needed to provide services. Specifically:

• Account data: Retained for 3 years after account deletion
• Transaction records: Retained for 7 years (as required by Indian tax law)
• Marketing preferences: Until you opt out
• Enquiry data: Retained for 2 years

You may request deletion of your data at any time (subject to legal retention requirements).`,
    },
    {
      id: 'your-rights',
      title: '7. Your Rights',
      content: `Under the Digital Personal Data Protection Act, 2023, you have the right to:

• Access: Request a copy of your personal data
• Correction: Request correction of inaccurate data
• Erasure: Request deletion of your data (subject to legal obligations)
• Portability: Receive your data in a machine-readable format
• Grievance Redressal: Lodge a complaint with our Data Protection Officer

To exercise these rights, email us at privacy@nestify.in or write to our Data Protection Officer at our registered address.`,
    },
    {
      id: 'security',
      title: '8. Data Security',
      content: `We implement industry-standard security measures including:

• SSL/TLS encryption for all data in transit
• AES-256 encryption for sensitive data at rest
• Regular security audits and penetration testing
• Access controls and employee data handling training
• Incident response procedures

Despite these measures, no system is 100% secure. In the event of a data breach affecting your rights, we will notify you within 72 hours as required by law.`,
    },
    {
      id: 'children',
      title: '9. Children\'s Privacy',
      content: `Nestify is not intended for users under 18 years of age. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a minor, please contact us immediately at privacy@nestify.in.`,
    },
    {
      id: 'contact',
      title: '10. Contact & Grievances',
      content: `Data Protection Officer:
Nestify Technologies Private Limited
4th Floor, Tower B, DLF Cyber City
Sector 24, Gurgaon, Haryana 122002
Email: privacy@nestify.in
Phone: +91 124 456 7890

If you are not satisfied with our response, you may lodge a complaint with the Data Protection Board of India.`,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-14 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-3">Privacy Policy</h1>
            <p className="text-white/60 text-sm">Last updated: {lastUpdated} · Compliant with DPDPA 2023</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-foreground/70 hover:text-primary transition-colors py-1.5 border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Summary Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: 'ShieldCheckIcon', title: 'We don\'t sell your data', desc: 'Your personal information is never sold to third parties.', color: 'text-secondary' },
                  { icon: 'LockClosedIcon', title: 'Encrypted & secure', desc: 'All data is encrypted in transit and at rest.', color: 'text-primary' },
                  { icon: 'UserIcon', title: 'You\'re in control', desc: 'Access, correct, or delete your data anytime.', color: 'text-accent-foreground' },
                ].map((card) => (
                  <div key={card.title} className="bg-white rounded-2xl border border-border p-5">
                    <AppIcon name={card.icon as any} size={22} className={`${card.color} mb-3`} />
                    <h3 className="font-semibold text-foreground text-sm mb-1">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="bg-white rounded-2xl border border-border p-8">
                    <h2 className="font-serif text-xl text-foreground mb-4">{section.title}</h2>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-muted rounded-2xl p-6 flex items-start gap-4">
                <AppIcon name="EnvelopeIcon" size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Privacy questions or requests?</p>
                  <p className="text-sm text-muted-foreground">
                    Email our Data Protection Officer at{' '}
                    <a href="mailto:privacy@nestify.in" className="text-primary hover:underline">privacy@nestify.in</a>.
                    We respond within 72 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
