import React from 'react';
import Link from 'next/link';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

const similar = [
{
  id: 1,
  image: "https://images.unsplash.com/photo-1721613883249-6242e2effbf3",
  alt: 'Modern 2BHK apartment interior wood flooring bright natural light',
  price: '₹95 L',
  location: 'Sector 61, Noida',
  bhk: '3 BHK',
  size: '1,320 sq.ft',
  tags: ['Verified']
},
{
  id: 2,
  image: "https://images.unsplash.com/photo-1619376772495-42864d65b8f2",
  alt: 'Spacious apartment balcony city view evening warm lighting',
  price: '₹1.35 Cr',
  location: 'Sector 63, Noida',
  bhk: '3 BHK',
  size: '1,550 sq.ft',
  tags: ['Verified', 'Owner']
},
{
  id: 3,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b68e827-1772213785953.png",
  alt: 'Contemporary flat living room modern furniture minimalist design',
  price: '₹1.1 Cr',
  location: 'Sector 50, Noida',
  bhk: '3 BHK',
  size: '1,400 sq.ft',
  tags: ['Ready to Move']
},
{
  id: 4,
  image: "https://images.unsplash.com/photo-1723641876143-e92eb116a51c",
  alt: 'Premium apartment open plan kitchen dining living area bright white',
  price: '₹1.45 Cr',
  location: 'Sector 78, Noida',
  bhk: '3 BHK',
  size: '1,620 sq.ft',
  tags: ['Verified', 'New Launch']
}];


const tagStyles: Record<string, string> = {
  Verified: 'tag-verified',
  Owner: 'tag-owner',
  'Ready to Move': 'bg-blue-50 text-blue-700',
  'New Launch': 'tag-new'
};

export default function SimilarProperties() {
  return (
    <section className="py-12 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Similar properties nearby</h2>
          <Link href="/property-listings" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
            View all <Icon name="ArrowRightIcon" size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {similar.map((prop) =>
          <div key={prop.id} className="card-hover bg-white border border-border rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                src={prop.image}
                alt={prop.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute top-2 left-2 flex gap-1">
                  {prop.tags.map((tag) =>
                <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagStyles[tag] || 'bg-gray-100 text-gray-700'}`}>
                      {tag}
                    </span>
                )}
                </div>
              </div>
              <div className="p-4">
                <p className="font-serif text-lg font-bold text-foreground mb-1">{prop.price}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                  <Icon name="MapPinIcon" size={11} />{prop.location}
                </p>
                <p className="text-xs text-foreground/60 mb-3">{prop.bhk} · {prop.size}</p>
                <Link href="/property-detail" className="block w-full text-center py-2 text-xs font-semibold border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                  View Details
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}