import React from 'react';
import Link from 'next/link';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

const listings = [
{
  id: 1,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8c714e6-1772145281110.png",
  alt: 'Modern apartment living room bright white walls open plan layout natural light',
  price: '₹1.2 Cr',
  location: 'Sector 62, Noida',
  bhk: '3 BHK',
  size: '1,450 sq.ft',
  floor: '8th of 14',
  tags: ['Verified', 'Ready to Move'],
  type: 'Apartment',
  postedDays: 2
},
{
  id: 2,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13dc422ac-1772210226514.png",
  alt: 'Luxury villa cream facade garden gated community premium residential',
  price: '₹3.8 Cr',
  location: 'DLF Phase 2, Gurgaon',
  bhk: '4 BHK',
  size: '3,200 sq.ft',
  floor: 'G+2 Independent',
  tags: ['Verified', 'Owner'],
  type: 'Villa',
  postedDays: 1
},
{
  id: 3,
  image: "https://images.unsplash.com/photo-1721614659333-325573a62ecc",
  alt: 'Contemporary 2BHK flat modern kitchen wood flooring urban city view balcony',
  price: '₹65 L',
  location: 'Andheri West, Mumbai',
  bhk: '2 BHK',
  size: '920 sq.ft',
  floor: '4th of 12',
  tags: ['Owner', 'New Launch'],
  type: 'Apartment',
  postedDays: 5
},
{
  id: 4,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6d7f4c7-1777314347992.png",
  alt: 'Spacious independent house terrace garden warm evening light residential street',
  price: '₹2.1 Cr',
  location: 'Indiranagar, Bangalore',
  bhk: '3 BHK',
  size: '2,100 sq.ft',
  floor: 'G+1 Independent',
  tags: ['Verified'],
  type: 'Independent House',
  postedDays: 3
},
{
  id: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_107c9c3c5-1775471399468.png",
  alt: 'Elegant 1BHK studio flat minimalist decor compact layout city skyline window',
  price: '₹38 L',
  location: 'Dwarka, Delhi',
  bhk: '1 BHK',
  size: '580 sq.ft',
  floor: '2nd of 8',
  tags: ['Owner', 'Ready to Move'],
  type: 'Apartment',
  postedDays: 7
},
{
  id: 6,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14746311f-1774548190493.png",
  alt: 'Premium plot gated community wide road access lush greenery sunny clear day',
  price: '₹85 L',
  location: 'Whitefield, Bangalore',
  bhk: 'Plot',
  size: '2,400 sq.ft',
  floor: 'Corner Plot',
  tags: ['Verified', 'New Launch'],
  type: 'Plot',
  postedDays: 0
},
{
  id: 7,
  image: "https://images.unsplash.com/photo-1525769964671-4ebf7e5c0c7e",
  alt: 'Powai Mumbai lakeside upscale residential towers blue lake calm morning view',
  price: '₹1.6 Cr',
  location: 'Powai, Mumbai',
  bhk: '3 BHK',
  size: '1,650 sq.ft',
  floor: '12th of 24',
  tags: ['Verified', 'Ready to Move'],
  type: 'Apartment',
  postedDays: 4
},
{
  id: 8,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5ae775e-1768635216498.png",
  alt: 'Whitefield Bangalore tech park adjacent wide road residential modern apartments',
  price: '₹72 L',
  location: 'Whitefield, Bangalore',
  bhk: '2 BHK',
  size: '1,080 sq.ft',
  floor: '6th of 18',
  tags: ['Owner'],
  type: 'Apartment',
  postedDays: 8
}];


const tagStyles: Record<string, string> = {
  Verified: 'tag-verified',
  Owner: 'tag-owner',
  'Ready to Move': 'bg-blue-50 text-blue-700',
  'New Launch': 'tag-new'
};

export default function ListingsGrid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {listings.map((prop) =>
        <div key={prop.id} className="card-hover bg-white border border-border rounded-2xl overflow-hidden group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <AppImage
              src={prop.image}
              alt={prop.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {prop.tags.map((tag) =>
              <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[tag] || 'bg-gray-100 text-gray-700'}`}>
                    {tag}
                  </span>
              )}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full">
                {prop.postedDays === 0 ? 'Today' : `${prop.postedDays}d ago`}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-1.5">
                <p className="font-serif text-xl font-bold text-foreground">{prop.price}</p>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-lg">{prop.type}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                <Icon name="MapPinIcon" size={12} />
                <span>{prop.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/60 mb-4">
                <span>{prop.bhk}</span>
                <span>·</span>
                <span>{prop.size}</span>
                <span>·</span>
                <span>{prop.floor}</span>
              </div>
              <Link
              href="/property-detail"
              className="block w-full text-center py-2.5 text-sm font-semibold bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200">

                View Details
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <Icon name="ChevronLeftIcon" size={16} />
        </button>
        {[1, 2, 3, '...', 48].map((page, i) =>
        <button
          key={i}
          className={`w-10 h-10 rounded-xl border text-sm font-medium transition-colors ${
          page === 1 ? 'bg-primary text-white border-primary' : 'border-border hover:bg-muted'}`
          }>

            {page}
          </button>
        )}
        <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <Icon name="ChevronRightIcon" size={16} />
        </button>
      </div>
    </>);

}