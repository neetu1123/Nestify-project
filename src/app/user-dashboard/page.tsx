import React from 'react';
import Header from '../../components/Header';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardStats from './components/DashboardStats';
import DashboardListings from './components/DashboardListings';
import DashboardLeads from './components/DashboardLeads';

export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <DashboardSidebar />
            </aside>
            {/* Main */}
            <div className="flex-1 min-w-0 space-y-6">
              {/* Welcome */}
              <div className="bg-foreground rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="font-serif text-2xl text-white mb-1">Welcome back, Rajesh 👋</h1>
                  <p className="text-white/60 text-sm">Your listings are live. Here&apos;s your activity summary.</p>
                </div>
                <a
                  href="/post-property"
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shrink-0"
                >
                  <span>+</span> Add New Listing
                </a>
              </div>
              <DashboardStats />
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <DashboardListings />
                </div>
                <div className="xl:col-span-1">
                  <DashboardLeads />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}