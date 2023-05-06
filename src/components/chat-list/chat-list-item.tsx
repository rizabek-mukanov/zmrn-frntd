import { format } from 'date-fns';

import { ChatListItem } from '@/types';

export interface ChatListItemProps extends ChatListItem {
  onClick: (roomName: string) => void;
}

export const ListItem = ({
  room,
  text,
  timestamp,
  onClick,
  unreadMessageAmount,
}: ChatListItemProps) => (
  <div
    role="presentation"
    onClick={() => onClick(room)}
    className="flex h-23 flex-col items-start justify-between border-b border-light-gray px-6 py-4 text-primary hover:cursor-pointer"
  >
    <div className="flex w-full justify-between">
      <h2 className="text-lg font-medium">{room.toUpperCase()}</h2>
      {unreadMessageAmount ? (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
          <p className="text-sm/7 text-white">{unreadMessageAmount}</p>
        </div>
      ) : null}
    </div>
    <div className="flex w-full items-end justify-between">
      {text ? <h4 className="line-clamp-1 text-base/7">{text}</h4> : null}
      {timestamp ? <p className="text-sm/5 opacity-60">{format(timestamp, 'KK:mm')}</p> : null}
    </div>
  </div>
);
