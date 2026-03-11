import { Send, Paperclip, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export default function ChatInput({ value, onChange, onSend, isLoading }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-border bg-background px-4 md:px-8 py-4 md:py-6">
      <div className="max-w-3xl mx-auto space-y-3">
        <div className="flex gap-3 bg-card border border-border rounded-2xl p-1 shadow-sm">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Synapto anything about your schedule..."
            className="flex-1 bg-transparent text-foreground placeholder-muted-foreground px-4 py-3 outline-none resize-none max-h-32 text-sm"
            rows={1}
          />

          <div className="flex items-center gap-1 pr-1">
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-primary hover:bg-secondary/50"
              title="Attach context"
            >
              <Paperclip size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-primary hover:bg-secondary/50"
              title="Voice input"
            >
              <Mic size={18} />
            </Button>
            <Button
              size="sm"
              onClick={onSend}
              disabled={isLoading || !value.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Synapto can access your connected productivity apps
        </p>
      </div>
    </div>
  );
}
