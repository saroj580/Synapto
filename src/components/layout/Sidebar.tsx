"use client";

import { cn } from "@/lib/utils";
import type { DashboardView, User } from "@/types";

// ─── Nav items config ──────────────────────────────────────────────

interface NavItem {
  id: DashboardView | "logout";
  icon: string;
  label: string;
  badge?: string;
  danger?: boolean;
}

const SCHEDULE_NAV: NavItem[] = [
  { id: "chat", icon: "💬", label: "Chat", badge: "AI" },
  { id: "today", icon: "📅", label: "Today" },
  { id: "tomorrow", icon: "🗓", label: "Tomorrow" },
  { id: "week", icon: "📊", label: "This Week" },
];

const ANALYTICS_NAV: NavItem[] = [
  { id: "insights", icon: "✦", label: "Insights" },
];

const BOTTOM_NAV: NavItem[] = [
  { id: "settings", icon: "⚙", label: "Settings" },
  { id: "logout", icon: "↩", label: "Logout", danger: true },
];

// ─── Component ─────────────────────────────────────────────────────

interface SidebarProps {
  activeView: DashboardView;
  user: User;
  onViewChange: (view: DashboardView) => void;
  onLogout: () => void;
}

export function Sidebar({ activeView, user, onViewChange, onLogout }: SidebarProps) {
  const handleClick = (item: NavItem) => {
    if (item.id === "logout") {
      onLogout();
    } else {
      onViewChange(item.id as DashboardView);
    }
  };

  return (
    <aside className="flex w-60 flex-shrink-0 flex-col border-r border-border bg-bg-mid/95 backdrop-blur-xl px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-2 pb-6 border-b border-border mb-5">
        <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[10px] bg-gradient-user shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
          <span className="font-display text-base font-semibold text-white">S</span>
        </div>
        <span className="font-display text-lg font-medium bg-gradient-logo bg-clip-text text-transparent">
          Synapto
        </span>
      </div>

      {/* Schedule section */}
      <SidebarSection label="Schedule" items={SCHEDULE_NAV} activeView={activeView} onClick={handleClick} />

      {/* Analytics section */}
      <SidebarSection label="Analytics" items={ANALYTICS_NAV} activeView={activeView} onClick={handleClick} className="mt-4" />

      <div className="flex-1" />

      {/* Bottom nav */}
      <div className="mb-2">
        {BOTTOM_NAV.map((item) => (
          <NavButton key={item.id} item={item} isActive={activeView === item.id} onClick={() => handleClick(item)} />
        ))}
      </div>

      {/* User info */}
      <div className="flex items-center gap-2.5 border-t border-border pt-4 px-2">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-teal text-[12px] font-bold text-white">
          {user.avatar}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-text-primary">{user.name}</p>
          <p className="truncate text-[11px] text-text-muted">{user.email}</p>
        </div>
      </div>
    </aside>
  );
}

// ─── Sub-components ────────────────────────────────────────────────

function SidebarSection({
  label,
  items,
  activeView,
  onClick,
  className,
}: {
  label: string;
  items: NavItem[];
  activeView: DashboardView;
  onClick: (item: NavItem) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
        {label}
      </p>
      {items.map((item) => (
        <NavButton
          key={item.id}
          item={item}
          isActive={activeView === item.id}
          onClick={() => onClick(item)}
        />
      ))}
    </div>
  );
}

function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[14px] font-[450]",
        "border transition-all duration-200 mb-0.5 text-left",
        isActive
          ? "border-indigo/25 bg-indigo-subtle text-indigo-light"
          : item.danger
          ? "border-transparent text-[#f87171] hover:bg-red-500/10 hover:border-red-500/20"
          : "border-transparent text-text-secondary hover:bg-bg-hover hover:border-border hover:text-text-primary"
      )}
    >
      <span className={cn("w-[18px] text-center text-base flex-shrink-0", isActive ? "opacity-100" : "opacity-70")}>
        {item.icon}
      </span>
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="ml-auto rounded-full bg-indigo px-2 py-0.5 text-[10px] font-semibold text-white">
          {item.badge}
        </span>
      )}
    </button>
  );
}
