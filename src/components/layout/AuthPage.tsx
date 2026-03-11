"use client";

export function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-deep px-4">
      <div className="w-full max-w-sm animate-fade-up rounded-2xl border border-border bg-bg-card p-12 text-center shadow-card backdrop-blur-xl">
        {/* Spinner */}
        <div className="mx-auto mb-5 h-12 w-12 rounded-full border-[3px] border-border border-t-indigo animate-spin" />
        <p className="mb-2 text-[18px] font-semibold text-text-primary">
          Connecting to Google
        </p>
        <p className="text-[14px] text-text-muted">
          Authenticating your account…
        </p>
      </div>
    </div>
  );
}
