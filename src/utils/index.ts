import { ChatListItem, Message } from '@/types';

import { chatList } from '@/constants';

export function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

// CRINGE
export const getLatestMessages = (messages: Message[]): ChatListItem[] => {
  const groupedMessages = groupBy(messages, (message: Message) => message.room);

  const latestMessageFromChats = Object.values(groupedMessages).map((msgs) => msgs.at(-1));

  const merged = [];
  for (let i = 0; i < chatList.length; i += 1) {
    const roomHasMessages = latestMessageFromChats.find(
      (message) => message?.room === chatList[i].room
    );
    if (roomHasMessages) {
      merged.push({ ...chatList[i], ...roomHasMessages } as ChatListItem);
    } else {
      merged.push(chatList[i]);
    }
  }
  return merged as ChatListItem[];
};
