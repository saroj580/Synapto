interface ConnectedAppItemProps {
  app: {
    name: string;
    connected: boolean;
    icon: string;
  };
}

export default function ConnectedAppItem({ app }: ConnectedAppItemProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors">
      <span className="text-lg">{app.icon}</span>
      <div className="flex-1">
        <p className="text-xs font-medium text-sidebar-foreground">{app.name}</p>
        <p className="text-xs text-sidebar-foreground/60">
          {app.connected ? 'Connected' : 'Not connected'}
        </p>
      </div>
      <div
        className={`w-2 h-2 rounded-full ${app.connected ? 'bg-green-500' : 'bg-gray-400'}`}
      />
    </div>
  );
}
