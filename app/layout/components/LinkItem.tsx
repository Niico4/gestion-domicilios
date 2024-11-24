'use client';

import { Icon } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
  name: string;
  href: string;
  icon: Icon;
}

const LinkItem: FC<Props> = ({ name, href, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 py-4 px-6 rounded-xl text-lg text-slate-900 transition-all
        ${isActive && 'bg-primary-gradient text-purple-100 font-semibold tracking-wider'} ${!isActive && 'hover:text-slate-900/80 hover:bg-neutral-300/30'}`}
    >
      <Icon
        stroke={isActive ? 2 : 1}
        className={` ${isActive ? 'text-slate-900' : 'hover:text-slate-900/80'}`}
      />
      {name}
    </Link>
  );
};

export default LinkItem;
