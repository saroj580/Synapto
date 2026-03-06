import { Button } from '@/components/ui/button';

export default function ConnectedAppsWidget() {
  const apps = [
    { name: 'Google Calendar', status: 'Connected', icon: '📅', lastSync: '2 min ago' },
    { name: 'Notion', status: 'Connected', icon: '📝', lastSync: '5 min ago' },
    { name: 'Slack', status: 'Not connected', icon: '💬', lastSync: null },
  ];

  return (
    <div className="space-y-3 pt-4 border-t border-border">
      <h3 className="text-sm font-semibold text-foreground">Connected Apps</h3>

      <div className="space-y-2">
        {apps.map((app) => (
          <div key={app.name} className="p-3 bg-card border border-border rounded-lg flex items-center gap-3">
            <span className="text-lg">{app.icon}</span>
            <div className="flex-1">
              <p className="text-xs font-medium text-foreground">{app.name}</p>
              <p className="text-xs text-muted-foreground">
                {app.status === 'Connected' ? `${app.lastSync}` : 'Not connected'}
              </p>
            </div>
            <div className={`w-2 h-2 rounded-full ${app.status === 'Connected' ? 'bg-green-500' : 'bg-gray-400'}`} />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        className="w-full text-xs border-border hover:bg-secondary/50"
      >
        Manage Integrations
      </Button>
    </div>
  );
}
