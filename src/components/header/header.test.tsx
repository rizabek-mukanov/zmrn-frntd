import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { Header } from './header';

const mock = jest.fn();

describe('header', () => {
  it('renders with username', () => {
    render(
      <Header
        onClick={mock}
        username="JOHN"
      />
    );

    const logoutButton = screen.getByRole('presentation');
    expect(logoutButton).toHaveTextContent('Logout');
    fireEvent.click(logoutButton);
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it('renders without username', () => {
    render(
      <Header
        onClick={mock}
        username={null}
      />
    );
    const logoutButton = screen.getByRole('presentation');
    expect(logoutButton).toHaveTextContent('Login');
  });
});
