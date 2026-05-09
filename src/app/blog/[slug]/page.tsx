import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AppImage from '../../../components/ui/AppImage';
import AppIcon from '../../../components/ui/AppIcon';

const relatedPosts = [
{
  slug: 'first-home-buyer-guide-india',
  title: 'The Complete First-Home Buyer\'s Guide for India (2026)',
  category: 'Buying Guide',
  readTime: '12 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1518d054b-1773152711334.png",
  alt: 'Happy Indian couple receiving keys to their new home'
},
{
  slug: 'home-loan-interest-rates-2026',
  title: 'Home Loan Interest Rates in 2026: SBI vs HDFC vs ICICI',
  category: 'Home Loans',
  readTime: '9 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aba95354-1768570764741.png",
  alt: 'Person reviewing home loan documents and calculator'
},
{
  slug: 'rera-explained-buyers',
  title: 'RERA Explained: What Every Buyer Must Know Before Signing',
  category: 'Legal',
  readTime: '7 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6214ccf-1773075749369.png",
  alt: 'Legal documents and gavel representing RERA regulations'
}];


export default function BlogPostPage({ params }: {params: {slug: string;};}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <span className="text-foreground truncate">Delhi NCR Property Prices in 2026</span>
          </div>
        </div>

        <article className="py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                Market Trends
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                Delhi NCR Property Prices in 2026: Where Are They Headed?
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">PS</span>
                  </div>
                  <span className="font-medium text-foreground">Priya Sharma</span>
                </div>
                <span>·</span>
                <span>April 20, 2026</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <AppIcon name="ClockIcon" size={13} />
                  8 min read
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[16/7] rounded-3xl overflow-hidden mb-10">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_113d465c0-1764690175880.png"
                alt="Aerial view of Delhi NCR skyline with modern residential towers and green spaces"
                fill
                className="object-cover" />

            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              <p className="text-xl text-foreground/90 font-medium leading-relaxed">
                After a 22% surge in 2024–25, Delhi NCR real estate is showing signs of stabilisation. We analysed 18,000 transactions across 47 micro-markets to tell you exactly where to buy, what to avoid, and when to act.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">The Big Picture: What Happened in 2025</h2>
              <p>
                Delhi NCR saw its strongest price appreciation in a decade between 2023 and 2025. Driven by post-pandemic pent-up demand, infrastructure upgrades (Dwarka Expressway, RRTS, new metro lines), and a surge in NRI investment, average residential prices rose from ₹6,200/sqft to ₹7,560/sqft — a 22% jump in 18 months.
              </p>
              <p>
                But 2026 is different. Interest rates have stabilised at 8.5–9%, new supply has caught up in several micro-markets, and buyers are more discerning. The era of &quot;buy anything and it will appreciate&quot; is over. Location, builder reputation, and possession timeline now matter enormously.
              </p>

              <div className="bg-muted rounded-2xl p-6 my-8 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AppIcon name="ChartBarIcon" size={18} className="text-primary" />
                  Key Data Points (Q1 2026)
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                  { label: 'Average price (NCR)', value: '₹7,560/sqft', change: '+4.2% YoY' },
                  { label: 'Unsold inventory', value: '1.8L units', change: '-12% YoY' },
                  { label: 'New launches', value: '28,400 units', change: '+8% YoY' }].
                  map((stat) =>
                  <div key={stat.label} className="bg-white rounded-xl p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-secondary font-medium">{stat.change}</p>
                    </div>
                  )}
                </div>
              </div>

              <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">Micro-Market Breakdown: Where to Buy</h2>
              <p>
                Not all of NCR is equal. Here&apos;s our analysis of the top micro-markets:
              </p>

              <div className="space-y-4 my-6">
                {[
                { area: 'Dwarka Expressway, Gurgaon', rating: '⭐⭐⭐⭐⭐', verdict: 'Strong Buy', price: '₹8,200–₹12,500/sqft', reason: 'Metro connectivity, new commercial hubs, and limited supply make this the best bet for 3–5 year appreciation.' },
                { area: 'Noida Sector 150', rating: '⭐⭐⭐⭐', verdict: 'Buy', price: '₹5,800–₹7,200/sqft', reason: 'Sports City infrastructure, Jewar Airport proximity, and affordable pricing make it attractive for end-users.' },
                { area: 'Greater Noida West', rating: '⭐⭐⭐', verdict: 'Hold / Selective Buy', price: '₹4,200–₹5,800/sqft', reason: 'Oversupply concerns remain. Stick to RERA-registered, near-possession projects only.' },
                { area: 'South Delhi (Vasant Kunj, Saket)', rating: '⭐⭐⭐⭐', verdict: 'Hold', price: '₹18,000–₹28,000/sqft', reason: 'Premium pricing leaves little room for appreciation. Good for end-use, not investment.' }].
                map((area) =>
                <div key={area.area} className="bg-white rounded-xl p-5 border border-border">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-foreground">{area.area}</h4>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${area.verdict === 'Strong Buy' ? 'bg-green-100 text-green-700' : area.verdict === 'Buy' ? 'bg-blue-100 text-blue-700' : area.verdict === 'Hold' ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'}`}>
                        {area.verdict}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{area.price}</p>
                    <p className="text-sm text-muted-foreground">{area.reason}</p>
                  </div>
                )}
              </div>

              <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">Our Outlook for 2026–27</h2>
              <p>
                We expect NCR prices to appreciate 6–9% in 2026, with outperformance in well-connected corridors (Dwarka Expressway, Noida Expressway) and underperformance in oversupplied micro-markets (Greater Noida West, Bhiwadi).
              </p>
              <p>
                The key risk: if RBI raises rates by 50+ basis points, affordability will take a hit and demand could soften. Watch the June 2026 MPC meeting closely.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8">
                <h3 className="font-semibold text-foreground mb-2">Bottom Line for Buyers</h3>
                <p className="text-foreground/80">
                  If you&apos;re buying for end-use and can hold for 5+ years, 2026 is a reasonable time to buy in well-connected NCR corridors. If you&apos;re buying purely for investment, be selective — the easy money has been made. Focus on possession-ready or near-possession projects with strong builder track records.
                </p>
              </div>
            </div>

            {/* Author */}
            <div className="mt-12 pt-8 border-t border-border flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary text-lg">PS</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Priya Sharma</p>
                <p className="text-sm text-primary mb-2">Co-founder & CPO, Nestify</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  IIT Delhi alumna with 10+ years in Indian PropTech. Priya leads product strategy at Nestify and writes about market trends, policy changes, and buyer behaviour.
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Share this article:</span>
              {['Twitter / X', 'LinkedIn', 'WhatsApp'].map((platform) =>
              <button key={platform} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground/70 hover:bg-border transition-colors">
                  {platform}
                </button>
              )}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 px-4 md:px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((post) =>
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-border card-hover">
                  <div className="relative aspect-[16/10]">
                    <AppImage src={post.image} alt={post.alt} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <h3 className="font-semibold text-foreground mt-2 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>);

}