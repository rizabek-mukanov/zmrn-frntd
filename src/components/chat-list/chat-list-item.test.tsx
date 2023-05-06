import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { ListItem } from './chat-list-item';

const mockOnClick = jest.fn();

describe('render chat list item', () => {
  it('with empty chats', () => {
    const { container } = render(
      <ListItem
        room="TEST"
        onClick={mockOnClick}
      />
    );
    const roomName = container.querySelector('div > h2');
    expect(roomName).toHaveTextContent('TEST');
  });
  it('with non-empty chats', () => {
    const { container } = render(
      <ListItem
        room="TEST"
        onClick={mockOnClick}
        text="HELLO"
        timestamp={1683399405027}
      />
    );
    const parentEl = screen.getByRole('presentation');
    const roomName = container.querySelector('div > h2');
    const time = container.querySelector('div > p');
    const lastMessage = container.querySelector('div > h4');

    expect(roomName).toHaveTextContent('TEST');
    expect(time).toBeInTheDocument();
    expect(lastMessage).toHaveTextContent('HELLO');
    fireEvent.click(parentEl);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
