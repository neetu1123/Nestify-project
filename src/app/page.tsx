import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../app/components/HeroSection';
import PayAsYouGoSection from '../app/components/PayAsYouGoSection';
import ComparisonSection from '../app/components/ComparisonSection';
import FeaturedProperties from '../app/components/FeaturedProperties';
import FeaturedLocalities from '../app/components/FeaturedLocalities';
import TrustSection from '../app/components/TrustSection';
import ServicesSection from '../app/components/ServicesSection';
import InsightsSection from '../app/components/InsightsSection';
import TestimonialsSection from '../app/components/TestimonialsSection';
import FAQSection from '../app/components/FAQSection';
import FinalCTA from '../app/components/FinalCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PayAsYouGoSection />
      <ComparisonSection />
      <FeaturedProperties />
      <FeaturedLocalities />
      <TrustSection />
      <ServicesSection />
      <InsightsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}