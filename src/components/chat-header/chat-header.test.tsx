import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { ChatHeader } from './chat-header';

const mockOnClick = jest.fn();

describe('render chat header', () => {
  it('with username', () => {
    render(
      <ChatHeader
        name="John"
        onClick={mockOnClick}
      />
    );
    const element = screen.getByTestId('chat-header');
    expect(element).toHaveTextContent('John'.toUpperCase());
  });
  it('handles user click', () => {
    render(
      <ChatHeader
        name="John"
        onClick={mockOnClick}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
