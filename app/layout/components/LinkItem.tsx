'use client';

import { Icon } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  name: string;
  href: string;
  icon: Icon;
}

const LinkItem: FC<Props> = ({ name, href, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  const classesLink = twMerge(
    'flex items-center gap-2 py-4 px-6 rounded-xl text-lg transition-all',
    isActive &&
      'bg-primary-gradient text-purple-100 font-semibold tracking-wider text-slate-900',
    !isActive && 'hover:text-slate-900/80 hover:bg-neutral-300/30',
  );

  return (
    <Link href={href} className={classesLink}>
      <Icon
        stroke={isActive ? 2 : 1}
        className={` ${isActive ? 'text-slate-900' : 'hover:text-slate-900/80'}`}
      />
      {name}
    </Link>
  );
};

export default LinkItem;
