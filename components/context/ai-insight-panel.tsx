import { Sparkles } from 'lucide-react';

export default function AIInsightPanel() {
  const insights = [
    { icon: '📊', text: 'You have 4 meetings today' },
    { icon: '⏱️', text: 'You have 3 hours of free time tomorrow' },
    { icon: '👥', text: 'No overlapping meetings this week' },
  ];

  return (
    <div className="space-y-3 pt-4 border-t border-border">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-primary" />
        <h3 className="text-sm font-semibold text-foreground">AI Insights</h3>
      </div>

      <div className="space-y-2">
        {insights.map((insight, index) => (
          <div key={index} className="p-3 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-lg">
            <p className="text-xs text-foreground">
              <span className="mr-2">{insight.icon}</span>
              {insight.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
