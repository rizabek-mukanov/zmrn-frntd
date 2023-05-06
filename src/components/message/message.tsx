import { Message } from '@/types';

export const MessageCmp = ({ message }: { message: Message }) => (
  <div
    className={`w-fit max-w-4/5 break-words rounded-2xl px-6 py-4 md:max-w-1/2 ${
      message.sender === 'bot'
        ? 'self-start bg-white text-primary'
        : 'self-end bg-primary text-white'
    }`}
  >
    {message.text}
  </div>
);
