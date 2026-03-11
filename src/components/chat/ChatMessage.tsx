"use client";

import { cn, formatTime } from "@/lib/utils";
import type { Message } from "@/types";
import { EventCard } from "./EventCard";
import { FreeBlockCard } from "./FreeBlockCard";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  const time = formatTime(message.timestamp);

  return (
    <div className={cn("flex flex-col gap-1 animate-fade-up", isUser ? "items-end" : "items-start")}>
      {/* Meta */}
      <div className="flex items-center gap-1.5 px-1 mb-1">
        {!isUser && (
          <span className="rounded-full border border-indigo/20 bg-indigo-subtle px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-light">
            Synapto
          </span>
        )}
        <span className="text-[11px] text-text-muted">
          {isUser ? `You · ${time}` : time}
        </span>
      </div>

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[520px] rounded-xl px-4 py-3 text-[14.5px] leading-relaxed",
          isUser
            ? "bg-gradient-user text-white shadow-indigo-sm rounded-br-[4px]"
            : "border border-border bg-bg-card text-text-primary shadow-card rounded-bl-[4px]"
        )}
        dangerouslySetInnerHTML={{ __html: message.content }}
      />

      {/* Event cards */}
      {message.events && message.events.length > 0 && (
        <div className="flex flex-col gap-2.5 mt-2 w-full max-w-[520px]">
          {message.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {/* Free block */}
      {message.freeBlock && (
        <div className="mt-2">
          <FreeBlockCard block={message.freeBlock} />
        </div>
      )}
    </div>
  );
}

// ─── Typing Indicator ──────────────────────────────────────────────

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-1 animate-fade-up">
      <div className="rounded-xl rounded-bl-[4px] border border-border bg-bg-card px-4 py-3 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block w-1.5 h-1.5 rounded-full bg-text-muted animate-typing"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
