'use client';

import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest First', 'Most Viewed'];

export default function ListingsSortBar() {
  const [sort, setSort] = useState('Relevance');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <p className="text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">2,847</span> properties
      </p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-muted-foreground">Sort:</label>
          <select
            value={sort}
            onChange={(e) => setSort(e?.target?.value)}
            className="text-sm border border-border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {sortOptions?.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setView('grid')}
            className={`p-2 transition-colors ${view === 'grid' ? 'bg-primary text-white' : 'bg-white text-foreground/60 hover:bg-muted'}`}
          >
            <Icon name="Squares2X2Icon" size={16} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 transition-colors ${view === 'list' ? 'bg-primary text-white' : 'bg-white text-foreground/60 hover:bg-muted'}`}
          >
            <Icon name="ListBulletIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}