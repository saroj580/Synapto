import { Menu, Download, RotateCcw, Settings as SettingsIcon, PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onToggleSidebar: () => void;
  onClearConversation: () => void;
  onToggleContextPanel?: () => void;
}

export default function ChatHeader({ onToggleSidebar, onClearConversation, onToggleContextPanel }: ChatHeaderProps) {
  return (
    <div className="border-b border-border px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="md:hidden text-foreground hover:bg-secondary/50"
        >
          <Menu size={20} />
        </Button>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Workspace</h2>
          <p className="text-xs text-muted-foreground">Synapto AI • Online</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearConversation}
          className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          title="Clear conversation"
        >
          <RotateCcw size={18} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          title="Export conversation"
        >
          <Download size={18} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleContextPanel}
          className="lg:hidden text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          title="Toggle context panel"
        >
          <PanelRight size={18} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          title="Settings"
        >
          <SettingsIcon size={18} />
        </Button>
      </div>
    </div>
  );
}
