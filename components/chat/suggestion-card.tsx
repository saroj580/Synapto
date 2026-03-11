interface SuggestionCardProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function SuggestionCard({ emoji, title, description, onClick }: SuggestionCardProps) {
  return (
    <button
      onClick={onClick}
      className="text-left p-4 rounded-xl border border-border bg-card hover:bg-secondary/50 hover:border-primary/50 hover:shadow-card transition-all duration-200 space-y-2 group cursor-pointer hover:scale-[1.02]"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{emoji}</span>
        <div className="flex-1">
          <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
}
