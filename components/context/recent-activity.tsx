import { Clock } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    { icon: '📥', title: 'Fetched calendar events', time: '5 minutes ago' },
    { icon: '✅', title: 'Updated reminder', time: '12 minutes ago' },
    { icon: '📅', title: 'Created meeting', time: '1 hour ago' },
  ];

  return (
    <div className="space-y-3 pt-4 border-t border-border">
      <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>

      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="p-3 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-lg">{activity.icon}</span>
              <div className="flex-1">
                <p className="text-xs font-medium text-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock size={10} />
                  {activity.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
