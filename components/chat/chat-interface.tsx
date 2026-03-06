'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, Send, Paperclip, Mic, Download, RotateCcw, Settings as SettingsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatHeader from './chat-header';
import ChatMessages from './chat-messages';
import ChatInput from './chat-input';
import EmptyChatState from './empty-chat-state';

interface ChatInterfaceProps {
  onToggleSidebar: () => void;
  onToggleContextPanel: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export default function ChatInterface({ onToggleSidebar, onToggleContextPanel }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'I can see you have 4 meetings today. Your schedule looks busy in the morning with a team standup at 9 AM and a client call at 10:30 AM. You have about 2 hours of free time this afternoon.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleClearConversation = () => {
    setMessages([]);
  };

  return (
    <div className="flex-1 flex flex-col bg-background border-r border-border">
      {/* Chat Header */}
      <ChatHeader
        onToggleSidebar={onToggleSidebar}
        onClearConversation={handleClearConversation}
        onToggleContextPanel={onToggleContextPanel}
      />

      {/* Chat Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
        {messages.length === 0 ? (
          <EmptyChatState onSuggestionClick={handleSuggestionClick} />
        ) : (
          <ChatMessages messages={messages} isLoading={isLoading} />
        )}
      </div>

      {/* Chat Input */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={() => handleSendMessage(inputValue)}
        isLoading={isLoading}
      />
    </div>
  );
}
