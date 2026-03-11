"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface LandingPageProps {
  onConnect: () => void;
}

const EXAMPLE_QUERIES = [
  '"What meetings do I have today?"',
  '"Am I free Friday afternoon?"',
  '"When is my next meeting?"',
];

export function LandingPage({ onConnect }: LandingPageProps) {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      {/* ── Theme toggle top-right ── */}
      <div className="absolute top-5 right-6 z-20">
        <ThemeToggle variant="icon" />
      </div>

      {/* Background radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.22)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_80%,rgba(45,212,191,0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_90%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[620px] text-center animate-fade-up-slow">
        {/* Badge */}
        <div
          className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-indigo/30 bg-indigo-subtle px-4 py-1.5 text-[12px] font-medium uppercase tracking-widest"
          style={{ color: "var(--indigo-light, #818cf8)" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal animate-pulse2" />
          Now in Beta
        </div>

        {/* Logo */}
        <h1 className="font-display text-[clamp(52px,8vw,80px)] font-medium leading-none tracking-[-2px] mb-5 bg-gradient-display bg-clip-text text-transparent">
          Synapto
        </h1>

        {/* Tagline */}
        <p
          className="mb-4 text-[18px] font-light italic"
          style={{ color: "var(--text-secondary)" }}
        >
          Conversational AI for Productivity
        </p>

        {/* Description */}
        <p
          className="mx-auto mb-10 max-w-[440px] text-[15px] leading-[1.7]"
          style={{ color: "var(--text-muted)" }}
        >
          Stop navigating dashboards. Just ask. Synapto connects to your
          calendar and lets you manage your schedule through natural
          conversation.
        </p>

        {/* Example chips */}
        <div className="mb-11 flex flex-wrap justify-center gap-2">
          {EXAMPLE_QUERIES.map((q) => (
            <span
              key={q}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-1.5 font-mono text-[13px] transition-all duration-200 hover:border-indigo/40 hover:bg-indigo-subtle hover:text-indigo-light cursor-default"
              style={{ color: "var(--text-secondary)" }}
            >
              {q}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onConnect}
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-indigo px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#5153d8] hover:shadow-indigo-glow hover:-translate-y-px active:translate-y-0"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" />
          <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-white">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
              <path
                d="M12 5c1.617 0 3.077.565 4.215 1.491l3.088-3.088C17.465 1.273 14.858 0 12 0 7.318 0 3.258 2.665 1.226 6.567l3.582 2.783C5.81 6.727 8.706 5 12 5z"
                fill="#EA4335"
              />
              <path
                d="M23.714 12.274c0-.836-.076-1.641-.212-2.417H12v4.572h6.588c-.285 1.534-1.152 2.836-2.451 3.709l3.786 2.944C21.997 18.895 23.714 15.83 23.714 12.274z"
                fill="#4285F4"
              />
              <path
                d="M4.808 14.35A7.108 7.108 0 0 1 4.5 12c0-.813.14-1.6.308-2.35L1.226 6.867A11.99 11.99 0 0 0 0 12c0 1.928.462 3.749 1.226 5.383l3.582-3.033z"
                fill="#FBBC05"
              />
              <path
                d="M12 24c2.858 0 5.458-1.004 7.474-2.619l-3.786-2.944C14.5 19.405 13.295 19.714 12 19.714c-3.294 0-6.19-1.727-7.192-4.35L1.226 18.397C3.258 22.135 7.318 24 12 24z"
                fill="#34A853"
              />
            </svg>
          </span>
          Connect Google Calendar
        </button>
      </div>
    </div>
  );
}
