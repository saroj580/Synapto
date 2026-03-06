'use client';

import { useState } from 'react';
import { Menu, Plus, Settings, LogOut, User, MessageSquare, Calendar, AppWindow, Activity, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SynaptoLogo from './synapto-logo';
import NavItem from './nav-item';
import ConnectedAppItem from './connected-app-item';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems = [
    { icon: MessageSquare, label: 'Chat Assistant', active: true },
    { icon: Calendar, label: 'Calendar Insights', active: false },
    { icon: AppWindow, label: 'Connected Apps', active: false },
    { icon: Activity, label: 'Activity Logs', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const connectedApps = [
    { name: 'Google Calendar', connected: true, icon: '📅' },
    { name: 'Notion', connected: true, icon: '📝' },
    { name: 'Slack', connected: false, icon: '💬' },
  ];

  return (
    <>
      {/* Sidebar Background Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ease-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden p-4 flex justify-end">
          <button onClick={onToggle} className="text-sidebar-foreground hover:text-sidebar-primary">
            <Menu size={24} />
          </button>
        </div>

        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <SynaptoLogo />
          <p className="text-xs text-sidebar-foreground/60 mt-2">AI Productivity Assistant</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} active={item.active} />
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div className="px-4 py-4 border-t border-sidebar-border space-y-2">
          <Button
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 rounded-lg flex items-center gap-2"
            size="sm"
          >
            <Plus size={18} />
            New Conversation
          </Button>
          <Button
            variant="outline"
            className="w-full border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent rounded-lg"
            size="sm"
          >
            <Plus size={18} />
            Connect App
          </Button>
        </div>

        {/* Connected Apps */}
        <div className="px-4 py-4 border-t border-sidebar-border space-y-3">
          <p className="text-xs font-semibold text-sidebar-foreground uppercase tracking-wider">Connected Apps</p>
          <div className="space-y-2">
            {connectedApps.map((app) => (
              <ConnectedAppItem key={app.name} app={app} />
            ))}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="px-4 py-4 border-t border-sidebar-border relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            <div className="w-10 h-10 bg-sidebar-primary text-sidebar-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
              JD
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
              <p className="text-xs text-sidebar-foreground/60">john@example.com</p>
            </div>
            <MoreVertical size={16} className="text-sidebar-foreground/50" />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute bottom-20 left-4 right-4 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
              <button className="w-full px-4 py-2 text-sm text-foreground hover:bg-secondary/50 flex items-center gap-2 text-left">
                <User size={16} />
                Profile
              </button>
              <button className="w-full px-4 py-2 text-sm text-foreground hover:bg-secondary/50 flex items-center gap-2 text-left">
                <Settings size={16} />
                Settings
              </button>
              <hr className="my-2 border-border" />
              <button className="w-full px-4 py-2 text-sm text-destructive hover:bg-destructive/10 flex items-center gap-2 text-left">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
