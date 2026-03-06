import { Clock, Users } from 'lucide-react';

export default function CalendarSnapshot() {
  const events = [
    { time: '9:00 AM', title: 'Team Standup', duration: '30 min', color: 'from-blue-400 to-blue-500' },
    { time: '10:30 AM', title: 'Client Call', duration: '1 hour', color: 'from-purple-400 to-purple-500' },
    { time: '2:00 PM', title: 'Project Review', duration: '1.5 hours', color: 'from-indigo-400 to-indigo-500' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Today's Schedule</h3>
        <span className="text-xs text-muted-foreground">6 hours booked</span>
      </div>

      <div className="space-y-2">
        {events.map((event, index) => (
          <div key={index} className="p-3 bg-card border border-border rounded-lg space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-foreground">{event.title}</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock size={12} />
                  {event.time} • {event.duration}
                </p>
              </div>
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${event.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Free Time Block */}
      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-xs font-medium text-green-900">Free Time</p>
        <p className="text-xs text-green-700 mt-1">3 hours available tomorrow afternoon</p>
      </div>
    </div>
  );
}
