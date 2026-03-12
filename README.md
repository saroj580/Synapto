# Synapto

**Conversational AI for calendar productivity.**

Synapto is a modern AI chat interface that lets you talk to your calendar in plain English. Built with Next.js 14, TypeScript, and Tailwind CSS, it ships with a polished dark-mode UI, mock Google OAuth, and an AI response engine you can swap for any LLM backend.

> Live demo: [v0-synapto-ai-assistant.vercel.app](https://v0-synapto-ai-assistant.vercel.app)

---

## Features

- **Conversational calendar queries** — ask about today's meetings, find free time, get weekly summaries
- **Google Calendar OAuth flow** — simulated, ready to wire up with NextAuth
- **Multi-view dashboard** — Chat, Today, Tomorrow, Week, Insights, Settings
- **Dark-mode design system** — custom CSS tokens, DM Sans + Playfair Display typography
- **Fully typed** — strict TypeScript throughout

---

## Quick start

```bash
# 1. Clone and install
git clone https://github.com/birat04/Synapto.git
cd Synapto
npm install          # or pnpm install

# 2. Copy environment template
cp .env.example .env.local
# Edit .env.local with your credentials (see Environment Variables below)

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
# Google OAuth (required for real auth — see Connecting Google Calendar below)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret          # generate with: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000

# AI provider — pick one
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

The app runs in mock mode without any keys. Only needed when wiring up real auth or AI.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Icons | Lucide React |
| Fonts | DM Sans · Playfair Display · DM Mono |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + font loading
│   ├── page.tsx            # App state machine: landing → auth → welcome → dashboard
│   └── globals.css         # Tailwind base + CSS design tokens
│
├── types/
│   └── index.ts            # All shared TypeScript interfaces
│
├── lib/
│   ├── utils.ts            # cn(), formatTime(), generateId()
│   └── data.ts             # Mock events + AI response engine
│
└── components/
    ├── layout/             # LandingPage, AuthPage, WelcomePage, Sidebar, Dashboard
    ├── chat/               # ChatView, ChatMessage, ChatInput, EventCard, FreeBlockCard
    ├── insights/           # DayViews, WeekView, InsightsView
    └── settings/           # SettingsView
```

---

## User flow

```
Landing  →  [Connect Google Calendar]
    ↓
Auth loading  (simulated OAuth, ~2s)
    ↓
Welcome / onboarding
    ↓
Dashboard
  ├── Chat        ← default — AI conversation interface
  ├── Today       ← today's events as cards
  ├── Tomorrow    ← tomorrow's events
  ├── This Week   ← 5-day overview grid
  ├── Insights    ← analytics + bar chart
  └── Settings    ← account, notifications, preferences
```

---

## AI response patterns

The `getAIResponse()` function in `src/lib/data.ts` handles these query patterns out of the box:

| Query | Response |
|---|---|
| "meetings today" | Today's events as EventCards |
| "meetings tomorrow" | Tomorrow's events as EventCards |
| "next meeting" | Closest upcoming meeting |
| "free friday" / "available" | FreeBlockCard |
| "week" / "overview" | Weekly summary stats |
| "busiest" | Busiest day analysis |
| anything else | Friendly fallback prompt |

---

## Connecting real APIs

### Google Calendar OAuth

Replace the simulated auth in `src/app/page.tsx`:

```bash
npm install next-auth
```

```ts
// src/app/page.tsx
import { signIn } from "next-auth/react";

const handleConnect = () => {
  signIn("google", { callbackUrl: "/dashboard" });
};
```

Create `src/app/api/auth/[...nextauth]/route.ts` and configure the Google provider with your credentials from `.env.local`.

### Real AI responses

Replace `getAIResponse()` in `src/lib/data.ts` with an API route call:

```ts
// src/app/api/chat/route.ts
export async function POST(req: Request) {
  const { message, calendarEvents } = await req.json();

  // Example with Anthropic
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: "You are a helpful calendar assistant. Here are the user's events: " + JSON.stringify(calendarEvents),
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();
  return Response.json({ reply: data.content[0].text });
}
```

---

## Extending the app

### Add a new dashboard view

1. Add the view ID to the `DashboardView` union type in `src/types/index.ts`
2. Add a nav item to `SCHEDULE_NAV` or `ANALYTICS_NAV` in `Sidebar.tsx`
3. Create your component in the appropriate folder under `components/`
4. Add a render case in `Dashboard.tsx`

### Add a new event color

In `src/components/chat/EventCard.tsx`, extend the module-level `colorMap`:

```ts
purple: {
  bar: "bg-purple-500",
  tag: "bg-purple-500/10 border border-purple-500/20",
  tagText: "text-purple-400",
},
```

---

## Scripts

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint check
```

---

## Roadmap

- [ ] Real Google Calendar API integration via NextAuth
- [ ] LLM backend (Claude / GPT) replacing mock `getAIResponse()`
- [ ] Persistent chat history
- [ ] Event creation and editing from chat
- [ ] Mobile responsive layout improvements
- [ ] Unit tests for `getAIResponse()` and utility functions
- [ ] GitHub Actions CI workflow

---

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes and run `npm run lint` before committing
3. Open a pull request with a clear description of what you changed and why

Please follow the existing code style — TypeScript strict mode, Tailwind utility classes, component-level responsibility boundaries.

---

## License

MIT