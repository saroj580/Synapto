import type {
  CalendarEvent,
  DayStats,
  FreeBlock,
  InsightStat,
  Message,
} from "@/types";
import { generateId } from "./utils";

// ─── Mock Calendar Events ──────────────────────────────────────────

export const TOMORROW_EVENTS: CalendarEvent[] = [
  {
    id: "e1",
    title: "Product Strategy Sync",
    startTime: "9:00",
    endTime: "10:00 AM",
    participants: [
      { name: "Sarah K." },
      { name: "Marcus L." },
      { name: "+3", isExtra: true, count: 3 },
    ],
    color: "indigo",
    type: "Video Call",
  },
  {
    id: "e2",
    title: "Team Standup",
    startTime: "11:00",
    endTime: "11:30 AM",
    participants: [{ name: "Engineering" }],
    color: "teal",
    type: "Daily",
  },
  {
    id: "e3",
    title: "Client Review — Q1 Roadmap",
    startTime: "1:00",
    endTime: "2:30 PM",
    participants: [{ name: "Priya M." }, { name: "Client" }],
    color: "amber",
    type: "External",
  },
  {
    id: "e4",
    title: "1:1 with Jordan",
    startTime: "4:00",
    endTime: "4:30 PM",
    participants: [{ name: "Jordan R." }],
    color: "indigo",
    type: "1:1",
  },
];

export const TODAY_EVENTS: CalendarEvent[] = [
  {
    id: "t1",
    title: "Team Standup",
    startTime: "9:30",
    endTime: "10:00 AM",
    participants: [{ name: "Engineering Team" }],
    color: "teal",
    type: "Daily",
  },
  {
    id: "t2",
    title: "Design Review",
    startTime: "2:00",
    endTime: "3:00 PM",
    participants: [{ name: "Chris P." }, { name: "Mia T." }],
    color: "indigo",
    type: "Internal",
  },
  {
    id: "t3",
    title: "Weekly Wrap-Up",
    startTime: "4:30",
    endTime: "5:00 PM",
    participants: [{ name: "All Hands" }],
    color: "amber",
    type: "Company",
  },
];

export const WEEK_DAYS: DayStats[] = [
  {
    label: "Monday",
    shortLabel: "Mon",
    date: 9,
    meetingCount: 2,
    hours: 2.5,
    isToday: false,
  },
  {
    label: "Tuesday",
    shortLabel: "Tue",
    date: 10,
    meetingCount: 3,
    hours: 3.5,
    isToday: false,
  },
  {
    label: "Wednesday",
    shortLabel: "Wed",
    date: 11,
    meetingCount: 3,
    hours: 3.0,
    isToday: true,
  },
  {
    label: "Thursday",
    shortLabel: "Thu",
    date: 12,
    meetingCount: 4,
    hours: 5.5,
    isToday: false,
  },
  {
    label: "Friday",
    shortLabel: "Fri",
    date: 13,
    meetingCount: 1,
    hours: 1.0,
    isToday: false,
    isFree: true,
  },
];

export const INSIGHT_STATS: InsightStat[] = [
  {
    icon: "📅",
    value: "14",
    label: "Meetings this week",
    change: "↑ 2 from last week",
  },
  {
    icon: "⏱",
    value: "18h",
    label: "Total meeting time",
    change: "36% of your workweek",
  },
  {
    icon: "🔥",
    value: "Thu",
    label: "Busiest day",
    change: "4 meetings · 5.5 hrs",
  },
  {
    icon: "🌿",
    value: "6h",
    label: "Free time tomorrow",
    change: "Best focus window: Fri PM",
  },
];

// ─── Initial greeting messages ─────────────────────────────────────

