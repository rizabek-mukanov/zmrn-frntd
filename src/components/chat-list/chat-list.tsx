import { ChatListItem } from '@/types';

import { chatList } from '@/constants';

import { ListItem } from './chat-list-item';

interface ChatListProps {
  onClick: (roomName: string) => void;
  showChat: boolean;
  lastMessages: ChatListItem[];
}

export const ChatList = ({ showChat, onClick, lastMessages }: ChatListProps) => (
  <div
    data-testid="chat-list"
    className={`w-full flex-col md:flex md:w-1/3 ${showChat ? 'hidden' : ''}`}
  >
    <div className="h-23 flex-col border-b border-gray bg-light-gray px-6 py-8 text-2xl/7 font-bold md:flex md:w-full">
      Messages ({chatList.length})
    </div>
    <div
      data-testid="list-wrapper"
      className="flex flex-col"
    >
      {lastMessages.map((message) => (
        <ListItem
          onClick={onClick}
          key={message.room}
          timestamp={message.timestamp}
          room={message.room}
          text={message.text}
        />
      ))}
    </div>
  </div>
);
