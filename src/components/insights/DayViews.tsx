"use client";

import { EventCard } from "@/components/chat/EventCard";
import { TODAY_EVENTS, TOMORROW_EVENTS } from "@/lib/data";

function FreeTimeBlock({ text, sub }: { text: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-teal/20 bg-teal-subtle px-4 py-3">
      <span className="text-2xl">🌿</span>
      <div>
        <p className="text-[14px] font-semibold text-teal">{text}</p>
        <p className="text-[12px] text-teal/70 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function ContentHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-2">
      <h1 className="font-display text-[28px] font-medium tracking-tight text-text-primary mb-1.5">
        {title}
      </h1>
      <p className="text-[14px] text-text-muted">{sub}</p>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted mb-3">
      {label}
    </p>
  );
}

export function TodayView() {
  const morning = TODAY_EVENTS.slice(0, 1);
  const afternoon = TODAY_EVENTS.slice(1);

  return (
    <div className="flex flex-col gap-6">
      <ContentHeader
        title="Today"
        sub="Wednesday, March 11, 2026 · 3 meetings"
      />

      <div>
        <SectionLabel label="Morning" />
        <div className="flex flex-col gap-2.5">
          {morning.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>

      <div>
        <SectionLabel label="Afternoon" />
        <div className="flex flex-col gap-2.5">
          {afternoon.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>

      <FreeTimeBlock
        text="2.5 hours free between meetings"
        sub="Slots: 10:00–2:00 PM · 3:00–4:30 PM"
      />
    </div>
  );
}

export function TomorrowView() {
  return (
    <div className="flex flex-col gap-6">
      <ContentHeader
        title="Tomorrow"
        sub="Thursday, March 12, 2026 · 4 meetings"
      />
      <div className="flex flex-col gap-2.5">
        {TOMORROW_EVENTS.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
      <FreeTimeBlock
        text="90 min free mid-morning"
        sub="Gap: 11:30 AM – 1:00 PM"
      />
    </div>
  );
}
