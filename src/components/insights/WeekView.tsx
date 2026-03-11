"use client";

import { cn } from "@/lib/utils";
import { WEEK_DAYS } from "@/lib/data";

export function WeekView() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-[28px] font-medium tracking-tight text-text-primary mb-1.5">
          This Week
        </h1>
        <p className="text-[14px] text-text-muted">
          March 11–15, 2026 · 14 meetings total
        </p>
      </div>

      {/* Week grid */}
      <div className="grid grid-cols-5 gap-3">
        {WEEK_DAYS.map((day) => (
          <div
            key={day.date}
            className={cn(
              "rounded-xl border px-3.5 py-4 transition-all duration-200",
              day.isToday
                ? "border-indigo/30 bg-indigo-subtle shadow-[0_0_20px_rgba(99,102,241,0.12)]"
                : "border-border bg-bg-card hover:border-border-light hover:bg-bg-hover"
            )}
          >
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.08em] mb-2",
                day.isToday ? "text-indigo-light" : "text-text-muted"
              )}
            >
              {day.isToday ? "Today" : day.shortLabel}
            </p>
            <p
              className={cn(
                "text-[22px] font-semibold tracking-tight mb-2",
                day.isToday ? "text-indigo-light" : "text-text-primary"
              )}
            >
              {day.date}
            </p>
            <p
              className={cn(
                "text-[12px] mb-3",
                day.isFree
                  ? "text-teal"
                  : day.isToday
                  ? "text-indigo-light"
                  : "text-text-secondary"
              )}
            >
              {day.isFree ? "Light day" : `${day.meetingCount} meetings`}
            </p>

            {/* Mini bars */}
            <div className="flex flex-col gap-1">
              {Array.from({ length: day.meetingCount }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-[5px] rounded-sm",
                    day.isToday
                      ? "bg-indigo"
                      : day.isFree
                      ? "bg-teal/40"
                      : "bg-indigo/30"
                  )}
                  style={{
                    width: `${30 + Math.random() * 50}%`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="flex items-center gap-3 rounded-xl border border-amber/20 bg-amber-subtle px-4 py-3">
        <span className="text-2xl">💡</span>
        <div>
          <p className="text-[14px] font-semibold text-amber">
            Thursday is your busiest day — 4 meetings, 5.5 hrs of calls
          </p>
          <p className="text-[12px] text-amber/70 mt-0.5">
            Friday afternoon is completely clear · Best deep-work window
          </p>
        </div>
      </div>
    </div>
  );
}
