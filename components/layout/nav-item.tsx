import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export default function NavItem({ icon: Icon, label, active = false }: NavItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        active
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent text-opacity-70 hover:text-opacity-100'
      }`}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
