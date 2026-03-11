"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { getTheme, applyTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  /** "icon" = compact icon-only button (for landing/header)
   *  "row"  = full labeled row (for settings)  */
  variant?: "icon" | "row";
}

export function ThemeToggle({ variant = "icon" }: ThemeToggleProps) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = getTheme();
    setThemeState(saved);
    applyTheme(saved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    applyTheme(next);
  };

  // Avoid hydration mismatch
  if (!mounted) return null;

  if (variant === "row") {
    return (
      <button
        onClick={toggle}
        className={cn(
          "flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px] font-medium",
          "transition-all duration-200",
          "border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)]",
          "hover:border-[var(--border-light)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
        )}
      >
        {theme === "dark" ? (
          <>
            <Sun size={14} />
            <span>Switch to Light</span>
          </>
        ) : (
          <>
            <Moon size={14} />
            <span>Switch to Dark</span>
          </>
        )}
      </button>
    );
  }

  // icon variant — compact, for landing / header
  return (
    <button
      onClick={toggle}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border",
        "transition-all duration-200",
        "border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)]",
        "hover:border-[var(--border-light)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
      )}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
