import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListingsFilters from './components/ListingsFilters';
import ListingsGrid from './components/ListingsGrid';
import ListingsSortBar from './components/ListingsSortBar';

export default function PropertyListingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Search Banner */}
        <div className="bg-foreground py-8 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-2xl md:text-3xl text-white mb-1">
              Properties for Sale in Delhi NCR
            </h1>
            <p className="text-white/60 text-sm">2,847 verified listings · Updated today</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-72 shrink-0">
              <ListingsFilters />
            </aside>
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <ListingsSortBar />
              <ListingsGrid />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}