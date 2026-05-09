'use client';

import React, { useState } from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

export default function PropertyContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('I am interested in this property. Please contact me.');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="sticky top-20 space-y-4">
      {/* Owner Card */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1e7bca6b4-1763295393217.png"
              alt="Indian man property owner professional headshot confident smile"
              width={48}
              height={48}
              className="w-full h-full object-cover" />

          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm">Rajesh Agarwal</p>
            <p className="text-xs text-muted-foreground">Property Owner</p>
          </div>
          <span className="tag-verified text-xs font-semibold px-2.5 py-1 rounded-full">Verified</span>
        </div>

        {submitted ?
        <div className="text-center py-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="CheckCircleIcon" size={24} className="text-secondary" />
            </div>
            <p className="font-semibold text-foreground mb-1">Request Sent!</p>
            <p className="text-sm text-muted-foreground">The owner will contact you within 2 hours.</p>
          </div> :

        <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Your Name</label>
              <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Amit Kumar"
              required
              className="w-full px-3 py-2.5 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />

            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Phone Number</label>
              <div className="flex">
                <span className="px-3 py-2.5 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground">+91</span>
                <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98765 43210"
                required
                className="flex-1 px-3 py-2.5 text-sm border border-border rounded-r-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />

              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Message</label>
              <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full px-3 py-2.5 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />

            </div>
            <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-sm">

              Contact Owner
            </button>
            <p className="text-xs text-center text-muted-foreground">
              <Icon name="ShieldCheckIcon" size={12} className="inline mr-1 text-secondary" />
              Your contact details are safe with us
            </p>
          </form>
        }
      </div>

      {/* Pay-as-you-go note */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
        <div className="flex items-start gap-2.5">
          <Icon name="InformationCircleIcon" size={16} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">Pay-As-You-Go Platform</p>
            <p className="text-xs text-foreground/70 leading-relaxed">
              The owner listed this property for free. They only pay when you express genuine interest. No brokerage charged to you.
            </p>
          </div>
        </div>
      </div>

      {/* Price Insights */}
      <div className="bg-white rounded-2xl border border-border p-5">
        <h3 className="font-semibold text-foreground text-sm mb-3">Price insights</h3>
        <div className="space-y-2">
          {[
          { label: 'This property', value: '₹8,276/sq.ft', highlight: true },
          { label: 'Area average', value: '₹9,100/sq.ft', highlight: false },
          { label: 'City average', value: '₹8,800/sq.ft', highlight: false }].
          map((item) =>
          <div key={item.label} className={`flex justify-between items-center py-2 px-3 rounded-lg ${item.highlight ? 'bg-green-50' : ''}`}>
              <span className="text-xs text-foreground/70">{item.label}</span>
              <span className={`text-xs font-semibold ${item.highlight ? 'text-secondary' : 'text-foreground'}`}>{item.value}</span>
            </div>
          )}
        </div>
        <p className="text-xs text-secondary font-medium mt-2 flex items-center gap-1">
          <Icon name="ArrowTrendingDownIcon" size={12} />
          4.7% below area average — good deal
        </p>
      </div>
    </div>);

}