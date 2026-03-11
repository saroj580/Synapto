# Synapto AI Productivity Dashboard - UI Documentation

## Overview

Synapto is a modern, production-ready AI productivity assistant dashboard built with **Next.js 16**, **React 19**, **TailwindCSS**, and **shadcn/ui**. It provides a ChatGPT-like interface for managing productivity tools like Google Calendar through natural language conversations.

## Architecture

### Layout Structure

The application uses a **three-zone responsive layout**:

```
┌─────────────────────────────────────────────────┐
│ Sidebar (20%) │ Chat Interface (60%) │ Context Panel (20%) │
└─────────────────────────────────────────────────┘
```

**Responsive Behavior:**
- **Desktop (lg+)**: All three zones visible side-by-side
- **Tablet (md-lg)**: Sidebar collapsible via hamburger menu
- **Mobile (sm)**: Sidebar and context panel become drawer overlays; chat interface remains primary focus

### Component Organization

```
components/
├── layout/
│   ├── sidebar.tsx              # Main navigation sidebar
│   ├── synapto-logo.tsx         # Branded logo component
│   ├── nav-item.tsx             # Navigation menu item
│   └── connected-app-item.tsx   # App status indicator
├── chat/
│   ├── chat-interface.tsx       # Main chat container
│   ├── chat-header.tsx          # Header with controls
│   ├── chat-messages.tsx        # Message display area
│   ├── chat-input.tsx           # Input field + controls
│   ├── empty-chat-state.tsx     # Initial state with suggestions
│   ├── suggestion-card.tsx      # Clickable suggestion card
│   ├── event-card.tsx           # Calendar event display
│   ├── ai-message.tsx           # Structured AI response
│   └── structured-response.tsx  # Data visualization component
└── context/
    ├── context-panel.tsx        # Right sidebar panel
    ├── calendar-snapshot.tsx    # Today's schedule widget
    ├── ai-insight-panel.tsx     # AI insights display
    ├── connected-apps-widget.tsx # Integration status
    ├── recent-activity.tsx      # Activity feed
    └── mobile-context-drawer.tsx # Mobile context panel
```

## Design System

### Color Palette

**Light Theme (Default):**
- **Primary**: Indigo (`oklch(0.515 0.15 293)`) - Main brand color
- **Background**: Light gray (`oklch(0.985 0.002 0)`)
- **Cards**: Pure white (`oklch(1 0 0)`)
- **Accent**: Purple/Indigo gradient for AI responses
- **Borders**: Soft gray (`oklch(0.93 0.008 0)`)

**Dark Theme:**
- **Primary**: Brighter indigo for contrast
- **Background**: Very dark gray (`oklch(0.11 0.01 0)`)
- **Cards**: Dark gray (`oklch(0.15 0.01 0)`)

### Typography

- **Font Family**: Inter (via Next.js default fonts)
- **Heading**: Bold, clear hierarchy
- **Body**: Regular weight, 14px minimum, 1.5 line-height
- **Small**: 12px for captions and hints

### Spacing & Rounding

- **Radius**: 1rem (16px) default
- **Spacing**: 4px, 8px, 16px, 24px, 32px
- **Gaps**: Consistent spacing between elements

### Shadows

- **Soft**: `shadow-sm-light` for subtle depth
- **Card**: `shadow-card` for prominent elements
- **Hover**: Elevated shadow on interactive elements

## Key Components

### Sidebar

**Features:**
- Product branding with logo and tagline
- Navigation menu with icons (5 main items)
- Quick action buttons for new conversation and connecting apps
- Connected apps status indicator with sync times
- User profile dropdown with profile/settings/logout options

**Interactive Elements:**
- Active nav item highlighting
- Hover state feedback
- Profile dropdown menu
- Mobile hamburger toggle

### Chat Interface

**Features:**
- Conversational message bubbles (user right-aligned, AI left-aligned)
- AI icon with gradient background
- Typing indicator with animated dots
- Suggestion cards for empty state
- Quick action buttons inside AI responses (Open Calendar, Create Reminder)
- Message timestamps and interaction buttons (copy, thumbs up/down)

**Input Area:**
- Large textarea with placeholder
- Send button (disabled when empty)
- Voice input button
- Attach context button
- Helper text about app access

### Context Panel

**Widgets:**
1. **Calendar Snapshot**: Shows today's events with time blocks and free time indicators
2. **AI Insights**: Cards displaying intelligent observations about schedule
3. **Connected Apps**: Integration status with last sync times
4. **Recent Activity**: Feed of system actions with timestamps

**Mobile**: Converts to drawer overlay with backdrop

## Interactive Features

### Animations

- **Fade In**: Messages appear with smooth fade-in on send
- **Slide Up**: Cards and suggestions slide up on page load
- **Pulse**: Subtle breathing animation for AI indicator
- **Hover Scale**: Suggestion cards grow 2% on hover
- **Transitions**: All interactive elements have 200-300ms smooth transitions

### State Management

The app uses React hooks for client-side state:
- `messages`: Array of chat messages
- `inputValue`: Current input text
- `isLoading`: AI response loading state
- `isSidebarOpen`: Sidebar visibility (mobile)
- `isContextPanelOpen`: Context panel visibility (mobile)

### User Interactions

1. **Click Suggestion**: Populates and sends message
2. **Send Message**: Adds user message, triggers AI simulation, displays response
3. **Copy Message**: Copies AI response to clipboard
4. **Rate Response**: Thumbs up/down for feedback (visual only)
5. **Toggle Panels**: Header buttons to show/hide sidebar and context panel
6. **Profile Menu**: Click user profile for settings/logout options

## Responsive Design

### Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Mobile Optimizations

1. **Sidebar**: Becomes fixed overlay, hamburger menu toggle in header
2. **Context Panel**: Drawer overlay with backdrop, toggled via header button
3. **Chat**: Full-width, primary focus on mobile
4. **Input**: Optimized for touch with larger touch targets
5. **Spacing**: Adjusted for smaller screens

## Customization

### Changing Colors

Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.515 0.15 293); /* Change to your brand color */
  --accent: oklch(0.55 0.14 290);
  /* ... other colors */
}
```

### Adding Navigation Items

Edit `/components/layout/sidebar.tsx`:
```tsx
const navItems = [
  { icon: YourIcon, label: 'Your Item', active: false },
  // ...
];
```

### Customizing Calendar Events

Edit `/components/context/calendar-snapshot.tsx` to connect to real calendar data:
```tsx
const events = await fetchCalendarEvents(); // Replace mock data
```

## Performance Considerations

- Component lazy loading for off-screen content
- Memoized message list to prevent unnecessary re-renders
- Debounced input handling
- Optimized animations using CSS transforms
- Soft shadows instead of blur for better performance

## Accessibility

- Semantic HTML structure (`main`, `header`, `aside`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA+)
- Screen reader friendly messages

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Real calendar API integration (Google Calendar, Outlook)
- Voice input processing
- Message persistence
- User authentication
- Custom themes
- Export conversation as PDF
- Real-time collaborative features
- Advanced scheduling UI

## Development

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm start
```

### Deploy

Ready for deployment to Vercel:
```bash
vercel deploy
```

## License

All rights reserved. This is a custom application for Synapto.
