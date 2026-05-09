import React from 'react';
import Icon from '../../../components/ui/AppIcon';

const amenities = [
  { icon: 'WifiIcon', label: 'Wi-Fi Ready' },
  { icon: 'FireIcon', label: 'Modular Kitchen' },
  { icon: 'TruckIcon', label: 'Covered Parking' },
  { icon: 'ShieldCheckIcon', label: '24/7 Security' },
  { icon: 'BoltIcon', label: 'Power Backup' },
  { icon: 'SparklesIcon', label: 'Swimming Pool' },
  { icon: 'HeartIcon', label: 'Gym & Fitness' },
  { icon: 'TreeDeciduousIcon', label: 'Landscaped Garden' },
];

export default function PropertyInfo() {
  return (
    <div className="space-y-6">
      {/* Title + Price */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
              3 BHK Apartment in Sector 62, Noida
            </h1>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Icon name="MapPinIcon" size={14} />
              <span>Sector 62, Noida, Uttar Pradesh 201309</span>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-serif text-3xl font-bold text-foreground">₹1.2 Cr</div>
            <div className="text-sm text-muted-foreground">₹8,276 / sq.ft</div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
          {[
            { icon: 'HomeIcon', label: 'Type', value: '3 BHK Apartment' },
            { icon: 'ArrowsPointingOutIcon', label: 'Area', value: '1,450 sq.ft' },
            { icon: 'BuildingOfficeIcon', label: 'Floor', value: '8th of 14' },
            { icon: 'CalendarIcon', label: 'Possession', value: 'Ready to Move' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 bg-muted/40 rounded-xl">
              <Icon name={stat.icon as any} size={16} className="text-primary mx-auto mb-1.5" />
              <p className="text-xs text-muted-foreground mb-0.5">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="font-semibold text-foreground text-base mb-3">About this property</h2>
        <p className="text-sm text-foreground/70 leading-relaxed mb-3">
          This spacious 3 BHK apartment is located in one of Noida&apos;s most sought-after residential sectors. The unit offers a perfect blend of modern design and comfort, with large windows ensuring ample natural light throughout the day.
        </p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          The society is well-maintained with 24/7 security, ample parking, and a range of lifestyle amenities. Located just 5 minutes from the Sector 62 Metro Station and 10 minutes from major IT parks, this is ideal for working professionals and families alike.
        </p>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="font-semibold text-foreground text-base mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-2.5 p-3 bg-muted/30 rounded-xl">
              <Icon name={a.icon as any} size={15} className="text-secondary shrink-0" />
              <span className="text-xs font-medium text-foreground/80">{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Locality */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="font-semibold text-foreground text-base mb-4">Locality highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: 'Metro Station', distance: '0.5 km', icon: 'BoltIcon' },
            { label: 'Hospital', distance: '1.2 km', icon: 'HeartIcon' },
            { label: 'School', distance: '0.8 km', icon: 'AcademicCapIcon' },
            { label: 'Mall', distance: '2.0 km', icon: 'ShoppingBagIcon' },
            { label: 'IT Park', distance: '3.5 km', icon: 'BuildingOffice2Icon' },
            { label: 'Airport', distance: '28 km', icon: 'PaperAirplaneIcon' },
          ].map((place) => (
            <div key={place.label} className="flex items-center gap-3 p-3 border border-border rounded-xl">
              <Icon name={place.icon as any} size={14} className="text-primary shrink-0" />
              <div>
                <p className="text-xs font-medium text-foreground">{place.label}</p>
                <p className="text-xs text-muted-foreground">{place.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}