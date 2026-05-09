'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

const insights = [
{
  category: 'Price Trends',
  title: 'Delhi NCR property prices up 14% in Q1 2026 — what it means for buyers',
  excerpt: 'Gurgaon and Noida led the surge, with ready-to-move inventory seeing the sharpest appreciation.',
  date: '22 Apr 2026',
  readTime: '5 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8e98b6d-1764845702215.png",
  alt: 'Delhi NCR skyline with modern office towers and residential buildings bright daylight aerial view'
},
{
  category: 'Locality Insights',
  title: "Why Whitefield is Bangalore's fastest growing residential corridor in 2026",
  excerpt: 'Metro connectivity, IT parks, and new-age infrastructure are driving demand in this east Bangalore hub.',
  date: '18 Apr 2026',
  readTime: '4 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14055c5f9-1777314347979.png",
  alt: 'Bangalore Whitefield wide road tree-lined avenue residential buildings sunny afternoon'
},
{
  category: 'Buying Guide',
  title: '8 documents you must check before signing any property agreement in India',
  excerpt: 'From title deed to encumbrance certificate — our legal team breaks down exactly what to verify.',
  date: '14 Apr 2026',
  readTime: '7 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_109980502-1774489824770.png",
  alt: 'Legal documents on clean desk with pen and glasses, bright airy office, professional setting'
}];

export default function InsightsSection() {
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
            entry.target.querySelectorAll('.insight-card').forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove('section-hidden');
                card.classList.add('section-reveal');
              }, 200 + i * 140);
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
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 section-hidden">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Insights</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Know before you buy
            </h2>
          </div>
          <Link href="/blog" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0">
            View all guides
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights?.map((post) =>
          <Link key={post?.title} href="/blog" className="insight-card section-hidden group block">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted">
                <AppImage
                src={post?.image}
                alt={post?.alt}
                width={600}
                height={375}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{post?.category}</span>
                <h3 className="font-serif text-xl text-foreground mt-2 mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{post?.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post?.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post?.readTime}</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}