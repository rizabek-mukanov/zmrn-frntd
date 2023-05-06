import { useEffect, useRef } from 'react';

import { Message as ChatMessage } from '@/components';
import { Message } from '@/types';

interface MessageProps {
  currentRoom: string | null;
  messages: Message[];
}

export const Messages = ({ currentRoom, messages }: MessageProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentRoom, messages]);

  if (!currentRoom || messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center border-l border-gray bg-secondary text-center">
        Wow.. Such empty.
      </div>
    );
  }

  const currentRoomMessages = messages.filter(
    (message) => message.room.toLowerCase() === currentRoom.toLowerCase()
  );

  return (
    <div
      data-testid="messages"
      className="scrollbar-none flex h-full w-full flex-col space-y-6 overflow-y-scroll border-l border-gray bg-secondary p-6 text-white"
    >
      {currentRoomMessages.map((message) => (
        <ChatMessage
          message={message}
          key={message.timestamp}
        />
      ))}
      <div
        className="!m-0"
        ref={lastMessageRef}
      />
    </div>
  );
};
