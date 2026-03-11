"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface ToggleProps {
  defaultOn?: boolean;
}

function Toggle({ defaultOn = false }: ToggleProps) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={cn(
        "relative h-6 w-10 rounded-full transition-all duration-200 border-none outline-none",
        on ? "bg-indigo" : "bg-border-light",
      )}
    >
      <span
        className={cn(
          "absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-all duration-200",
          on ? "left-[19px]" : "left-[3px]",
        )}
      />
    </button>
  );
}

function SettingRow({
  icon,
  label,
  description,
  action,
}: {
  icon: string;
  label: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-border px-5 py-4 last:border-b-0 transition-colors duration-150 hover:bg-bg-hover">
      <span className="w-9 text-center text-xl flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-medium text-text-primary">{label}</p>
        <p className="text-[12px] text-text-muted mt-0.5">{description}</p>
      </div>
      <div className="flex-shrink-0 ml-auto">{action}</div>
    </div>
  );
}

function SmallButton({
  children,
  danger,
  onClick,
}: {
  children: React.ReactNode;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg border px-3.5 py-1.5 text-[12px] font-semibold font-sans transition-all duration-200",
        danger
          ? "border-red-500/30 text-[#f87171] hover:bg-red-500/10 hover:border-red-500/50"
          : "border-border text-text-secondary hover:border-border-light hover:text-text-primary hover:bg-bg-hover",
      )}
    >
      {children}
    </button>
  );
}

function ConnectedBadge() {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal-subtle px-3 py-1 text-[12px] text-teal">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal animate-pulse2" />
      Connected
    </div>
  );
}

function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted">
        {title}
      </p>
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-card">
        {children}
      </div>
    </div>
  );
}

interface SettingsViewProps {
  onLogout: () => void;
}

export function SettingsView({ onLogout }: SettingsViewProps) {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <h1 className="font-display text-[28px] font-medium tracking-tight text-text-primary mb-1.5">
          Settings
        </h1>
        <p className="text-[14px] text-text-muted">
          Manage your account and preferences
        </p>
      </div>

      <SettingsSection title="Account">
        <SettingRow
          icon="👤"
          label="Google Account"
          description="alex.johnson@gmail.com"
          action={<ConnectedBadge />}
        />
        <SettingRow
          icon="📅"
          label="Calendar Sync"
          description="Last synced 2 minutes ago"
          action={<SmallButton>Sync now</SmallButton>}
        />
        <SettingRow
          icon="🔑"
          label="Permissions"
          description="Read-only calendar access"
          action={<SmallButton>Manage</SmallButton>}
        />
      </SettingsSection>

      <SettingsSection title="Notifications">
        <SettingRow
          icon="🔔"
          label="Meeting Reminders"
          description="Get notified 10 minutes before"
          action={<Toggle defaultOn />}
        />
        <SettingRow
          icon="📊"
          label="Daily Briefing"
          description="Morning summary at 8:00 AM"
          action={<Toggle defaultOn />}
        />
        <SettingRow
          icon="💡"
          label="Insights Digest"
          description="Weekly productivity report"
          action={<Toggle />}
        />
      </SettingsSection>

      <SettingsSection title="Preferences">
        <SettingRow
          icon="🌙"
          label="Theme"
          description="Toggle dark / light mode"
          action={<ThemeToggle variant="row" />}
        />
        <SettingRow
          icon="🌍"
          label="Timezone"
          description="UTC-8 (Pacific Time)"
          action={<SmallButton>Edit</SmallButton>}
        />
      </SettingsSection>

      <SettingsSection title="Danger Zone">
        <SettingRow
          icon="🔌"
          label="Disconnect Calendar"
          description="Remove Google Calendar access"
          action={<SmallButton danger>Disconnect</SmallButton>}
        />
        <SettingRow
          icon="↩"
          label="Sign Out"
          description="Log out of Synapto"
          action={
            <SmallButton danger onClick={onLogout}>
              Logout
            </SmallButton>
          }
        />
      </SettingsSection>
    </div>
  );
}
