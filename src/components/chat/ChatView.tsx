"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage, TypingIndicator } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { buildAIMessage, INITIAL_MESSAGES } from "@/lib/data";
import { generateId } from "@/lib/utils";
import type { Message } from "@/types";
import { RotateCcw } from "lucide-react";

export function ChatView() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = useCallback((text: string) => {
    const userMsg: Message = {
      id: generateId(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const delay = 800 + Math.random() * 600;
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg = buildAIMessage(text);
      setMessages((prev) => [...prev, aiMsg]);
    }, delay);
  }, []);

  const handleClear = () => {
    setMessages([
      {
        id: generateId(),
        role: "ai",
        content:
          "Chat cleared. I'm ready — ask me anything about your schedule. ✦",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-bg-deep/60 backdrop-blur-sm px-6 py-4 flex-shrink-0 relative z-10">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] border border-indigo/30 bg-indigo-subtle text-lg">
          ✦
        </div>
        <div>
          <h2 className="text-[16px] font-semibold tracking-tight text-text-primary">
            Synapto AI
          </h2>
          <div className="flex items-center gap-1.5 text-[12px] text-teal">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal animate-pulse2" />
            Connected · Calendar synced
          </div>
        </div>
        <div className="ml-auto">
          <button
            onClick={handleClear}
            title="Clear chat"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-text-muted transition-all duration-200 hover:border-border-light hover:bg-bg-card hover:text-text-primary"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
