import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import AppIcon from '../../components/ui/AppIcon';

const agents = [
{
  id: 'arjun-kapoor-gurgaon',
  name: 'Arjun Kapoor',
  city: 'Gurgaon',
  speciality: 'Luxury Residential',
  experience: '12 years',
  listings: 48,
  deals: 320,
  rating: 4.9,
  reviews: 87,
  languages: ['Hindi', 'English'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac12a925-1763296568790.png",
  alt: 'Arjun Kapoor, real estate agent in Gurgaon, professional headshot',
  verified: true,
  badge: 'Top Agent'
},
{
  id: 'priya-nair-mumbai',
  name: 'Priya Nair',
  city: 'Mumbai',
  speciality: 'South Mumbai Residential',
  experience: '9 years',
  listings: 35,
  deals: 210,
  rating: 4.8,
  reviews: 64,
  languages: ['Hindi', 'English', 'Marathi'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_160dae956-1763300898953.png",
  alt: 'Priya Nair, real estate agent in Mumbai, professional headshot',
  verified: true,
  badge: 'Top Agent'
},
{
  id: 'suresh-reddy-bangalore',
  name: 'Suresh Reddy',
  city: 'Bangalore',
  speciality: 'IT Corridor & Whitefield',
  experience: '15 years',
  listings: 62,
  deals: 445,
  rating: 4.9,
  reviews: 112,
  languages: ['Hindi', 'English', 'Kannada', 'Telugu'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8420092-1763295844968.png",
  alt: 'Suresh Reddy, real estate agent in Bangalore, professional headshot',
  verified: true,
  badge: 'Elite Agent'
},
{
  id: 'meera-sharma-delhi',
  name: 'Meera Sharma',
  city: 'Delhi',
  speciality: 'South Delhi & Noida',
  experience: '8 years',
  listings: 29,
  deals: 178,
  rating: 4.7,
  reviews: 53,
  languages: ['Hindi', 'English'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_160dae956-1763300898953.png",
  alt: 'Meera Sharma, real estate agent in Delhi, professional headshot',
  verified: true,
  badge: null
},
{
  id: 'rahul-mehta-pune',
  name: 'Rahul Mehta',
  city: 'Pune',
  speciality: 'Hinjewadi & Baner',
  experience: '11 years',
  listings: 41,
  deals: 267,
  rating: 4.8,
  reviews: 79,
  languages: ['Hindi', 'English', 'Marathi'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8420092-1763295844968.png",
  alt: 'Rahul Mehta, real estate agent in Pune, professional headshot',
  verified: true,
  badge: 'Top Agent'
},
{
  id: 'ananya-iyer-chennai',
  name: 'Ananya Iyer',
  city: 'Chennai',
  speciality: 'OMR & Velachery',
  experience: '7 years',
  listings: 24,
  deals: 143,
  rating: 4.7,
  reviews: 41,
  languages: ['Hindi', 'English', 'Tamil'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_160dae956-1763300898953.png",
  alt: 'Ananya Iyer, real estate agent in Chennai, professional headshot',
  verified: true,
  badge: null
}];


const cities = ['All Cities', 'Delhi', 'Gurgaon', 'Noida', 'Mumbai', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Find a Verified Agent</h1>
            <p className="text-white/70 text-lg mb-8">All agents on Nestify are background-verified, RERA-registered, and rated by real clients.</p>
            <div className="flex gap-3 max-w-lg mx-auto">
              <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                <AppIcon name="MagnifyingGlassIcon" size={18} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, city, or speciality..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm" />

              </div>
              <button className="bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* City Filter */}
        <section className="bg-white border-b border-border sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-4">
              {cities?.map((city) =>
              <button
                key={city}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                city === 'All Cities' ? 'bg-primary text-white' : 'bg-muted text-foreground/70 hover:bg-border hover:text-foreground'}`
                }>

                  {city}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Agent Grid */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">{agents?.length} verified agents found</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents?.map((agent) =>
              <Link
                key={agent?.id}
                href={`/agents/${agent?.id}`}
                className="group block bg-white rounded-2xl border border-border card-hover overflow-hidden">

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                        <AppImage src={agent?.image} alt={agent?.alt} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{agent?.name}</h3>
                          {agent?.verified &&
                        <AppIcon name="ShieldCheckIcon" size={15} className="text-secondary shrink-0" />
                        }
                        </div>
                        <p className="text-sm text-muted-foreground">{agent?.city}</p>
                        {agent?.badge &&
                      <span className="inline-block mt-1 bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                            {agent?.badge}
                          </span>
                      }
                      </div>
                    </div>

                    <p className="text-sm font-medium text-foreground mb-4">{agent?.speciality}</p>

                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="text-center bg-muted rounded-xl py-2.5">
                        <p className="font-bold text-foreground text-sm">{agent?.experience}</p>
                        <p className="text-xs text-muted-foreground">Experience</p>
                      </div>
                      <div className="text-center bg-muted rounded-xl py-2.5">
                        <p className="font-bold text-foreground text-sm">{agent?.listings}</p>
                        <p className="text-xs text-muted-foreground">Listings</p>
                      </div>
                      <div className="text-center bg-muted rounded-xl py-2.5">
                        <p className="font-bold text-foreground text-sm">{agent?.deals}</p>
                        <p className="text-xs text-muted-foreground">Deals</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <AppIcon name="StarIcon" size={14} className="text-accent" />
                        <span className="font-bold text-sm text-foreground">{agent?.rating}</span>
                        <span className="text-xs text-muted-foreground">({agent?.reviews})</span>
                      </div>
                      <div className="flex gap-1">
                        {agent?.languages?.slice(0, 2)?.map((lang) =>
                      <span key={lang} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{lang}</span>
                      )}
                        {agent?.languages?.length > 2 &&
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">+{agent?.languages?.length - 2}</span>
                      }
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-5">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl py-2.5 text-center text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      View Profile & Listings
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Become an Agent CTA */}
        <section className="py-16 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <div className="bg-foreground rounded-3xl p-10 text-center">
              <h2 className="font-serif text-3xl text-white mb-4">Are you a real estate agent?</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Join 2,000+ verified agents on Nestify. Get quality leads, build your reputation, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/post-property" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Join as Agent
                </Link>
                <Link href="/pricing" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  View Agent Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>);

}