'use client';

import { ChevronDown } from 'lucide-react';
import CalendarSnapshot from './calendar-snapshot';
import AIInsightPanel from './ai-insight-panel';
import ConnectedAppsWidget from './connected-apps-widget';
import RecentActivity from './recent-activity';

export default function ContextPanel() {
  return (
    <aside className="hidden lg:flex flex-col w-80 border-l border-border bg-background overflow-y-auto">
      {/* Panel Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground">Context</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 p-6">
        {/* Calendar Snapshot */}
        <CalendarSnapshot />

        {/* AI Insights */}
        <AIInsightPanel />

        {/* Connected Apps */}
        <ConnectedAppsWidget />

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </aside>
  );
}
