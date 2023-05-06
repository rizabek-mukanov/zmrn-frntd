import Image from 'next/image';

interface ChatHeaderProps {
  onClick: () => void;
  name: string | null;
}

export const ChatHeader = ({ name, onClick }: ChatHeaderProps) => (
  <div className="fixed top-23 flex h-19 w-full items-start border-b border-l border-gray bg-white py-2 pl-8 md:h-23">
    <button
      type="button"
      className="md:hidden"
      onClick={onClick}
    >
      <Image
        src="/chevron-left.svg"
        alt="left"
        width={24}
        height={24}
      />
    </button>
    {name ? (
      <div className="ml-4 space-y-0">
        <div
          data-testid="chat-header"
          className="text-lg font-medium"
        >
          {name.toUpperCase()}
        </div>
        <div className="text-base/7 opacity-50">Online</div>
      </div>
    ) : null}
  </div>
);
