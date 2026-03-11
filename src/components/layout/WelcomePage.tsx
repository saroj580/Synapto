"use client";

import type { User } from "@/types";

const PROMPT_EXAMPLES = [
  "What meetings do I have today?",
  "Am I free tomorrow afternoon?",
  "When is my next meeting?",
  "How busy is my week?",
];

interface WelcomePageProps {
  user: User;
  onStart: () => void;
}

export function WelcomePage({ user, onStart }: WelcomePageProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-deep px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(99,102,241,0.18)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-[480px] animate-fade-up rounded-3xl border border-border-light bg-bg-card p-12 text-center shadow-card shadow-glow backdrop-blur-xl">
        {/* Avatar */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-user text-[28px] shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
          ✦
        </div>

        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-indigo-light">
          Hello there
        </p>

        <h1 className="font-display mb-3 text-[36px] font-medium leading-none tracking-tight text-text-primary">
          {user.name}
        </h1>

        <p className="mb-8 text-[15px] leading-relaxed text-text-secondary">
          Welcome to Synapto. Your calendar is connected and ready.
        </p>

        {/* Prompt examples */}
        <div className="mb-8 rounded-xl border border-border bg-black/25 px-5 py-4 text-left">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-text-muted">
            Try asking things like
          </p>
          {PROMPT_EXAMPLES.map((p) => (
            <div
              key={p}
              className="flex items-center gap-2.5 border-b border-border py-2 text-[14px] text-text-secondary last:border-b-0"
            >
              <span className="text-[12px] text-indigo-light">→</span>
              {p}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="group relative w-full overflow-hidden rounded-xl bg-indigo py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#5153d8] hover:shadow-indigo-glow hover:-translate-y-px active:translate-y-0"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 to-transparent" />
          Start Chatting ✦
        </button>
      </div>
    </div>
  );
}
