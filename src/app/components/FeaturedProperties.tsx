'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

const properties = [
{
  id: 1,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_156d300c4-1772816685359.png",
  alt: 'Modern 3BHK apartment with open living area, white walls, large windows, bright natural light',
  price: '₹1.2 Cr',
  location: 'Sector 62, Noida',
  bhk: '3 BHK',
  size: '1,450 sq.ft',
  tags: ['Verified', 'Ready to Move'],
  type: 'Apartment'
},
{
  id: 2,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_129b890d3-1772550524417.png",
  alt: 'Luxury villa exterior with manicured garden, cream facade, blue sky, affluent residential area',
  price: '₹3.8 Cr',
  location: 'DLF Phase 2, Gurgaon',
  bhk: '4 BHK',
  size: '3,200 sq.ft',
  tags: ['Verified', 'Owner'],
  type: 'Villa'
},
{
  id: 3,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_107c9c3c5-1775471399468.png",
  alt: 'Contemporary 2BHK flat interior with modern kitchen, wood flooring, urban city view from balcony',
  price: '₹65 L',
  location: 'Andheri West, Mumbai',
  bhk: '2 BHK',
  size: '920 sq.ft',
  tags: ['Owner', 'New Launch'],
  type: 'Apartment'
},
{
  id: 4,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ab4209b-1777314348523.png",
  alt: 'Spacious independent house with terrace garden, warm evening light, quiet residential street',
  price: '₹2.1 Cr',
  location: 'Indiranagar, Bangalore',
  bhk: '3 BHK',
  size: '2,100 sq.ft',
  tags: ['Verified'],
  type: 'Independent House'
},
{
  id: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec7b2455-1774285321236.png",
  alt: 'Elegant 1BHK studio flat with minimalist decor, compact layout, city skyline visible from window',
  price: '₹38 L',
  location: 'Dwarka, Delhi',
  bhk: '1 BHK',
  size: '580 sq.ft',
  tags: ['Owner', 'Ready to Move'],
  type: 'Apartment'
},
{
  id: 6,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14746311f-1774548190493.png",
  alt: 'Premium plot in gated community, wide road access, lush greenery surrounding, sunny clear day',
  price: '₹85 L',
  location: 'Whitefield, Bangalore',
  bhk: 'Plot',
  size: '2,400 sq.ft',
  tags: ['Verified', 'New Launch'],
  type: 'Plot'
}];

const tagStyles: Record<string, string> = {
  Verified: 'tag-verified',
  Owner: 'tag-owner',
  'Ready to Move': 'bg-blue-50 text-blue-700',
  'New Launch': 'tag-new'
};

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.remove('section-hidden');
              headingRef.current.classList.add('section-reveal');
            }
            entry.target.querySelectorAll('.prop-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 150 + i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 section-hidden">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Properties</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Featured listings
            </h2>
          </div>
          <Link
            href="/property-listings"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0">
            View all properties
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop) =>
          <div
            key={prop.id}
            className="prop-card section-hidden card-hover bg-white border border-border rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                src={prop.image}
                alt={prop.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {prop.tags.map((tag) =>
                <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[tag] || 'bg-gray-100 text-gray-700'}`}>
                      {tag}
                    </span>
                )}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-foreground/70">
                  {prop.type}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-serif text-2xl font-bold text-foreground">{prop.price}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <Icon name="MapPinIcon" size={13} />
                  <span>{prop.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-foreground/60 mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="HomeIcon" size={12} />
                    {prop.bhk}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{prop.size}</span>
                </div>
                <Link
                href="/property-detail"
                className="block w-full text-center py-2.5 text-sm font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200">
                  View Details
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
