import Image from 'next/image';
import { ChangeEvent, SyntheticEvent, useEffect, useRef } from 'react';

interface MessagePlaceholderProps {
  autoFocus: boolean;
  disabled: boolean;
  text: string;
  onChange: (text: string) => void;
  sendMessage: () => void;
}

export const MessagePlaceholder = ({
  autoFocus,
  disabled,
  onChange,
  sendMessage,
  text,
}: MessagePlaceholderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const hideMobileKeyboard = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    sendMessage();
    hideMobileKeyboard();
  };

  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (autoFocus) {
      focusOnInput();
    }
  }, [autoFocus, sendMessage]);

  return (
    <div
      role="presentation"
      onClick={focusOnInput}
      className="fixed bottom-0 flex h-16 w-full border-x border-t border-gray bg-white px-8 py-5"
    >
      <form
        className="w-full"
        onSubmit={handleSubmit}
      >
        <input
          data-testid="message-input"
          disabled={disabled}
          ref={inputRef}
          value={text}
          onChange={handleChange}
          className="mr-auto w-full text-primary opacity-50 outline-none"
          placeholder={disabled ? 'Login and select chat first' : 'Write a message ...'}
        />
      </form>
      <Image
        className="ml-auto"
        alt="icon"
        src="/letter.svg"
        width={24}
        height={24}
        onClick={sendMessage}
      />
    </div>
  );
};
