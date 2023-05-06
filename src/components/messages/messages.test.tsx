import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { Messages } from './messages';
import { Message } from '@/types';

const mockMessages: Message[] = [
  { text: 'asd', sender: 'user', timestamp: 1231231233212, room: 'qwe', username: 'JOHN' },
];

describe('message component', () => {
  it('renders with empty', () => {
    const { container } = render(
      <Messages
        currentRoom={null}
        messages={mockMessages}
      />
    );
    expect(container).toHaveTextContent('Wow.. Such empty.');
  });
});
