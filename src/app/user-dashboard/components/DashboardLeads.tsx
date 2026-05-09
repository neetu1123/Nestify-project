import React from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

const leads = [
{
  name: 'Ananya Sharma',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19cf8c7d8-1763296362444.png",
  avatarAlt: 'Indian woman professional headshot warm smile',
  property: '3 BHK, Sector 62',
  time: '2 hrs ago',
  status: 'new',
  phone: '+91 98765 43210'
},
{
  name: 'Karthik Nair',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7bca6b4-1763295393217.png",
  avatarAlt: 'Indian man professional headshot confident smile',
  property: '2 BHK, Indiranagar',
  time: '5 hrs ago',
  status: 'contacted',
  phone: '+91 87654 32109'
},
{
  name: 'Meera Pillai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecb4aca8-1763296537332.png",
  avatarAlt: 'South Indian woman smiling headshot natural light',
  property: 'Plot, Whitefield',
  time: '1 day ago',
  status: 'negotiating',
  phone: '+91 76543 21098'
},
{
  name: 'Suresh Reddy',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12eba2d34-1763296538470.png",
  avatarAlt: 'Indian man casual professional headshot neutral background',
  property: '3 BHK, Sector 62',
  time: '2 days ago',
  status: 'closed',
  phone: '+91 65432 10987'
}];


const statusConfig: Record<string, {label: string;color: string;}> = {
  new: { label: 'New', color: 'bg-blue-100 text-blue-700' },
  contacted: { label: 'Contacted', color: 'bg-yellow-100 text-yellow-700' },
  negotiating: { label: 'Negotiating', color: 'bg-purple-100 text-purple-700' },
  closed: { label: 'Closed', color: 'bg-green-100 text-green-700' }
};

export default function DashboardLeads() {
  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-foreground text-base">Recent Leads</h2>
        <span className="text-xs bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full">
          3 new
        </span>
      </div>

      <div className="space-y-3">
        {leads.map((lead) =>
        <div key={lead.name} className="p-3 border border-border rounded-xl hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                <AppImage
                src={lead.avatar}
                alt={lead.avatarAlt}
                width={36}
                height={36}
                className="w-full h-full object-cover" />

              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{lead.name}</p>
                <p className="text-xs text-muted-foreground truncate">{lead.property}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${statusConfig[lead.status].color}`}>
                {statusConfig[lead.status].label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Icon name="ClockIcon" size={11} />
                {lead.time}
              </span>
              <a
              href={`tel:${lead.phone}`}
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">

                <Icon name="PhoneIcon" size={11} />
                Call
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Pay-per-lead note */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-xl">
          <Icon name="InformationCircleIcon" size={14} className="text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-foreground/70 leading-relaxed">
            You&apos;ve been charged for <span className="font-semibold text-foreground">3 verified leads</span> (₹800 each = ₹2,400 total). Unverified leads are free.
          </p>
        </div>
      </div>
    </div>);

}