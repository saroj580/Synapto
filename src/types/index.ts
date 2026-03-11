// ─── App-wide Types ────────────────────────────────────────────────

export type AppPage = "landing" | "auth" | "welcome" | "dashboard";

export type DashboardView =
  | "chat"
  | "today"
  | "tomorrow"
  | "week"
  | "insights"
  | "settings";

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export type MessageRole = "user" | "ai";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  events?: CalendarEvent[];
  freeBlock?: FreeBlock;
}

export type EventColor = "indigo" | "teal" | "amber" | "pink";
export type EventType =
  | "Video Call"
  | "Daily"
  | "External"
  | "1:1"
  | "Internal"
  | "Company";

export interface Participant {
  name: string;
  isExtra?: boolean;
  count?: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  participants: Participant[];
  color: EventColor;
  type: EventType;
}

export interface FreeBlock {
  startTime: string;
  endTime: string;
  date: string;
  duration: string;
}

export interface DayStats {
  label: string;
  shortLabel: string;
  date: number;
  meetingCount: number;
  hours: number;
  isToday: boolean;
  isFree?: boolean;
}

export interface InsightStat {
  icon: string;
  value: string;
  label: string;
  change: string;
}
