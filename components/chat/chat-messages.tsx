import { useState } from 'react';
import { Sparkles, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`flex gap-3 animate-slide-up ${
            message.type === 'user' ? 'justify-end' : 'justify-start'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
          onMouseEnter={() => setHoveredMessageId(message.id)}
          onMouseLeave={() => setHoveredMessageId(null)}
        >
          {message.type === 'ai' && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
              <Sparkles size={18} className="text-white" />
            </div>
          )}

          <div
            className={`max-w-lg px-4 py-3 rounded-2xl transition-all duration-200 ${
              message.type === 'user'
                ? 'bg-primary text-primary-foreground rounded-br-none shadow-sm hover:shadow-card'
                : 'bg-gradient-to-br from-secondary to-secondary/80 text-foreground border border-border rounded-bl-none shadow-sm hover:shadow-card'
            }`}
          >
            <p className="text-sm leading-relaxed">{message.content}</p>

            {/* AI Response Actions */}
            {message.type === 'ai' && (
              <div className="mt-3 flex flex-wrap gap-2">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="text-xs h-8 transition-all hover:scale-105"
                >
                  Open in Calendar
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-xs h-8 transition-all hover:scale-105"
                >
                  Create Reminder
                </Button>
              </div>
            )}

            {/* Message Footer with Actions */}
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs opacity-60">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              {hoveredMessageId === message.id && message.type === 'ai' && (
                <div className="flex gap-1">
                  <button
                    onClick={() => handleCopy(message.id, message.content)}
                    className="p-1 hover:bg-primary/10 rounded transition-colors"
                    title="Copy message"
                  >
                    <Copy size={14} className="text-muted-foreground" />
                  </button>
                  <button
                    className="p-1 hover:bg-green-500/10 rounded transition-colors"
                    title="Helpful"
                  >
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
      ))}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex gap-3 justify-start">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
            <Sparkles size={18} className="text-white animate-pulse" />
          </div>
          <div className="bg-secondary text-foreground px-4 py-3 rounded-2xl rounded-bl-none">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
