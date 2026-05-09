import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

export default function TermsPage() {
  const lastUpdated = 'April 1, 2026';

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Nestify platform (website, mobile application, or any related services), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These Terms constitute a legally binding agreement between you and Nestify Technologies Private Limited ("Nestify", "we", "us", or "our"), a company incorporated under the Companies Act, 2013, with its registered office at 4th Floor, Tower B, DLF Cyber City, Sector 24, Gurgaon, Haryana 122002.`,
    },
    {
      id: 'services',
      title: '2. Description of Services',
      content: `Nestify operates a Pay-As-You-Go real estate marketplace that allows:

• Property owners and agents to list residential and commercial properties for sale or rent
• Buyers and tenants to search, discover, and enquire about listed properties
• Access to ancillary services including home loans, legal assistance, and packers & movers

Nestify acts as an intermediary platform and does not own, sell, or rent any properties listed on the platform. We do not guarantee the accuracy of listings or the completion of any transaction.`,
    },
    {
      id: 'listing',
      title: '3. Property Listings',
      content: `3.1 Free Listing: You may list your property on Nestify at no charge. By listing, you represent that you are the owner or authorised agent of the property.

3.2 Accuracy: All listing information must be accurate, complete, and not misleading. False or fraudulent listings will result in immediate removal and account suspension.

3.3 Lead Charges: Under our Pay-As-You-Go model, you will be charged ₹499 (plus applicable GST) per verified lead delivered to you. A "verified lead" is defined as a prospective buyer or tenant who has verified their mobile number via OTP and expressed genuine interest in your property.

3.4 Lead Quality Guarantee: If a delivered lead is found to be fraudulent or uncontactable within 48 hours of delivery, Nestify will refund the lead credit upon verification.`,
    },
    {
      id: 'user-conduct',
      title: '4. User Conduct',
      content: `You agree not to:

• Post false, misleading, or fraudulent property listings
• Use the platform to spam, harass, or defraud other users
• Scrape, crawl, or systematically extract data from the platform
• Circumvent the platform to conduct transactions directly and avoid lead charges
• Use automated tools to create accounts or submit enquiries
• Violate any applicable Indian law, including the Real Estate (Regulation and Development) Act, 2016 (RERA)`,
    },
    {
      id: 'payments',
      title: '5. Payments and Refunds',
      content: `5.1 All payments are processed in Indian Rupees (INR) and are subject to applicable GST.

5.2 Lead charges are non-refundable except under the Lead Quality Guarantee (Section 3.4).

5.3 Premium subscription fees are charged monthly and are non-refundable for the current billing period.

5.4 Nestify uses third-party payment processors. By making a payment, you agree to their terms and conditions.`,
    },
    {
      id: 'intellectual-property',
      title: '6. Intellectual Property',
      content: `All content on the Nestify platform, including but not limited to text, graphics, logos, icons, images, and software, is the property of Nestify Technologies Private Limited and is protected by Indian and international intellectual property laws.

You may not reproduce, distribute, or create derivative works from our content without express written permission.`,
    },
    {
      id: 'disclaimer',
      title: '7. Disclaimer of Warranties',
      content: `Nestify provides the platform on an "as is" and "as available" basis. We do not warrant that:

• The platform will be uninterrupted or error-free
• Listings are accurate, complete, or up-to-date
• Any transaction facilitated through the platform will be completed

Nestify is not responsible for the conduct of buyers, sellers, agents, or any third parties on the platform.`,
    },
    {
      id: 'limitation',
      title: '8. Limitation of Liability',
      content: `To the maximum extent permitted by applicable law, Nestify shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.

Our total liability to you for any claim arising from these Terms shall not exceed the amount paid by you to Nestify in the 3 months preceding the claim.`,
    },
    {
      id: 'governing-law',
      title: '9. Governing Law and Dispute Resolution',
      content: `These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Gurgaon, Haryana.

Before initiating legal proceedings, you agree to attempt to resolve disputes through our customer support team. Unresolved disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996.`,
    },
    {
      id: 'changes',
      title: '10. Changes to Terms',
      content: `Nestify reserves the right to modify these Terms at any time. We will notify registered users of material changes via email or platform notification. Continued use of the platform after changes constitutes acceptance of the revised Terms.`,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-14 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-3">Terms & Conditions</h1>
            <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections?.map((section) => (
                    <a
                      key={section?.id}
                      href={`#${section?.id}`}
                      className="block text-sm text-foreground/70 hover:text-primary transition-colors py-1.5 border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {section?.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border p-8 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  Please read these Terms and Conditions carefully before using the Nestify platform. These terms govern your use of our services and constitute a binding legal agreement. If you have questions, contact us at{' '}
                  <a href="mailto:legal@nestify.in" className="text-primary hover:underline">legal@nestify.in</a>.
                </p>
              </div>

              <div className="space-y-6">
                {sections?.map((section) => (
                  <div key={section?.id} id={section?.id} className="bg-white rounded-2xl border border-border p-8">
                    <h2 className="font-serif text-xl text-foreground mb-4">{section?.title}</h2>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                      {section?.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-muted rounded-2xl p-6 flex items-start gap-4">
                <AppIcon name="InformationCircleIcon" size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Questions about these terms?</p>
                  <p className="text-sm text-muted-foreground">
                    Contact our legal team at{' '}
                    <a href="mailto:legal@nestify.in" className="text-primary hover:underline">legal@nestify.in</a>{' '}
                    or call us at 1800-123-4567 (Mon–Sat, 9 AM – 6 PM IST).
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
