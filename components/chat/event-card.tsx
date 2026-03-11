import { Clock, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  duration: string;
  participants?: string[];
  location?: string;
  color?: string;
}

export default function EventCard({
  title,
  date,
  time,
  duration,
  participants = [],
  location,
  color = 'from-blue-400 to-blue-500',
}: EventCardProps) {
  return (
    <div className="p-4 bg-gradient-to-br from-secondary to-secondary/80 border border-border rounded-xl space-y-3 my-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-sm text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
        </div>
        <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${color}`} />
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock size={14} />
          {time} • {duration}
        </div>

        {location && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={14} />
            {location}
          </div>
        )}

        {participants.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Users size={14} />
            {participants.join(', ')}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <Button size="sm" variant="secondary" className="text-xs h-8">
          Open in Calendar
        </Button>
        <Button size="sm" variant="outline" className="text-xs h-8">
          Add to Reminder
        </Button>
      </div>
    </div>
  );
}
