import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

const lenders = [
  { name: 'SBI Home Loan', rate: '8.50%', maxLoan: '₹5 Cr', tenure: '30 years', processing: '0.35%', badge: 'Lowest Rate' },
  { name: 'HDFC Bank', rate: '8.65%', maxLoan: '₹10 Cr', tenure: '30 years', processing: '0.50%', badge: 'Most Popular' },
  { name: 'ICICI Bank', rate: '8.70%', maxLoan: '₹5 Cr', tenure: '30 years', processing: '0.50%', badge: null },
  { name: 'Axis Bank', rate: '8.75%', maxLoan: '₹5 Cr', tenure: '30 years', processing: '1%', badge: null },
  { name: 'Kotak Mahindra', rate: '8.70%', maxLoan: '₹5 Cr', tenure: '20 years', processing: '0.50%', badge: 'Fast Approval' },
  { name: 'LIC Housing Finance', rate: '8.55%', maxLoan: '₹15 Cr', tenure: '30 years', processing: '0.25%', badge: null },
];

const steps = [
  { icon: 'ClipboardDocumentListIcon', title: 'Check Eligibility', desc: 'Use our free calculator to know your loan eligibility based on income, age, and existing obligations.' },
  { icon: 'DocumentTextIcon', title: 'Compare Lenders', desc: 'We compare 20+ lenders on rate, processing fee, and approval speed to find your best match.' },
  { icon: 'PaperAirplaneIcon', title: 'Apply Online', desc: 'Submit your application once. Our partner lenders receive it simultaneously for faster processing.' },
  { icon: 'CheckBadgeIcon', title: 'Get Approved', desc: 'Receive in-principle approval in 24–48 hours. Disbursement within 7 working days.' },
];

const faqs = [
  { q: 'How much home loan can I get?', a: 'Typically, lenders offer up to 80–90% of the property value. Your eligibility depends on your income, credit score (750+ is ideal), age, and existing EMIs. Use our calculator for a personalised estimate.' },
  { q: 'What documents are needed?', a: 'Salaried: Last 3 months salary slips, 6 months bank statements, Form 16, PAN, Aadhaar. Self-employed: ITR for 2 years, business financials, bank statements for 12 months.' },
  { q: 'Fixed or floating rate — which is better?', a: 'In a falling rate environment, floating rates are better. Currently (2026), with rates expected to ease, floating rates are recommended for most borrowers.' },
  { q: 'Can I prepay my home loan?', a: 'Yes. RBI mandates no prepayment penalty on floating-rate home loans. Fixed-rate loans may have a 2% prepayment charge.' },
];

export default function HomeLoansPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
                  Home Loans
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-white mb-5 leading-tight">
                  Get the best home loan rate. <span className="text-accent">Guaranteed.</span>
                </h1>
                <p className="text-white/70 text-lg mb-8">
                  We compare 20+ lenders to find you the lowest rate, fastest approval, and zero hidden charges.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-center">
                    Check My Eligibility
                  </Link>
                  <Link href="#compare" className="bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors text-center">
                    Compare Lenders
                  </Link>
                </div>
              </div>
              {/* EMI Calculator */}
              <div className="bg-white rounded-3xl p-7 shadow-2xl">
                <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                  <AppIcon name="CalculatorIcon" size={18} className="text-primary" />
                  Quick EMI Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Loan Amount</label>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-muted">
                      <span className="text-foreground font-semibold">₹</span>
                      <input type="number" defaultValue="5000000" className="flex-1 bg-transparent text-foreground font-semibold focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Interest Rate (% p.a.)</label>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-muted">
                      <input type="number" defaultValue="8.5" step="0.05" className="flex-1 bg-transparent text-foreground font-semibold focus:outline-none" />
                      <span className="text-foreground font-semibold">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Tenure (Years)</label>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-muted">
                      <input type="number" defaultValue="20" className="flex-1 bg-transparent text-foreground font-semibold focus:outline-none" />
                      <span className="text-foreground font-semibold">yrs</span>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-1">Estimated Monthly EMI</p>
                    <p className="font-serif text-3xl font-bold text-primary">₹43,391</p>
                    <p className="text-xs text-muted-foreground mt-1">Total interest payable: ₹54.1 Lakhs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 md:px-6 bg-muted">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">How Nestify Home Loans Works</h2>
              <p className="text-muted-foreground">From application to disbursement in 7 days.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <div key={step.title} className="bg-white rounded-2xl p-6 border border-border relative">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <AppIcon name={step.icon as any} size={20} className="text-primary" />
                  </div>
                  <span className="absolute top-4 right-4 text-4xl font-serif font-bold text-muted/80 leading-none">{i + 1}</span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lender Comparison */}
        <section id="compare" className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-3">Compare Top Lenders</h2>
              <p className="text-muted-foreground">Rates as of April 2026. Subject to change.</p>
            </div>
            <div className="bg-white rounded-3xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted border-b border-border">
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Lender</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Interest Rate</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Max Loan</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Max Tenure</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Processing Fee</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {lenders.map((lender) => (
                      <tr key={lender.name} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-foreground">{lender.name}</span>
                            {lender.badge && (
                              <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">{lender.badge}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-secondary">{lender.rate}</td>
                        <td className="px-6 py-4 text-foreground/80">{lender.maxLoan}</td>
                        <td className="px-6 py-4 text-foreground/80">{lender.tenure}</td>
                        <td className="px-6 py-4 text-foreground/80">{lender.processing}</td>
                        <td className="px-6 py-4">
                          <Link href="/contact" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap">
                            Apply Now →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-6 bg-muted">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Home Loan FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3">
                    <AppIcon name="QuestionMarkCircleIcon" size={18} className="text-primary shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 cta-gradient">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Ready to apply for a home loan?</h2>
            <p className="text-white/70 mb-8">Our loan advisors will call you within 30 minutes.</p>
            <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Talk to a Loan Advisor
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
