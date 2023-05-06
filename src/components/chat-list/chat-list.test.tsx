import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { ChatList } from './chat-list';

const mockChatList = [
  {
    text: 'HELLO',
    room: 'ROOM 1',
    timestamp: 123,
    unreadMessageAmount: 1,
  },
  {
    text: 'HELLO',
    room: 'ROOM 2',
    timestamp: 123,
    unreadMessageAmount: 2,
  },
  {
    text: 'HELLO',
    room: 'ROOM 3',
    timestamp: 123,
    unreadMessageAmount: 3,
  },
];

const mockOnClick = jest.fn();

describe('chat list', () => {
  it('renders list of chats', () => {
    render(
      <ChatList
        showChat
        onClick={mockOnClick}
        lastMessages={mockChatList}
      />
    );
    const chatList = screen.getByTestId('chat-list');
    expect(chatList).toBeInTheDocument();
    const chatListWrapper = screen.getByTestId('list-wrapper');
    expect(chatListWrapper.children).toHaveLength(3);
  });
});
