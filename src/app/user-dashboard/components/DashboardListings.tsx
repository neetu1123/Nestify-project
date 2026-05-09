'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

const listings = [
{
  id: 1,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8c714e6-1772145281110.png",
  alt: 'Modern apartment living room bright white walls',
  title: '3 BHK Apartment',
  location: 'Sector 62, Noida',
  price: '₹1.2 Cr',
  status: 'active',
  views: 342,
  leads: 6,
  daysLive: 14
},
{
  id: 2,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b4390e9-1772234089675.png",
  alt: 'Contemporary flat modern kitchen city view balcony',
  title: '2 BHK Flat',
  location: 'Indiranagar, Bangalore',
  price: '₹85 L',
  status: 'active',
  views: 218,
  leads: 4,
  daysLive: 8
},
{
  id: 3,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14746311f-1774548190493.png",
  alt: 'Premium plot gated community wide road access green surroundings',
  title: 'Plot 2400 sq.ft',
  location: 'Whitefield, Bangalore',
  price: '₹65 L',
  status: 'pending',
  views: 687,
  leads: 8,
  daysLive: 21
}];


const statusStyles: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  expired: 'bg-red-100 text-red-600'
};

export default function DashboardListings() {
  const [tab, setTab] = useState<'all' | 'active' | 'pending'>('all');

  const filtered = tab === 'all' ? listings : listings.filter((l) => l.status === tab);

  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-foreground text-base">My Listings</h2>
        <Link href="/post-property" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
          <Icon name="PlusIcon" size={12} /> Add New
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {(['all', 'active', 'pending'] as const).map((t) =>
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${tab === t ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>

            {t}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {filtered.map((listing) =>
        <div key={listing.id} className="flex items-center gap-4 p-3 border border-border rounded-xl hover:border-primary/30 transition-all group">
            <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
              <AppImage
              src={listing.image}
              alt={listing.alt}
              width={64}
              height={48}
              className="w-full h-full object-cover" />

            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-sm font-semibold text-foreground truncate">{listing.title}</p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize shrink-0 ${statusStyles[listing.status]}`}>
                  {listing.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{listing.location}</p>
              <p className="text-xs font-bold text-primary mt-0.5">{listing.price}</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Icon name="EyeIcon" size={11} />{listing.views}</span>
                <span className="flex items-center gap-1"><Icon name="UserGroupIcon" size={11} />{listing.leads} leads</span>
              </div>
              <span className="text-xs text-muted-foreground">{listing.daysLive}d live</span>
            </div>
            <Link href="/property-detail" className="shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Icon name="ArrowRightIcon" size={13} />
            </Link>
          </div>
        )}
      </div>
    </div>);

}