'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CalendarSnapshot from './calendar-snapshot';
import AIInsightPanel from './ai-insight-panel';
import ConnectedAppsWidget from './connected-apps-widget';
import RecentActivity from './recent-activity';

interface MobileContextDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileContextDrawer({ isOpen, onClose }: MobileContextDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-80 bg-background border-l border-border z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background z-10">
          <h2 className="text-sm font-semibold text-foreground">Context</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <CalendarSnapshot />
          <AIInsightPanel />
          <ConnectedAppsWidget />
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
