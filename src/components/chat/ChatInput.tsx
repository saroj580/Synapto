"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { SUGGESTIONS } from "@/lib/data";
import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const handleSuggestion = (query: string) => {
    onSend(query);
  };

  return (
    <div className="border-t border-border bg-bg-deep/80 backdrop-blur-md">
      {/* Suggestion chips */}
      <div className="flex gap-2 flex-nowrap overflow-x-auto px-6 pt-3 pb-2 scrollbar-none">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.query}
            onClick={() => handleSuggestion(s.query)}
            disabled={disabled}
            className={cn(
              "flex-shrink-0 rounded-full border border-border bg-bg-card px-3.5 py-1.5",
              "text-[13px] text-text-secondary whitespace-nowrap font-sans",
              "transition-all duration-200",
              "hover:border-indigo/40 hover:text-indigo-light hover:bg-indigo-subtle",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="px-6 pb-5">
        <div
          className={cn(
            "flex items-end gap-2.5 rounded-2xl border border-border-light bg-bg-card px-4 py-2.5",
            "transition-all duration-200",
            "focus-within:border-indigo/50 focus-within:shadow-[0_0_0_3px_rgba(99,102,241,0.08)]"
          )}
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKey}
            onInput={handleInput}
            placeholder="Ask anything about your schedule…"
            disabled={disabled}
            className={cn(
              "flex-1 resize-none bg-transparent outline-none border-none",
              "font-sans text-[14.5px] text-text-primary placeholder:text-text-muted",
              "min-h-[24px] max-h-[120px] leading-relaxed",
              "disabled:opacity-50"
            )}
          />
          <button
            onClick={handleSend}
            disabled={!value.trim() || disabled}
            className={cn(
              "flex-shrink-0 flex items-center justify-center",
              "w-9 h-9 rounded-[10px] transition-all duration-200",
              value.trim() && !disabled
                ? "bg-indigo text-white hover:bg-indigo/80 hover:scale-105 active:scale-95"
                : "bg-bg-card text-text-muted cursor-not-allowed border border-border"
            )}
          >
            <SendHorizonal size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
