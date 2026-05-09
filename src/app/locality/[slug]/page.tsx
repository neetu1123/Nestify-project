import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AppImage from '../../../components/ui/AppImage';
import AppIcon from '../../../components/ui/AppIcon';

const priceData = [
{ bhk: '1 BHK', avgPrice: '₹42–58 L', pricePerSqft: '₹5,800–₹7,200', rentRange: '₹12,000–₹18,000/mo' },
{ bhk: '2 BHK', avgPrice: '₹72–1.1 Cr', pricePerSqft: '₹6,200–₹8,500', rentRange: '₹20,000–₹32,000/mo' },
{ bhk: '3 BHK', avgPrice: '₹1.2–1.9 Cr', pricePerSqft: '₹7,000–₹9,500', rentRange: '₹35,000–₹55,000/mo' },
{ bhk: '4 BHK+', avgPrice: '₹2.2 Cr+', pricePerSqft: '₹8,500–₹12,000', rentRange: '₹60,000+/mo' }];


const amenities = [
{ icon: 'AcademicCapIcon', label: 'Schools', count: '12 within 3 km' },
{ icon: 'BuildingOffice2Icon', label: 'Hospitals', count: '8 within 5 km' },
{ icon: 'ShoppingBagIcon', label: 'Malls', count: '3 within 4 km' },
{ icon: 'TrainIcon', label: 'Metro Station', count: '1.2 km away' },
{ icon: 'BuildingLibraryIcon', label: 'Banks / ATMs', count: '20+ in locality' },
{ icon: 'GlobeAltIcon', label: 'IT Parks', count: '2 within 6 km' }];


const nearbyProjects = [
{
  name: 'DLF The Crest',
  type: 'Luxury Apartments',
  price: 'From ₹3.8 Cr',
  status: 'Ready to Move',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9c399f7-1772867580385.png",
  alt: 'DLF The Crest luxury apartment tower in Gurgaon Sector 54'
},
{
  name: 'Emaar Palm Heights',
  type: '3 & 4 BHK Apartments',
  price: 'From ₹1.9 Cr',
  status: 'Under Construction',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2fde49b-1777314347999.png",
  alt: 'Emaar Palm Heights residential towers under construction in Gurgaon'
},
{
  name: 'Sobha City',
  type: '2 & 3 BHK Apartments',
  price: 'From ₹1.1 Cr',
  status: 'Ready to Move',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_138994451-1767784386311.png",
  alt: 'Sobha City residential complex with landscaped gardens in Gurgaon'
}];


export default function LocalityDetailPage({ params }: {params: {slug: string;};}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <Link href="/property-listings" className="hover:text-primary transition-colors">Properties</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <span className="text-foreground">Sector 54, Gurgaon</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative h-72 md:h-96">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1590a7f84-1765102349483.png"
            alt="Aerial view of Sector 54 Gurgaon with residential towers and wide roads"
            fill
            className="object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="font-serif text-3xl md:text-5xl text-white mb-2">Sector 54, Gurgaon</h1>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="flex items-center gap-1.5">
                      <AppIcon name="MapPinIcon" size={14} />
                      Golf Course Road, Gurgaon
                    </span>
                    <span>·</span>
                    <span>342 active listings</span>
                  </div>
                </div>
                <div className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-right">
                  <p className="text-white/70 text-xs mb-1">Avg. price</p>
                  <p className="font-serif text-2xl text-white font-bold">₹8,200/sqft</p>
                  <p className="text-green-400 text-xs font-semibold">↑ 12% in 12 months</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-4">About Sector 54</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sector 54 is one of Gurgaon&apos;s most sought-after residential localities, situated along the prestigious Golf Course Road. Known for its upscale residential complexes, excellent connectivity, and proximity to major IT hubs, it attracts both end-users and investors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The area is well-served by the Rapid Metro (Sector 54 Chowk station) and is minutes away from Cyber City, MG Road, and the Delhi-Gurgaon Expressway. Premium projects by DLF, Emaar, and Sobha dominate the landscape.
                </p>
              </div>

              {/* Price Table */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-5">Property Prices in Sector 54</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Type</th>
                        <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Avg. Price</th>
                        <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Per Sqft</th>
                        <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Rent Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {priceData.map((row) =>
                      <tr key={row.bhk} className="hover:bg-muted/50 transition-colors">
                          <td className="py-3.5 font-semibold text-foreground">{row.bhk}</td>
                          <td className="py-3.5 text-foreground/80">{row.avgPrice}</td>
                          <td className="py-3.5 text-foreground/80">{row.pricePerSqft}</td>
                          <td className="py-3.5 text-foreground/80">{row.rentRange}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">* Prices as of April 2026. Based on 1,200+ transactions in the last 12 months.</p>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-5">Nearby Amenities</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {amenities.map((amenity) =>
                  <div key={amenity.label} className="flex items-center gap-3 bg-muted rounded-xl p-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <AppIcon name={amenity.icon as any} size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{amenity.label}</p>
                        <p className="text-xs text-muted-foreground">{amenity.count}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Nearby Projects */}
              <div className="bg-white rounded-2xl border border-border p-7">
                <h2 className="font-serif text-xl text-foreground mb-5">Featured Projects in Sector 54</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {nearbyProjects.map((project) =>
                  <Link key={project.name} href="/property-listings" className="group block rounded-xl overflow-hidden border border-border card-hover">
                      <div className="relative aspect-[4/3]">
                        <AppImage src={project.image} alt={project.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full ${project.status === 'Ready to Move' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-foreground text-sm mb-0.5 group-hover:text-primary transition-colors">{project.name}</p>
                        <p className="text-xs text-muted-foreground mb-1">{project.type}</p>
                        <p className="font-bold text-primary text-sm">{project.price}</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Locality Score</h3>
                {[
                { label: 'Connectivity', score: 9.2 },
                { label: 'Livability', score: 8.8 },
                { label: 'Safety', score: 8.5 },
                { label: 'Infrastructure', score: 9.0 },
                { label: 'Investment Potential', score: 8.7 }].
                map((item) =>
                <div key={item.label} className="mb-3">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/80">{item.label}</span>
                      <span className="font-bold text-foreground">{item.score}/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.score * 10}%` }} />

                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-foreground rounded-2xl p-6 text-center">
                <h3 className="font-serif text-lg text-white mb-2">Looking to buy in Sector 54?</h3>
                <p className="text-white/60 text-sm mb-5">Get matched with verified listings in your budget.</p>
                <Link href="/property-listings" className="block bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm mb-3">
                  View All Listings
                </Link>
                <Link href="/agents" className="block bg-white/10 text-white border border-white/20 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                  Find a Local Agent
                </Link>
              </div>

              {/* Price Trend */}
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Price Trend (12 months)</h3>
                <div className="space-y-2">
                  {[
                  { month: 'Apr 2025', price: '₹7,320/sqft' },
                  { month: 'Jul 2025', price: '₹7,580/sqft' },
                  { month: 'Oct 2025', price: '₹7,890/sqft' },
                  { month: 'Jan 2026', price: '₹8,050/sqft' },
                  { month: 'Apr 2026', price: '₹8,200/sqft' }].
                  map((item) =>
                  <div key={item.month} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground">{item.month}</span>
                      <span className="text-sm font-semibold text-foreground">{item.price}</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-secondary font-semibold mt-3">↑ 12% appreciation in 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>);

}