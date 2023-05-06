import { ChangeEvent, FormEvent } from 'react';

import { Modal } from '@/components';
import { ModalProps } from '@/types';

interface LoginModalProps extends ModalProps {
  closeModal: () => void;
  show: boolean;
  username: string;
  onUsernameChange: (name: string) => void;
  onSubmit: (username: string) => void;
}

export const LoginModal = ({
  closeModal,
  show,
  username,
  onUsernameChange,
  onSubmit,
}: LoginModalProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onUsernameChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username);
  };

  return (
    <Modal
      show={show}
      closeModal={closeModal}
    >
      <h4 className="text-xl text-white">So, who are you?</h4>
      <form
        className="mt-4 flex flex-col space-y-4 text-white"
        onSubmit={handleSubmit}
      >
        <input
          data-testid="login-input"
          className="h-10 rounded px-4 py-6 text-primary outline-none"
          value={username}
          onChange={handleChange}
          placeholder="A Man Needs a Name"
        />
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};
