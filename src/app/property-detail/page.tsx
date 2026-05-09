import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyGallery from './components/PropertyGallery';
import PropertyInfo from './components/PropertyInfo';
import PropertyContact from './components/PropertyContact';
import SimilarProperties from './components/SimilarProperties';

export default function PropertyDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <a href="/homepage" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/property-listings" className="hover:text-primary transition-colors">Properties</a>
            <span>/</span>
            <span className="text-foreground font-medium">3 BHK in Sector 62, Noida</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left — Gallery + Info */}
            <div className="lg:col-span-2 space-y-6">
              <PropertyGallery />
              <PropertyInfo />
            </div>
            {/* Right — Contact */}
            <div className="lg:col-span-1">
              <PropertyContact />
            </div>
          </div>
        </div>
        <SimilarProperties />
      </div>
      <Footer />
    </main>
  );
}