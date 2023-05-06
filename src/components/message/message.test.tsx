import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { MessageCmp } from './message';

import { Message } from '@/types';

const mockMessage: Message = {
  text: 'TEST',
  sender: 'bot',
  username: 'TEST',
  room: '123',
  timestamp: 123,
};

describe('message component', () => {
  it('renders', () => {
    const { container } = render(<MessageCmp message={mockMessage} />);
    expect(container).toBeInTheDocument();
  });
});
