import EventCard from './event-card';

interface StructuredResponseProps {
  type: 'events' | 'summary' | 'insights';
  data: any;
}

export default function StructuredResponse({ type, data }: StructuredResponseProps) {
  if (type === 'events') {
    return (
      <div className="space-y-3">
        {data.map((event: any, index: number) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    );
  }

  if (type === 'summary') {
    return (
      <div className="p-4 bg-gradient-to-br from-secondary to-secondary/80 border border-border rounded-xl space-y-2">
        <h4 className="font-semibold text-sm text-foreground">{data.title}</h4>
        <p className="text-sm text-foreground/80">{data.description}</p>
        {data.stats && (
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-border/50">
            {data.stats.map((stat: any, index: number) => (
              <div key={index}>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
