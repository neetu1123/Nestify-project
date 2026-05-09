'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

const steps = ['Property Info', 'Details & Photos', 'Pricing & Contact'];

export default function PostPropertyForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    listingType: 'sell',
    propertyType: '',
    city: '',
    locality: '',
    address: '',
    bhk: '',
    area: '',
    floor: '',
    totalFloors: '',
    furnishing: '',
    facing: '',
    amenities: [] as string[],
    price: '',
    negotiable: false,
    ownerName: '',
    phone: '',
    email: '',
    description: '',
  });

  const update = (key: string, value: string | boolean | string[]) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const amenityOptions = ['Parking', 'Gym', 'Swimming Pool', 'Security', 'Lift', 'Power Backup', 'Garden', 'Club House'];
  const toggleAmenity = (a: string) => {
    const current = formData.amenities;
    update('amenities', current.includes(a) ? current.filter((x) => x !== a) : [...current, a]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-10">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((step, idx) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                idx < currentStep
                  ? 'bg-secondary border-secondary text-white'
                  : idx === currentStep
                  ? 'bg-primary border-primary text-white' :'bg-white border-border text-muted-foreground'
              }`}>
                {idx < currentStep ? <Icon name="CheckIcon" size={16} /> : idx + 1}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${idx === currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
                {step}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-3 transition-all ${idx < currentStep ? 'bg-secondary' : 'bg-border'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
        {/* Step 1: Property Info */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-1">Property information</h2>
              <p className="text-sm text-muted-foreground">Tell us the basics about your property</p>
            </div>

            {/* Listing Type */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">I want to</label>
              <div className="flex gap-3">
                {['sell', 'rent', 'pg'].map((type) => (
                  <button
                    key={type}
                    onClick={() => update('listingType', type)}
                    className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold capitalize transition-all ${
                      formData.listingType === type
                        ? 'border-primary bg-primary/5 text-primary' :'border-border text-foreground/70 hover:border-primary/40'
                    }`}
                  >
                    {type === 'pg' ? 'List PG' : type === 'sell' ? 'Sell' : 'Rent Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Property type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Apartment', 'Independent House', 'Villa', 'Plot'].map((type) => (
                  <button
                    key={type}
                    onClick={() => update('propertyType', type)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                      formData.propertyType === type
                        ? 'border-primary bg-primary/5 text-primary' :'border-border text-foreground/70 hover:border-primary/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* City + Locality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">City</label>
                <select
                  value={formData.city}
                  onChange={(e) => update('city', e.target.value)}
                  className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select city</option>
                  {['Delhi', 'Gurgaon', 'Noida', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai'].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Locality</label>
                <input
                  type="text"
                  value={formData.locality}
                  onChange={(e) => update('locality', e.target.value)}
                  placeholder="e.g. Sector 62, Noida"
                  className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Full address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => update('address', e.target.value)}
                placeholder="Building name, street, landmark"
                className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        )}

        {/* Step 2: Details & Photos */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-1">Property details</h2>
              <p className="text-sm text-muted-foreground">More details = more qualified leads</p>
            </div>

            {/* BHK + Area */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">BHK</label>
                <select
                  value={formData.bhk}
                  onChange={(e) => update('bhk', e.target.value)}
                  className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select</option>
                  {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'].map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Area (sq.ft)</label>
                <input
                  type="number"
                  value={formData.area}
                  onChange={(e) => update('area', e.target.value)}
                  placeholder="e.g. 1200"
                  className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Furnishing</label>
                <select
                  value={formData.furnishing}
                  onChange={(e) => update('furnishing', e.target.value)}
                  className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select</option>
                  {['Unfurnished', 'Semi-Furnished', 'Fully Furnished'].map((f) => <option key={f}>{f}</option>)}
                </select>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Amenities available</label>
              <div className="flex flex-wrap gap-2">
                {amenityOptions.map((a) => (
                  <button
                    key={a}
                    onClick={() => toggleAmenity(a)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      formData.amenities.includes(a)
                        ? 'border-primary bg-primary/5 text-primary' :'border-border text-foreground/70 hover:border-primary/40'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => update('description', e.target.value)}
                rows={4}
                placeholder="Describe your property — key features, nearby landmarks, why buyers should choose it..."
                className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Photos</label>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Icon name="PhotoIcon" size={32} className="text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">Drag & drop photos here</p>
                <p className="text-xs text-muted-foreground mb-3">or click to browse — JPG, PNG up to 10MB each</p>
                <button className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-medium hover:bg-border transition-colors">
                  Choose Files
                </button>
                <p className="text-xs text-muted-foreground mt-2">Properties with 5+ photos get 3x more leads</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Pricing & Contact */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-1">Pricing & your details</h2>
              <p className="text-sm text-muted-foreground">Set your price and let buyers reach you</p>
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Expected price</label>
              <div className="flex">
                <span className="px-3 py-3 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground font-semibold">₹</span>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => update('price', e.target.value)}
                  placeholder="e.g. 75,00,000"
                  className="flex-1 px-3 py-3 text-sm border border-border rounded-r-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <label className="flex items-center gap-2 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.negotiable}
                  onChange={(e) => update('negotiable', e.target.checked)}
                  className="accent-primary"
                />
                <span className="text-sm text-foreground/70">Price is negotiable</span>
              </label>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Your name</label>
                <input
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => update('ownerName', e.target.value)}
                  placeholder="Rajesh Agarwal"
                  className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Phone number</label>
                <div className="flex">
                  <span className="px-3 py-3 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground">+91</span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="98765 43210"
                    className="flex-1 px-3 py-3 text-sm border border-border rounded-r-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Email address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="rajesh@example.com"
                className="w-full px-3 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Summary */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Icon name="ShieldCheckIcon" size={18} className="text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">You&apos;re listing for FREE</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Your listing will go live after a quick verification (usually within 2 hours). You only pay when you receive a verified, qualified lead. Zero risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all ${currentStep === 0 ? 'invisible' : ''}`}
          >
            <Icon name="ArrowLeftIcon" size={14} />
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm"
            >
              Continue
              <Icon name="ArrowRightIcon" size={14} />
            </button>
          ) : (
            <Link
              href="/user-dashboard"
              className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-all shadow-sm"
            >
              <Icon name="CheckCircleIcon" size={14} />
              Submit Listing FREE
            </Link>
          )}
        </div>
      </div>

      {/* Trust note */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        {['₹0 listing fee', 'Verified in 2 hours', 'Pay per lead only', '50,000+ happy sellers'].map((note) => (
          <span key={note} className="flex items-center gap-1.5">
            <Icon name="CheckCircleIcon" size={13} className="text-secondary" />
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}