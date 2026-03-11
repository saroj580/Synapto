"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ChatView } from "@/components/chat/ChatView";
import { TodayView, TomorrowView } from "@/components/insights/DayViews";
import { WeekView } from "@/components/insights/WeekView";
import { InsightsView } from "@/components/insights/InsightsView";
import { SettingsView } from "@/components/settings/SettingsView";
import type { DashboardView, User } from "@/types";

const MOCK_USER: User = {
  name: "Alex Johnson",
  email: "alex.johnson@gmail.com",
  avatar: "AJ",
};

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeView, setActiveView] = useState<DashboardView>("chat");

  return (
    <div className="flex h-screen overflow-hidden bg-bg-deep">
      <Sidebar
        activeView={activeView}
        user={MOCK_USER}
        onViewChange={setActiveView}
        onLogout={onLogout}
      />

      {/* Main content */}
      <main className="relative flex flex-1 flex-col overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_60%_-20%,rgba(99,102,241,0.10)_0%,transparent_70%)]" />

        {/* Chat view (always mounted, shown/hidden) */}
        <div
          className={
            activeView === "chat" ? "flex flex-1 flex-col h-full" : "hidden"
          }
        >
          <ChatView />
        </div>

        {/* Content views */}
        {activeView !== "chat" && (
          <div className="flex-1 overflow-y-auto px-8 py-8 relative z-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
            {activeView === "today" && <TodayView />}
            {activeView === "tomorrow" && <TomorrowView />}
            {activeView === "week" && <WeekView />}
            {activeView === "insights" && <InsightsView />}
            {activeView === "settings" && <SettingsView onLogout={onLogout} />}
          </div>
        )}
      </main>
    </div>
  );
}
