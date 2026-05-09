'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Icon from '../../../components/ui/AppIcon';

const navItems = [
  { icon: 'Squares2X2Icon', label: 'Overview', href: '/user-dashboard', active: true },
  { icon: 'HomeIcon', label: 'My Listings', href: '/user-dashboard', active: false },
  { icon: 'UserGroupIcon', label: 'Leads', href: '/user-dashboard', badge: '3', active: false },
  { icon: 'CurrencyRupeeIcon', label: 'Payments', href: '/user-dashboard', active: false },
  { icon: 'ChartBarIcon', label: 'Analytics', href: '/user-dashboard', active: false },
  { icon: 'UserIcon', label: 'Profile', href: '/user-dashboard', active: false },
  { icon: 'Cog6ToothIcon', label: 'Settings', href: '/user-dashboard', active: false },
];

export default function DashboardSidebar() {
  const [active, setActive] = useState('Overview');

  return (
    <div className="bg-white rounded-2xl border border-border p-4 sticky top-20">
      {/* User info */}
      <div className="flex items-center gap-3 p-3 mb-4 border-b border-border pb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm shrink-0">
          RA
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">Rajesh Agarwal</p>
          <p className="text-xs text-muted-foreground truncate">rajesh@gmail.com</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              active === item.label
                ? 'bg-primary/10 text-primary' :'text-foreground/70 hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={item.icon as any} size={16} />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-4 pt-4 border-t border-border">
        <Link
          href="/homepage"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
        >
          <Icon name="ArrowLeftOnRectangleIcon" size={16} />
          Log Out
        </Link>
      </div>
    </div>
  );
}