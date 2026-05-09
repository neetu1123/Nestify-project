'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

const localities = [
{
  name: 'Dwarka, Delhi',
  from: '₹35L',
  listings: '1,240 listings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c3831b2-1777314347052.png",
  alt: 'Dwarka Delhi residential towers bright daytime wide road clean neighbourhood'
},
{
  name: 'Sector 62, Noida',
  from: '₹55L',
  listings: '890 listings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_113c19269-1776254170838.png",
  alt: 'Noida modern apartment complex green landscaping sunny day wide angle'
},
{
  name: 'DLF Phase 2, Gurgaon',
  from: '₹1.2Cr',
  listings: '560 listings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_112c87537-1766306801102.png",
  alt: 'Gurgaon luxury residential area palm trees gated community well-maintained'
},
{
  name: 'Andheri West, Mumbai',
  from: '₹60L',
  listings: '1,100 listings',
  image: "https://images.unsplash.com/photo-1712998457372-de846897175b",
  alt: 'Mumbai residential buildings dense urban area colourful vibrant skyline'
},
{
  name: 'Indiranagar, Bangalore',
  from: '₹75L',
  listings: '720 listings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d7c9af0-1777314348006.png",
  alt: 'Bangalore Indiranagar tree-lined street cafes mixed-use development daytime'
},
{
  name: 'Baner, Pune',
  from: '₹45L',
  listings: '640 listings',
  image: "https://images.unsplash.com/photo-1680657131285-e46d81686b83",
  alt: 'Pune Baner area residential colony green surroundings modern apartments'
},
{
  name: 'Whitefield, Bangalore',
  from: '₹65L',
  listings: '850 listings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14b6ca000-1777314348338.png",
  alt: 'Whitefield Bangalore tech park adjacent residential area wide roads'
},
{
  name: 'Powai, Mumbai',
  from: '₹80L',
  listings: '430 listings',
  image: "https://images.unsplash.com/photo-1525769964671-4ebf7e5c0c7e",
  alt: 'Powai Mumbai lakeside upscale residential towers blue lake calm morning'
}];


export default function FeaturedLocalities() {
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
            entry.target.querySelectorAll('.locality-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 150 + i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 section-hidden">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Localities</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Explore by neighbourhood
            </h2>
          </div>
          <Link href="/property-listings" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0">
            View all cities
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {localities?.map((loc) =>
          <Link
            key={loc?.name}
            href="/property-listings"
            className="locality-card section-hidden group relative aspect-[3/4] rounded-2xl overflow-hidden block card-hover">
              <AppImage
              src={loc?.image}
              alt={loc?.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm leading-tight mb-1">{loc?.name}</p>
                <p className="text-white/80 text-xs">from {loc?.from}</p>
                <p className="text-white/60 text-xs mt-0.5">{loc?.listings}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}