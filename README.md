# Synapto — Conversational AI for Productivity

A modern AI chat interface for calendar management built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Layer       | Choice                                       |
|-------------|----------------------------------------------|
| Framework   | Next.js 14 (App Router)                      |
| Language    | TypeScript (strict mode)                     |
| Styling     | Tailwind CSS v3 + custom design tokens       |
| Icons       | Lucide React                                 |
| Fonts       | DM Sans · Playfair Display · DM Mono (Google)|

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + font loading
│   ├── page.tsx            # App state controller (landing → auth → welcome → dashboard)
│   └── globals.css         # Tailwind base + CSS custom properties
│
├── types/
│   └── index.ts            # All TypeScript interfaces (Message, CalendarEvent, User…)
│
├── lib/
│   ├── utils.ts            # cn(), formatTime(), generateId()
│   └── data.ts             # Mock events, AI response engine, suggestions
│
└── components/
    ├── layout/
    │   ├── LandingPage.tsx  # Hero page with Google OAuth CTA
    │   ├── AuthPage.tsx     # Loading spinner during auth
    │   ├── WelcomePage.tsx  # First-time onboarding screen
    │   ├── Sidebar.tsx      # Navigation sidebar
    │   └── Dashboard.tsx    # Two-column dashboard shell
    │
    ├── chat/
    │   ├── ChatView.tsx     # Full chat interface with message state
    │   ├── ChatMessage.tsx  # Message bubble + TypingIndicator
    │   ├── ChatInput.tsx    # Textarea + suggestion chips + send button
    │   ├── EventCard.tsx    # Calendar event display card
    │   └── FreeBlockCard.tsx # Free time block display
    │
    ├── insights/
    │   ├── DayViews.tsx     # TodayView + TomorrowView
    │   ├── WeekView.tsx     # 5-day week grid
    │   └── InsightsView.tsx # Analytics cards + bar chart
    │
    └── settings/
        └── SettingsView.tsx # Account, notifications, preferences
```

---

## Pages & User Flow

```
Landing → [Connect Google Calendar]
    ↓
Auth Loading (2s simulated OAuth)
    ↓
Welcome / Onboarding (first-time)
    ↓
Dashboard
  ├── Chat        ← Default view — AI conversation
  ├── Today       ← Today's events
  ├── Tomorrow    ← Tomorrow's events
  ├── This Week   ← 5-day overview grid
  ├── Insights    ← Analytics cards + bar chart
  └── Settings    ← Account, notifications, preferences
```

---

## AI Chat Features

The `getAIResponse()` function in `src/lib/data.ts` handles these query patterns:

| Query Pattern               | Response                          |
|-----------------------------|-----------------------------------|
| "meetings today"            | Today's 3 events as cards         |
| "meetings tomorrow"         | Tomorrow's 4 events as cards      |
| "next meeting"              | Closest upcoming meeting          |
| "free friday / available"   | Free time block card              |
| "week / overview"           | Weekly summary stats              |
| "busiest"                   | Busiest day analysis              |
| Anything else               | Friendly fallback prompt          |

---

## Design System

### Colors (CSS variables)
```css
--bg-deep:       #0a0d14    /* Page background */
--bg-mid:        #0f1320    /* Sidebar */
--bg-card:       rgba(255,255,255,0.04)  /* Cards */
--indigo:        #6366f1    /* Primary accent */
--indigo-light:  #818cf8    /* Active states */
--teal:          #2dd4bf    /* Positive / free time */
--amber:         #fbbf24    /* External / warnings */
--text-primary:  #f0f2f8
--text-secondary: #8b92a8
--text-muted:    #525a70
```

### Typography
- **Display**: Playfair Display (headings, logo)
- **Body**: DM Sans (UI text, buttons)
- **Mono**: DM Mono (timestamps, code chips)

---

## Connecting Real APIs

### Google Calendar OAuth

Replace the simulated auth in `src/app/page.tsx`:

```ts
// Install: npm install next-auth
import { signIn } from "next-auth/react";

const handleConnect = () => {
  signIn("google", { callbackUrl: "/dashboard" });
};
```

Add to `next.config.js`:
```js
// Configure NextAuth with Google provider
// Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.local
```

### Real AI Responses

Replace `getAIResponse()` in `src/lib/data.ts` with an API call:

```ts
// src/app/api/chat/route.ts
export async function POST(req: Request) {
  const { message, calendarEvents } = await req.json();
  // Call OpenAI / Claude / Gemini with calendar context
  // Return structured response with events array
}
```

---

## Environment Variables

```env
# .env.local
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# AI provider (pick one)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

---

## Extending the App

### Add a new nav view

1. Add the view ID to `DashboardView` type in `src/types/index.ts`
2. Add a nav item to the `SCHEDULE_NAV` or `ANALYTICS_NAV` array in `Sidebar.tsx`
3. Create your component in the appropriate folder
4. Add a render case in `Dashboard.tsx`

### Add a new event color

In `src/components/chat/EventCard.tsx`, extend the `colorMap`:

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
