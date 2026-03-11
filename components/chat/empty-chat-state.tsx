import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SuggestionCard from './suggestion-card';

interface EmptyChatStateProps {
  onSuggestionClick: (suggestion: string) => void;
}

export default function EmptyChatState({ onSuggestionClick }: EmptyChatStateProps) {
  const suggestions = [
    {
      emoji: '📅',
      title: 'What meetings do I have tomorrow?',
      description: 'Get a summary of tomorrow\'s schedule',
    },
    {
      emoji: '⏰',
      title: 'Am I free Friday afternoon?',
      description: 'Check your availability',
    },
    {
      emoji: '👥',
      title: 'Schedule a meeting with Alex next week',
      description: 'Find time for a team sync',
    },
    {
      emoji: '📊',
      title: 'How much free time do I have this week?',
      description: 'Get a time analysis',
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8 max-w-2xl mx-auto text-center py-8 px-4">
      {/* Logo */}
      <div className="space-y-4 animate-fade-in">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-card hover:shadow-lg transition-shadow duration-300">
          <Sparkles size={32} className="text-white animate-pulse-light" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome to Synapto</h1>
          <p className="text-muted-foreground max-w-sm mx-auto mt-2">
            Your AI assistant for intelligent productivity management. Start a conversation about your calendar and schedule.
          </p>
        </div>
      </div>

      {/* Suggestion Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            style={{
              animation: 'slideUp 0.3s ease-out forwards',
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
          >
            <SuggestionCard
              emoji={suggestion.emoji}
              title={suggestion.title}
              description={suggestion.description}
              onClick={() => onSuggestionClick(suggestion.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
