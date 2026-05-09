import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import AppIcon from '../../components/ui/AppIcon';

const categories = ['All', 'Market Trends', 'Buying Guide', 'Selling Tips', 'Legal', 'Home Loans', 'Locality Insights', 'NRI Corner'];

const featuredPost = {
  slug: 'delhi-ncr-property-prices-2026',
  title: 'Delhi NCR Property Prices in 2026: Where Are They Headed?',
  excerpt: 'After a 22% surge in 2024–25, Delhi NCR real estate is showing signs of stabilisation. We analysed 18,000 transactions to tell you exactly where to buy, what to avoid, and when to act.',
  category: 'Market Trends',
  author: 'Priya Sharma',
  date: 'April 20, 2026',
  readTime: '8 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_113d465c0-1764690175880.png",
  alt: 'Aerial view of Delhi NCR skyline with modern residential towers and green spaces'
};

const posts = [
{
  slug: 'first-home-buyer-guide-india',
  title: 'The Complete First-Home Buyer\'s Guide for India (2026)',
  excerpt: 'From home loan eligibility to stamp duty, RERA checks to negotiation tactics — everything a first-time buyer needs in one place.',
  category: 'Buying Guide',
  author: 'Arjun Mehta',
  date: 'April 15, 2026',
  readTime: '12 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_121a398d2-1765266112088.png",
  alt: 'Happy Indian couple receiving keys to their new home from a real estate agent'
},
{
  slug: 'sell-property-fast-tips',
  title: '7 Proven Ways to Sell Your Property 40% Faster',
  excerpt: 'Professional photography, the right listing price, and timing your listing correctly can cut your time-on-market dramatically.',
  category: 'Selling Tips',
  author: 'Sneha Kapoor',
  date: 'April 10, 2026',
  readTime: '6 min read',
  image: "https://images.unsplash.com/photo-1653972233229-1b8c042d6d8e",
  alt: 'Modern apartment living room staged for sale with clean minimalist decor'
},
{
  slug: 'home-loan-interest-rates-2026',
  title: 'Home Loan Interest Rates in 2026: SBI vs HDFC vs ICICI',
  excerpt: 'We compared 12 lenders on rate, processing fee, prepayment penalty, and customer service. Here\'s who wins.',
  category: 'Home Loans',
  author: 'Rahul Verma',
  date: 'April 5, 2026',
  readTime: '9 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1571bbea4-1772185088461.png",
  alt: 'Person reviewing home loan documents and calculator on a desk'
},
{
  slug: 'rera-explained-buyers',
  title: 'RERA Explained: What Every Buyer Must Know Before Signing',
  excerpt: 'RERA protects you from builder delays, hidden charges, and false promises. Here\'s how to use it.',
  category: 'Legal',
  author: 'Priya Sharma',
  date: 'March 28, 2026',
  readTime: '7 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6214ccf-1773075749369.png",
  alt: 'Legal documents and gavel representing RERA real estate regulations in India'
},
{
  slug: 'gurgaon-sector-65-locality',
  title: 'Gurgaon Sector 65: Is It Still Worth Buying in 2026?',
  excerpt: 'Prices have risen 18% in 18 months. We break down connectivity, amenities, builder reputation, and future potential.',
  category: 'Locality Insights',
  author: 'Sneha Kapoor',
  date: 'March 22, 2026',
  readTime: '10 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f386d7c9-1767893320131.png",
  alt: 'Modern high-rise residential towers in Gurgaon with wide roads and landscaping'
},
{
  slug: 'nri-buying-property-india',
  title: 'NRI Guide: Buying Property in India Without Being There',
  excerpt: 'Power of attorney, FEMA compliance, repatriation rules — the complete NRI property buying checklist.',
  category: 'NRI Corner',
  author: 'Arjun Mehta',
  date: 'March 15, 2026',
  readTime: '11 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddfadd29-1768234753792.png",
  alt: 'NRI person on laptop video call reviewing Indian property documents from abroad'
}];


export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Insights & Guides</h1>
            <p className="text-white/70 text-lg">Expert analysis, market trends, and practical guides for Indian real estate.</p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white border-b border-border sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-4">
              {categories?.map((cat) =>
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                cat === 'All' ? 'bg-primary text-white' : 'bg-muted text-foreground/70 hover:bg-border hover:text-foreground'}`
                }>

                  {cat}
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Featured Post */}
            <div className="mb-14">
              <Link href={`/blog/${featuredPost?.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden border border-border card-hover">
                  <div className="relative aspect-[16/9] lg:aspect-auto">
                    <AppImage
                      src={featuredPost?.image}
                      alt={featuredPost?.alt}
                      fill
                      className="object-cover" />

                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {featuredPost?.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Featured Article</span>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                      {featuredPost?.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost?.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{featuredPost?.author}</span>
                      <span>·</span>
                      <span>{featuredPost?.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <AppIcon name="ClockIcon" size={13} />
                        {featuredPost?.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Post Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts?.map((post) =>
              <Link key={post?.slug} href={`/blog/${post?.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-border card-hover">
                  <div className="relative aspect-[16/10]">
                    <AppImage
                    src={post?.image}
                    alt={post?.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" />

                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {post?.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{post?.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground/70">{post?.author}</span>
                      <span>·</span>
                      <span>{post?.readTime}</span>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3.5 rounded-xl border border-border bg-white text-foreground font-semibold hover:bg-muted transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>);

}