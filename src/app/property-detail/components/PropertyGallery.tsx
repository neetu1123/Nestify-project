'use client';

import React, { useState } from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

const images = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7e03430-1772751062559.png",
  alt: 'Modern 3BHK apartment living room open plan bright white walls large windows'
},
{
  src: "https://images.unsplash.com/photo-1613545564267-b80e188a1541",
  alt: 'Contemporary kitchen with white cabinets marble countertop stainless appliances'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14b7848a4-1767976373764.png",
  alt: 'Master bedroom with large bed wooden flooring natural light balcony view'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_15b3feec3-1773164689013.png",
  alt: 'Modern bathroom white tiles glass shower clean minimal design'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_16a8779f1-1766843806777.png",
  alt: 'Apartment balcony with city view evening light comfortable seating outdoor'
}];


export default function PropertyGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-2xl overflow-hidden bg-muted">
      {/* Main image */}
      <div className="relative aspect-[16/9]">
        <AppImage
          src={images?.[active]?.src}
          alt={images?.[active]?.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="tag-verified text-xs font-semibold px-3 py-1.5 rounded-full">Verified</span>
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full">Ready to Move</span>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
          {active + 1} / {images?.length}
        </div>
        <button
          onClick={() => setActive((prev) => (prev - 1 + images?.length) % images?.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md">

          <Icon name="ChevronLeftIcon" size={16} />
        </button>
        <button
          onClick={() => setActive((prev) => (prev + 1) % images?.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md">

          <Icon name="ChevronRightIcon" size={16} />
        </button>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 p-3 bg-white">
        {images?.map((img, i) =>
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === active ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}>

            <AppImage src={img?.src} alt={img?.alt} fill sizes="64px" className="object-cover" />
          </button>
        )}
      </div>
    </div>);

}