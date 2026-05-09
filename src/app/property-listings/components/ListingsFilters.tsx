'use client';

import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

const propertyTypes = ['All', 'Apartment', 'Independent House', 'Villa', 'Plot'];
const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const budgetRanges = ['Under ₹50L', '₹50L–₹1Cr', '₹1Cr–₹2Cr', '₹2Cr+'];
const amenities = ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Lift', 'Power Backup', 'Garden'];

export default function ListingsFilters() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBHK, setSelectedBHK] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [ownerOnly, setOwnerOnly] = useState(false);

  const toggleBHK = (b: string) =>
    setSelectedBHK((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));
  const toggleAmenity = (a: string) =>
    setSelectedAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  return (
    <div className="bg-white rounded-2xl border border-border p-5 space-y-6 sticky top-20">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-foreground text-base">Filters</h2>
        <button className="text-xs text-primary font-semibold hover:underline">Clear all</button>
      </div>

      {/* Property Type */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Property Type</p>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                selectedType === type
                  ? 'bg-primary text-white border-primary' :'border-border text-foreground/70 hover:border-primary/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* BHK */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">BHK</p>
        <div className="flex flex-wrap gap-2">
          {bhkOptions.map((b) => (
            <button
              key={b}
              onClick={() => toggleBHK(b)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                selectedBHK.includes(b)
                  ? 'bg-primary text-white border-primary' :'border-border text-foreground/70 hover:border-primary/50'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Budget</p>
        <div className="space-y-2">
          {budgetRanges.map((range) => (
            <label key={range} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="budget"
                value={range}
                checked={selectedBudget === range}
                onChange={() => setSelectedBudget(range)}
                className="accent-primary"
              />
              <span className="text-sm text-foreground/80 group-hover:text-foreground">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Quick Filters */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Quick Filters</p>
        <div className="space-y-2.5">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-foreground/80 flex items-center gap-2">
              <Icon name="ShieldCheckIcon" size={14} className="text-secondary" />
              Verified Only
            </span>
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`w-10 h-5 rounded-full transition-all duration-200 relative ${verifiedOnly ? 'bg-primary' : 'bg-border'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${verifiedOnly ? 'left-5' : 'left-0.5'}`} />
            </button>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-foreground/80 flex items-center gap-2">
              <Icon name="UserIcon" size={14} className="text-amber-600" />
              Owner Properties
            </span>
            <button
              onClick={() => setOwnerOnly(!ownerOnly)}
              className={`w-10 h-5 rounded-full transition-all duration-200 relative ${ownerOnly ? 'bg-primary' : 'bg-border'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${ownerOnly ? 'left-5' : 'left-0.5'}`} />
            </button>
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Amenities</p>
        <div className="space-y-2">
          {amenities.map((a) => (
            <label key={a} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(a)}
                onChange={() => toggleAmenity(a)}
                className="accent-primary rounded"
              />
              <span className="text-sm text-foreground/80 group-hover:text-foreground">{a}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all">
        Apply Filters
      </button>
    </div>
  );
}