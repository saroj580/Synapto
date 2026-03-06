'use client';

import { X, Bell, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-2xl shadow-lg max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Settings</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="divide-y divide-border max-h-96 overflow-y-auto">
            {/* Notifications */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-primary" />
                <h3 className="font-medium text-foreground">Notifications</h3>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-foreground">Email notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-foreground">Meeting reminders</span>
              </label>
            </div>

            {/* Privacy */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-primary" />
                <h3 className="font-medium text-foreground">Privacy</h3>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-foreground">Save conversation history</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-foreground">Allow data analytics</span>
              </label>
            </div>

            {/* Performance */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-primary" />
                <h3 className="font-medium text-foreground">Performance</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">AI Response Speed</p>
                <select className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground">
                  <option>Balanced</option>
                  <option>Fast</option>
                  <option>Detailed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
