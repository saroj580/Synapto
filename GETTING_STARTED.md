# Synapto Dashboard - Getting Started

## What's Included

You now have a complete, production-ready AI productivity dashboard with:

### Visual Components ✨
- **Modern three-zone layout** with responsive design
- **AI chat interface** similar to ChatGPT with smooth animations
- **Sidebar navigation** with connected apps status
- **Context panel** showing calendar, insights, and activity
- **Beautiful empty states** with suggestion cards
- **Event cards** for displaying calendar information

### Design System 🎨
- **Custom color palette** with indigo primary and purple accents
- **Smooth animations** and transitions throughout
- **Soft shadows** and rounded corners for a premium feel
- **Typography hierarchy** with Inter font
- **Dark mode support** built-in

### Interactive Features 🎯
- Send and receive messages with typing indicators
- Copy AI responses and provide feedback (thumbs up/down)
- Click suggestion cards to populate the chat
- Toggle sidebar and context panel on mobile
- Responsive drawer panels for small screens
- Smooth hover effects and visual feedback

## Key Features

### 1. Chat Interface
- User messages align right with primary color
- AI messages align left with gradient background
- Action buttons for Open Calendar, Create Reminder
- Message timestamps and interaction buttons
- Loading animation while AI responds

### 2. Sidebar Navigation
- Product logo and branding
- 5 main navigation items with icons
- Quick action buttons (New Conversation, Connect App)
- Connected apps list with status indicators
- User profile dropdown menu

### 3. Context Panel (Desktop)
- Today's calendar events with time indicators
- AI insights about your schedule
- Connected integrations and sync status
- Recent activity feed

### 4. Mobile Responsive
- Collapsible sidebar with overlay
- Context panel as bottom drawer
- Touch-friendly button sizing
- Full-width chat on mobile

## File Structure

```
app/
├── page.tsx              # Main app container
├── globals.css          # Design system & animations
└── layout.tsx           # Root layout

components/
├── layout/              # Navigation & sidebar
├── chat/                # Chat interface & messages
├── context/             # Right panel & widgets
└── ui/                  # shadcn/ui components
```

## Running the App

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Customization Quick Start

### Change Brand Colors
Edit `app/globals.css` `:root` section:
```css
--primary: oklch(0.515 0.15 293);  /* Your color here */
--accent: oklch(0.55 0.14 290);
```

### Update Navigation Items
Edit `components/layout/sidebar.tsx`:
```tsx
const navItems = [
  { icon: MessageSquare, label: 'Chat Assistant', active: true },
  // Add your items here
];
```

### Add Calendar Integration
Replace mock data in `components/context/calendar-snapshot.tsx` with real API calls:
```tsx
const events = await fetchGoogleCalendar(); // Your API call
```

### Customize Chat Suggestions
Edit `components/chat/empty-chat-state.tsx`:
```tsx
const suggestions = [
  {
    emoji: '📅',
    title: 'Your question here',
    description: 'Your description',
  },
];
```

## Component Showcase

### SuggestionCard
Clickable cards for quick actions in the empty state
- Responsive grid layout
- Hover scale effect
- Emoji, title, description

### EventCard
Display calendar events with details
- Time, duration, location
- Participant list
- Quick action buttons
- Colored status indicator

### AIMessage
Structured AI response with rich content
- Gradient background
- Action buttons
- Copy & feedback buttons
- Timestamp

### NavItem
Navigation menu items with active state
- Icon + label
- Active/hover states
- Smooth transitions

## Design Tokens

Key spacing and sizing values:
- **Border radius**: 1rem (16px)
- **Spacing scale**: 4px, 8px, 16px, 24px, 32px
- **Shadow light**: Subtle depth for cards
- **Shadow card**: Elevated for prominent elements
- **Transition duration**: 200-300ms

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Messages are memoized to prevent unnecessary re-renders
2. Lazy load components that are off-screen
3. Use CSS transforms for smooth animations
4. Debounce input handling for better performance

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Next Steps

1. **Connect to Real APIs**
   - Google Calendar API for events
   - Your LLM service for AI responses
   - User authentication

2. **Add More Features**
   - Message persistence
   - User accounts
   - Export conversations
   - Custom themes

3. **Enhance Design**
   - Add more animation effects
   - Create custom icons
   - Expand color palette
   - Build component library

4. **Deploy**
   - Deploy to Vercel (recommended)
   - Add environment variables
   - Set up error tracking
   - Enable analytics

## Support

For detailed documentation, see `SYNAPTO_UI.md`.

## What You Can Build

This foundation supports:
- Multi-user productivity tools
- AI-powered scheduling assistants
- Calendar management dashboards
- Task automation interfaces
- Integration hubs for productivity apps
- Customer-facing SaaS products

Enjoy building with Synapto!
