import React from 'react';
import Icon from '../../../components/ui/AppIcon';

const stats = [
  {
    icon: 'HomeIcon',
    label: 'Active Listings',
    value: '3',
    change: '+1 this month',
    color: 'bg-orange-50 text-primary',
    positive: true,
  },
  {
    icon: 'UserGroupIcon',
    label: 'Leads Received',
    value: '18',
    change: '+5 this week',
    color: 'bg-blue-50 text-blue-600',
    positive: true,
  },
  {
    icon: 'EyeIcon',
    label: 'Total Views',
    value: '1,247',
    change: '+234 this week',
    color: 'bg-purple-50 text-purple-600',
    positive: true,
  },
  {
    icon: 'CurrencyRupeeIcon',
    label: 'Amount Paid',
    value: '₹2,400',
    change: '3 verified leads',
    color: 'bg-green-50 text-secondary',
    positive: true,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-2xl border border-border p-5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color} bg-opacity-20`}>
            <Icon name={stat.icon as any} size={18} className={stat.color.split(' ')[1]} />
          </div>
          <p className="font-serif text-2xl font-bold text-foreground mb-1">{stat.value}</p>
          <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
          <p className={`text-xs font-medium flex items-center gap-1 ${stat.positive ? 'text-secondary' : 'text-red-500'}`}>
            <Icon name={stat.positive ? 'ArrowTrendingUpIcon' : 'ArrowTrendingDownIcon'} size={11} />
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}