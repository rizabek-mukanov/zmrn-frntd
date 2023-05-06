import { PropsWithChildren } from 'react';

export interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
  room: string;
  username: string;
}

export interface ChatListItem {
  text?: string;
  room: string;
  timestamp?: number;
  unreadMessageAmount?: number;
}

export interface ModalProps extends PropsWithChildren {
  closeModal: () => void;
  show: boolean;
}
