'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppIcon from '../../components/ui/AppIcon';

const offices = [
  {
    city: 'Gurgaon (HQ)',
    address: '4th Floor, Tower B, DLF Cyber City, Sector 24, Gurgaon, Haryana 122002',
    phone: '+91 124 456 7890',
    email: 'hello@nestify.in',
  },
  {
    city: 'Mumbai',
    address: 'Unit 12, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051',
    phone: '+91 22 456 7890',
    email: 'mumbai@nestify.in',
  },
  {
    city: 'Bangalore',
    address: '3rd Floor, Prestige Tech Park, Outer Ring Road, Bangalore, Karnataka 560103',
    phone: '+91 80 456 7890',
    email: 'bangalore@nestify.in',
  },
];

const supportChannels = [
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Live Chat',
    desc: 'Chat with our support team in real time.',
    action: 'Start Chat',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'PhoneIcon',
    title: 'Call Us',
    desc: 'Mon–Sat, 9 AM – 7 PM IST',
    action: '1800-123-4567 (Toll Free)',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: 'EnvelopeIcon',
    title: 'Email Support',
    desc: 'We respond within 4 business hours.',
    action: 'support@nestify.in',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Get in Touch</h1>
            <p className="text-white/70 text-lg">Have a question, feedback, or need help? We&apos;re here for you.</p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-12 px-4 md:px-6 bg-white border-b border-border">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {supportChannels.map((ch) => (
              <div key={ch.title} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-background">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${ch.color}`}>
                  <AppIcon name={ch.icon as any} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{ch.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{ch.desc}</p>
                  <p className="text-sm font-semibold text-primary">{ch.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form + Offices */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">Fill in the form and our team will get back to you within 4 hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <AppIcon name="CheckCircleIcon" size={28} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">We&apos;ll get back to you at {form.email} within 4 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="listing">Help with Listing</option>
                      <option value="leads">Lead Quality Issue</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your query in detail..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <AppIcon name="PaperAirplaneIcon" size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-2">Our Offices</h2>
              <p className="text-muted-foreground mb-8">Visit us at any of our offices across India.</p>
              <div className="space-y-5">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AppIcon name="MapPinIcon" size={16} className="text-primary" />
                      {office.city}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{office.address}</p>
                    <div className="flex flex-col gap-1.5">
                      <a href={`tel:${office.phone}`} className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                        <AppIcon name="PhoneIcon" size={13} className="text-muted-foreground" />
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                        <AppIcon name="EnvelopeIcon" size={13} className="text-muted-foreground" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-border bg-muted h-48 flex items-center justify-center">
                <div className="text-center">
                  <AppIcon name="MapIcon" size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