export const INITIAL_MESSAGES: Message[] = [
  {
    id: "init-1",
    role: "ai",
    content:
      "Good morning, Alex! ☀️ I've synced your Google Calendar. You have <strong>3 meetings</strong> today and <strong>4 meetings</strong> tomorrow. What would you like to know?",
    timestamp: new Date(),
  },
  {
    id: "init-2",
    role: "user",
    content: "What meetings do I have tomorrow?",
    timestamp: new Date(),
  },
  {
    id: "init-3",
    role: "ai",
    content:
      "You have <strong>4 meetings</strong> tomorrow, Wednesday March 12th. Here's your schedule:",
    timestamp: new Date(),
    events: TOMORROW_EVENTS,
  },
  {
    id: "init-4",
    role: "user",
    content: "Am I free Friday afternoon?",
    timestamp: new Date(),
  },
  {
    id: "init-5",
    role: "ai",
    content:
      "Yes! Friday afternoon looks clear. 🎉 Your last meeting ends at <strong>12:00 PM</strong>, and you have nothing scheduled until end of day. That's about <strong>6 hours of free time</strong>.",
    timestamp: new Date(),
    freeBlock: {
      startTime: "12:00 PM",
      endTime: "6:00 PM",
      date: "Friday, March 14",
      duration: "6 hours unblocked",
    },
  },
];

// ─── AI Response Engine ────────────────────────────────────────────

interface AIResponse {
  content: string;
  events?: CalendarEvent[];
  freeBlock?: FreeBlock;
}

export function getAIResponse(input: string): AIResponse {
  const lower = input.toLowerCase().trim();

  if (lower.includes("tomorrow") && lower.includes("meeting")) {
    return {
      content:
        "You have <strong>4 meetings</strong> tomorrow, March 12th. Here's your full schedule:",
      events: TOMORROW_EVENTS,
    };
  }

  if (lower.includes("today") && lower.includes("meeting")) {
    return {
      content:
        "You have <strong>3 meetings</strong> today, March 11th. Here they are:",
      events: TODAY_EVENTS,
    };
  }

  if (lower.includes("next meeting")) {
    return {
      content:
        "Your next meeting is <strong>Team Standup</strong> today at <strong>9:30 AM</strong> — in about 15 minutes. It's a 30-minute daily sync with the Engineering team.",
    };
  }

  if (lower.includes("free") && lower.includes("friday")) {
    return {
      content:
        "Yes! Friday afternoon is completely clear. 🎉 Your last meeting ends at <strong>12:00 PM</strong>, giving you 6 hours of uninterrupted focus time.",
      freeBlock: {
        startTime: "12:00 PM",
        endTime: "6:00 PM",
        date: "Friday, March 14",
        duration: "6 hours unblocked",
      },
    };
  }

  if (lower.includes("free") || lower.includes("available")) {
    return {
      content:
        "Looking at your calendar — you have several open windows:<br><br>• Today: Free <strong>10:00 AM – 2:00 PM</strong><br>• Tomorrow: <strong>11:30 AM – 1:00 PM</strong><br>• Friday: Wide open from <strong>12:00 PM</strong> onwards 🌿",
    };
  }

  if (lower.includes("week") || lower.includes("overview")) {
    return {
      content:
        "This week you have <strong>14 meetings</strong> totalling about <strong>18 hours</strong>. Your busiest day is <strong>Thursday</strong> with 4 back-to-back calls. Friday afternoon is completely free. 🎉",
    };
  }

  if (lower.includes("busiest")) {
    return {
      content:
        "Your busiest day this week is <strong>Thursday</strong> with 4 meetings totalling <strong>5.5 hours</strong> of calls. Consider blocking some focus time Wednesday morning to prepare.",
    };
  }

  if (lower.includes("tomorrow")) {
    return {
      content:
        "You have <strong>4 meetings</strong> tomorrow (March 12th), from 9:00 AM through 4:30 PM. Your largest gap is 11:30 AM – 1:00 PM. The client review at 1:00 PM is your most important block.",
      events: TOMORROW_EVENTS,
    };
  }

  return {
    content:
      'I\'ve checked your calendar. Could you be more specific? Try asking things like <em>"What meetings do I have tomorrow?"</em> or <em>"Am I free Friday afternoon?"</em> ✦',
  };
}

export function buildAIMessage(input: string): Message {
  const response = getAIResponse(input);
  return {
    id: generateId(),
    role: "ai",
    content: response.content,
    timestamp: new Date(),
    events: response.events,
    freeBlock: response.freeBlock,
  };
}

export const SUGGESTIONS = [
  { label: "📅 Today's meetings", query: "What meetings do I have today?" },
  { label: "⚡ Next meeting", query: "When is my next meeting?" },
  { label: "🗓 This week overview", query: "Give me this week's overview" },
  { label: "🆓 When am I free?", query: "When am I free this week?" },
  { label: "📊 Busiest day?", query: "What is my busiest day?" },
];
