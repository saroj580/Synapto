"use client";

import { cn } from "@/lib/utils";
import { INSIGHT_STATS, WEEK_DAYS, TOMORROW_EVENTS } from "@/lib/data";
import { EventCard } from "@/components/chat/EventCard";

const MAX_HOURS = 6;

export function InsightsView() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <h1 className="font-display text-[28px] font-medium tracking-tight text-text-primary mb-1.5">
          Insights
        </h1>
        <p className="text-[14px] text-text-muted">
          Your productivity snapshot this week
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {INSIGHT_STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-border bg-bg-card p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-1">
          Daily Meeting Load
        </p>
        <p className="text-[12px] text-text-muted mb-5">
          Hours of meetings per day · This week
        </p>

        <div className="flex items-end gap-3 h-28">
          {WEEK_DAYS.map((day) => {
            const heightPct = (day.hours / MAX_HOURS) * 100;
            return (
              <div key={day.date} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={cn(
                    "w-full rounded-t-md transition-all duration-500 min-h-[4px]",
                    day.isToday
                      ? "bg-gradient-to-t from-[#4f46e5] to-indigo-light shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                      : day.isFree
                      ? "bg-indigo/15"
                      : "bg-indigo/30"
                  )}
                  style={{ height: `${heightPct}%` }}
                />
                <span
                  className={cn(
                    "font-mono text-[11px]",
                    day.isToday ? "text-indigo-light" : "text-text-muted"
                  )}
                >
                  {day.shortLabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-4">
          Key Meeting This Week
        </p>
        <EventCard event={TOMORROW_EVENTS[2]} />
      </div>
    </div>
  );
}

function StatCard({
  stat,
}: {
  stat: { icon: string; value: string; label: string; change: string };
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-5 transition-all duration-200 hover:border-border-light hover:bg-bg-hover hover:-translate-y-0.5 group">
      {/* Subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-[10px] border border-border bg-bg-deep text-[20px]">
        {stat.icon}
      </div>

      <p className="mb-1.5 text-[32px] font-semibold leading-none tracking-tight bg-gradient-display bg-clip-text text-transparent">
        {stat.value}
      </p>
      <p className="text-[13px] text-text-secondary">{stat.label}</p>
      <p className="mt-1 text-[11px] text-teal">{stat.change}</p>
    </div>
  );
}
