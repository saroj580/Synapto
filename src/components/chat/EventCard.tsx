"use client";

import { cn } from "@/lib/utils";
import type { CalendarEvent, EventColor, EventType } from "@/types";

// ─── Color map ─────────────────────────────────────────────────────

const colorMap: Record<EventColor, { bar: string; tag: string; tagText: string }> = {
  indigo: {
    bar: "bg-indigo",
    tag: "bg-indigo-subtle border border-indigo/20",
    tagText: "text-indigo-light",
  },
  teal: {
    bar: "bg-teal",
    tag: "bg-teal-subtle border border-teal/20",
    tagText: "text-teal",
  },
  amber: {
    bar: "bg-amber",
    tag: "bg-amber-subtle border border-amber/20",
    tagText: "text-amber",
  },
  pink: {
    bar: "bg-pink",
    tag: "bg-pink/10 border border-pink/20",
    tagText: "text-pink",
  },
};

interface EventCardProps {
  event: CalendarEvent;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  const colors = colorMap[event.color];

  return (
    <div
      className={cn(
        "relative flex gap-3 items-start rounded-xl border border-border bg-bg-card px-4 py-3",
        "transition-all duration-200 hover:bg-bg-hover hover:border-border-light overflow-hidden",
        className
      )}
    >
      {/* Accent bar */}
      <div
        className={cn("absolute left-0 top-0 bottom-0 w-[3px] rounded-r-sm", colors.bar)}
      />

      {/* Time badge */}
      <div className="flex-shrink-0 min-w-[68px] rounded-lg border border-border bg-bg-deep px-2 py-1.5 text-center">
        <p className="font-mono text-[13px] font-medium text-text-primary leading-none">
          {event.startTime}
        </p>
        <p className="font-mono text-[10px] text-text-muted mt-1 leading-none">
          {event.endTime}
        </p>
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-text-primary mb-1.5 leading-snug">
          {event.title}
        </p>
        <div className="flex flex-wrap gap-1">
          {event.participants.map((p, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-white/5 px-2 py-0.5 text-[11px] text-text-secondary"
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>

      {/* Type tag */}
      <span
        className={cn(
          "flex-shrink-0 self-start rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
          colors.tag,
          colors.tagText
        )}
      >
        {event.type}
      </span>
    </div>
  );
}
