import Image from 'next/image';

import { memo } from 'react';

interface HeaderProps {
  onClick: () => void;
  username: string | null;
}

const HeaderCmp = ({ onClick, username }: HeaderProps) => (
  <div className="flex h-23 w-full justify-between border-b border-gray bg-white p-6">
    <Image
      src="/logo.svg"
      height={42}
      width={146}
      alt="logo"
    />
    <div className="space-y-0 hover:cursor-pointer">
      {username ? <div className="text-lg text-primary">{username}</div> : null}
      <div
        role="presentation"
        onClick={onClick}
        className="text-base/7 opacity-50"
      >
        {username ? 'Logout' : 'Login'}
      </div>
    </div>
  </div>
);

export const Header = memo(HeaderCmp);
