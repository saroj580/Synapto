'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/sidebar';
import ChatInterface from '@/components/chat/chat-interface';
import ContextPanel from '@/components/context/context-panel';
import MobileContextDrawer from '@/components/context/mobile-context-drawer';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContextPanelOpen, setIsContextPanelOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Center Chat Area */}
      <ChatInterface 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onToggleContextPanel={() => setIsContextPanelOpen(!isContextPanelOpen)}
      />

      {/* Right Context Panel (Desktop) */}
      <ContextPanel />

      {/* Context Panel Mobile Drawer */}
      <MobileContextDrawer isOpen={isContextPanelOpen} onClose={() => setIsContextPanelOpen(false)} />
    </div>
  );
}
