import { Sparkles, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from './event-card';

interface AIMessageProps {
  content: string;
  timestamp: Date;
  showActions?: boolean;
  hasStructuredData?: boolean;
  structuredData?: any;
}

export default function AIMessage({
  content,
  timestamp,
  showActions = false,
  hasStructuredData = false,
  structuredData,
}: AIMessageProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="flex gap-3 justify-start animate-slide-up">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
        <Sparkles size={18} className="text-white" />
      </div>

      <div className="max-w-lg space-y-2">
        {/* Main message */}
        <div className="bg-gradient-to-br from-secondary to-secondary/80 text-foreground border border-border px-4 py-3 rounded-2xl rounded-bl-none shadow-sm hover:shadow-card transition-all duration-200">
          <p className="text-sm leading-relaxed">{content}</p>
          
          {/* Structured data */}
          {hasStructuredData && structuredData && (
            <div className="mt-3 space-y-2">
              {structuredData.type === 'events' &&
                structuredData.events?.map((event: any, index: number) => (
                  <EventCard key={index} {...event} />
                ))}
            </div>
          )}

          {/* Response Actions */}
          <div className="mt-3 flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" className="text-xs h-8">
              Open in Calendar
            </Button>
            <Button size="sm" variant="outline" className="text-xs h-8">
              Create Reminder
            </Button>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs opacity-60">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            {showActions && (
              <div className="flex gap-1">
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-primary/10 rounded transition-colors"
                  title="Copy message"
                >
                  <Copy size={14} className="text-muted-foreground" />
                </button>
                <button className="p-1 hover:bg-green-500/10 rounded transition-colors" title="Helpful">
                  <ThumbsUp size={14} className="text-muted-foreground" />
                </button>
                <button
                  className="p-1 hover:bg-red-500/10 rounded transition-colors"
                  title="Not helpful"
                >
                  <ThumbsDown size={14} className="text-muted-foreground" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
