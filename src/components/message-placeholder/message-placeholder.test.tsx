import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { MessagePlaceholder } from './message-placeholder';

const mock = jest.fn();
const sendMessageMock = jest.fn();

describe('message-placeholder', () => {
  it('renders disabled input', () => {
    const { container } = render(
      <MessagePlaceholder
        autoFocus
        disabled
        text=""
        onChange={mock}
        sendMessage={sendMessageMock}
      />
    );
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('disabled');
  });
  it('handle input change', () => {
    render(
      <MessagePlaceholder
        autoFocus
        disabled
        text=""
        onChange={mock}
        sendMessage={sendMessageMock}
      />
    );
    const input = screen.getByTestId('message-input');

    fireEvent.change(input, { target: { value: 'doe' } });
    expect(mock).toHaveBeenCalled();
  });
});
