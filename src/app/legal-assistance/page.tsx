import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

const services = [
  {
    icon: 'DocumentCheckIcon',
    title: 'Sale Deed Drafting',
    desc: 'Legally sound sale deed drafted by RERA-registered advocates. Includes stamp duty calculation and registration guidance.',
    price: 'From ₹4,999',
  },
  {
    icon: 'MagnifyingGlassIcon',
    title: 'Title Verification',
    desc: 'Thorough 30-year title search to ensure the property is free from disputes, encumbrances, and litigation.',
    price: 'From ₹2,999',
  },
  {
    icon: 'BuildingOfficeIcon',
    title: 'RERA Compliance Check',
    desc: 'Verify if the project is RERA registered, check builder track record, and review the allotment agreement.',
    price: 'From ₹1,999',
  },
  {
    icon: 'ScaleIcon',
    title: 'Rent Agreement',
    desc: 'Legally binding rent agreement with proper clauses for maintenance, security deposit, and termination.',
    price: 'From ₹999',
  },
  {
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Due Diligence Report',
    desc: 'Comprehensive property due diligence covering legal, structural, and regulatory compliance aspects.',
    price: 'From ₹7,999',
  },
  {
    icon: 'HomeModernIcon',
    title: 'Property Registration',
    desc: 'End-to-end support for property registration at the sub-registrar office, including document preparation.',
    price: 'From ₹3,499',
  },
];

const lawyers = [
  { name: 'Adv. Vikram Nair', city: 'Delhi', exp: '18 years', speciality: 'Property Disputes & Title', rating: 4.9, reviews: 142 },
  { name: 'Adv. Meera Pillai', city: 'Mumbai', exp: '14 years', speciality: 'RERA & Builder Disputes', rating: 4.8, reviews: 98 },
  { name: 'Adv. Suresh Reddy', city: 'Bangalore', exp: '22 years', speciality: 'Commercial Real Estate', rating: 4.9, reviews: 187 },
  { name: 'Adv. Ananya Singh', city: 'Gurgaon', exp: '10 years', speciality: 'NRI Property & POA', rating: 4.7, reviews: 76 },
];

const checklist = [
  'Title deed (original)',
  'Encumbrance certificate (15–30 years)',
  'Approved building plan',
  'Occupancy certificate',
  'RERA registration certificate',
  'Property tax receipts (last 3 years)',
  'NOC from society / builder',
  'Khata / Mutation certificate',
  'Electricity & water connection documents',
  'Sale agreement / allotment letter',
];

export default function LegalAssistancePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              Legal Assistance
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-5 leading-tight">
              Buy or sell with complete <span className="text-accent">legal confidence.</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Our network of 200+ RERA-registered property lawyers across 18 cities ensures your transaction is legally airtight.
            </p>
            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Talk to a Property Lawyer
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">Legal Services We Offer</h2>
              <p className="text-muted-foreground">Fixed, transparent pricing. No surprise bills.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-2xl p-6 border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                    <AppIcon name={service.icon as any} size={22} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{service.price}</span>
                    <Link href="/contact" className="text-sm font-semibold text-secondary hover:underline">
                      Get Started →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-20 px-4 md:px-6 bg-muted">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-4">Property Document Checklist</h2>
                <p className="text-muted-foreground mb-8">
                  Before buying any property in India, ensure you have verified all these documents. Our lawyers can help you obtain and verify each one.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Get Document Verification
                  <AppIcon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="space-y-3">
                  {checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <AppIcon name="CheckIcon" size={12} className="text-secondary" />
                      </div>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lawyers */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">Our Empanelled Lawyers</h2>
              <p className="text-muted-foreground">All lawyers are verified, RERA-registered, and rated by real clients.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {lawyers.map((lawyer) => (
                <div key={lawyer.name} className="bg-white rounded-2xl p-6 border border-border card-hover text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <AppIcon name="UserIcon" size={28} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{lawyer.name}</h3>
                  <p className="text-xs text-primary font-medium mb-1">{lawyer.city}</p>
                  <p className="text-xs text-muted-foreground mb-3">{lawyer.speciality}</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <AppIcon name="StarIcon" size={14} className="text-accent" />
                    <span className="text-sm font-bold text-foreground">{lawyer.rating}</span>
                    <span className="text-xs text-muted-foreground">({lawyer.reviews} reviews)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{lawyer.exp} experience</p>
                  <Link href="/contact" className="block text-center py-2.5 rounded-xl bg-muted text-sm font-semibold text-foreground hover:bg-border transition-colors">
                    Consult Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 cta-gradient">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Don&apos;t let legal issues derail your deal.</h2>
            <p className="text-white/70 mb-8">Get a free 15-minute consultation with a property lawyer today.</p>
            <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Book Free Consultation
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
