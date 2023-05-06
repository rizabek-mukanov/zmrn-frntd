import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest';

import { LoginModal } from './login-modal';

const onChangeMock = jest.fn();
const onSubmitMock = jest.fn();
const closeModalMock = jest.fn();

describe('login modal', () => {
  it('handles submit', () => {
    render(
      <div id="#__next">
        <LoginModal
          show
          closeModal={closeModalMock}
          username="TEST"
          onUsernameChange={onChangeMock}
          onSubmit={onSubmitMock}
        />
      </div>
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
