import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AppImage from '../../../components/ui/AppImage';
import AppIcon from '../../../components/ui/AppIcon';

const recentListings = [
{
  title: '3 BHK Apartment in DLF Cyber City',
  price: '₹1.85 Cr',
  type: 'For Sale',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fed6f0fa-1772867579389.png",
  alt: 'Modern 3 BHK apartment interior in DLF Cyber City Gurgaon'
},
{
  title: '2 BHK in Sector 65, Gurgaon',
  price: '₹95 L',
  type: 'For Sale',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d371648c-1777314349152.png",
  alt: 'Bright 2 BHK apartment living room in Sector 65 Gurgaon'
},
{
  title: 'Villa in Sohna Road',
  price: '₹3.2 Cr',
  type: 'For Sale',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17a0d104c-1772867578924.png",
  alt: 'Luxury villa with garden on Sohna Road Gurgaon'
}];


const reviews = [
{ name: 'Rohit Agarwal', rating: 5, text: 'Arjun helped us find our dream home in Gurgaon in just 3 weeks. His knowledge of the DLF area is unmatched.' },
{ name: 'Sunita Mehta', rating: 5, text: 'Very professional and transparent. He never pushed us to buy anything outside our budget. Highly recommended.' },
{ name: 'Vikram Singh', rating: 4, text: 'Sold our flat in Sector 56 within 45 days at a great price. Arjun handled all the paperwork too.' }];


export default function AgentProfilePage({ params }: {params: {id: string;};}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <Link href="/agents" className="hover:text-primary transition-colors">Agents</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <span className="text-foreground">Arjun Kapoor</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Profile */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-border p-7 sticky top-24">
                <div className="text-center mb-6">
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden mx-auto mb-4">
                    <AppImage
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_12b864c72-1763296526835.png"
                      alt="Arjun Kapoor, verified real estate agent in Gurgaon, professional headshot"
                      fill
                      className="object-cover" />

                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h1 className="font-serif text-2xl text-foreground">Arjun Kapoor</h1>
                    <AppIcon name="ShieldCheckIcon" size={18} className="text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Luxury Residential · Gurgaon</p>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Top Agent 2025
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                  { value: '12 yrs', label: 'Experience' },
                  { value: '320', label: 'Deals' },
                  { value: '4.9★', label: 'Rating' }].
                  map((stat) =>
                  <div key={stat.label} className="text-center bg-muted rounded-xl py-3">
                      <p className="font-bold text-foreground text-sm">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <AppIcon name="MapPinIcon" size={15} className="text-muted-foreground shrink-0" />
                    <span className="text-foreground/80">Gurgaon, Haryana</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <AppIcon name="LanguageIcon" size={15} className="text-muted-foreground shrink-0" />
                    <span className="text-foreground/80">Hindi, English</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <AppIcon name="BuildingOfficeIcon" size={15} className="text-muted-foreground shrink-0" />
                    <span className="text-foreground/80">RERA Reg: HRERA-PKL-REA-2019-0234</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    <AppIcon name="PhoneIcon" size={16} />
                    Call Agent
                  </button>
                  <button className="w-full bg-secondary text-white py-3.5 rounded-xl font-semibold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2">
                    <AppIcon name="ChatBubbleLeftRightIcon" size={16} />
                    WhatsApp
                  </button>
                  <button className="w-full bg-muted text-foreground py-3.5 rounded-xl font-semibold hover:bg-border transition-colors flex items-center justify-center gap-2">
                    <AppIcon name="EnvelopeIcon" size={16} />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-4">About Arjun</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Arjun Kapoor is one of Gurgaon&apos;s most trusted real estate agents with 12 years of experience in luxury residential properties. He specialises in DLF, Golf Course Road, and Dwarka Expressway micro-markets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Having closed 320+ transactions worth over ₹850 Cr, Arjun brings deep market knowledge, strong negotiation skills, and a commitment to transparency that has earned him a 4.9-star rating from 87 verified clients.
                </p>
              </div>

              {/* Specialities */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {['DLF Cyber City', 'Golf Course Road', 'Dwarka Expressway', 'Sector 65', 'Sohna Road', 'Luxury Apartments', 'Villas', 'New Launch Projects', 'Resale Properties'].map((tag) =>
                  <span key={tag} className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground/70 font-medium">{tag}</span>
                  )}
                </div>
              </div>

              {/* Recent Listings */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-5">Active Listings (48)</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {recentListings.map((listing) =>
                  <Link key={listing.title} href="/property-listings" className="group block rounded-xl overflow-hidden border border-border">
                      <div className="relative aspect-[4/3]">
                        <AppImage src={listing.image} alt={listing.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <span className="absolute top-2 left-2 bg-white/90 text-foreground text-xs font-semibold px-2 py-1 rounded-full">{listing.type}</span>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-foreground/80 mb-1 line-clamp-1">{listing.title}</p>
                        <p className="font-bold text-primary text-sm">{listing.price}</p>
                      </div>
                    </Link>
                  )}
                </div>
                <Link href="/property-listings" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
                  View all 48 listings →
                </Link>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-serif text-xl text-foreground">Client Reviews</h2>
                  <div className="flex items-center gap-2">
                    <AppIcon name="StarIcon" size={16} className="text-accent" />
                    <span className="font-bold text-foreground">4.9</span>
                    <span className="text-sm text-muted-foreground">(87 reviews)</span>
                  </div>
                </div>
                <div className="space-y-5">
                  {reviews.map((review) =>
                  <div key={review.name} className="border-b border-border pb-5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{review.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{review.name}</p>
                          <div className="flex gap-0.5">
                            {Array.from({ length: review.rating }).map((_, i) =>
                          <AppIcon key={i} name="StarIcon" size={11} className="text-accent" />
                          )}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>);

}