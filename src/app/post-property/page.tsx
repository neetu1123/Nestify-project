import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostPropertyForm from './components/PostPropertyForm';

export default function PostPropertyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Banner */}
        <div className="bg-foreground py-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              100% Free to List
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Post your property for free
            </h1>
            <p className="text-white/60 text-base">
              List in under 5 minutes. Pay only when you get verified leads.
            </p>
          </div>
        </div>
        <PostPropertyForm />
      </div>
      <Footer />
    </main>
  );
}