'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

const testimonials = [
{
  name: 'Priya Sharma',
  role: 'Sold her 2BHK in Noida',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19205d2aa-1763296356182.png",
  avatarAlt: 'Indian woman professional headshot warm smile office background',
  quote: 'I listed on two other portals and paid ₹15,000 upfront — zero calls for 3 months. On Nestify, I listed for free and got 4 genuine enquiries in the first week. Sold in 40 days.',
  rating: 5,
  city: 'Noida, UP'
},
{
  name: 'Arun Mehta',
  role: 'Bought a 3BHK in Bangalore',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b02b7bf9-1763301533769.png",
  avatarAlt: 'Indian man professional headshot confident smile neutral background',
  quote: 'The verified listings filter is a game-changer. Every property I visited was exactly as described. No fake photos, no bait-and-switch. Bought my dream home without any brokerage.',
  rating: 5,
  city: 'Bangalore, KA'
},
{
  name: 'Sunita Reddy',
  role: 'Renting in Hyderabad',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecb4aca8-1763296537332.png",
  avatarAlt: 'South Indian woman smiling headshot natural light casual professional',
  quote: 'As a single working woman, I was tired of brokers charging 2 months rent. Nestify had direct owner listings in my budget. Found a great 2BHK in 5 days, paid zero brokerage.',
  rating: 5,
  city: 'Hyderabad, TS'
}];

export default function TestimonialsSection() {
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
            entry.target.querySelectorAll('.testimonial-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 200 + i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-14 section-hidden">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Real stories, real results
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Over 50,000 Indians have bought, sold, and rented through Nestify without paying a rupee upfront.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.map((t) =>
          <div key={t?.name} className="testimonial-card section-hidden bg-white rounded-2xl p-6 border border-border hover:shadow-md transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t?.rating })?.map((_, i) =>
              <Icon key={i} name="StarIcon" size={16} className="text-amber-400" variant="solid" />
              )}
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm mb-6 italic">
                &ldquo;{t?.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <AppImage
                  src={t?.avatar}
                  alt={t?.avatarAlt}
                  width={44}
                  height={44}
                  className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t?.name}</p>
                  <p className="text-xs text-muted-foreground">{t?.role} · {t?.city}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}