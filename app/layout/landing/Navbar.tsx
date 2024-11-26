'use client';

import React, { FC } from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

import Logo from '@/app/components/shared/Logo';

import { routes } from '../routes/landing.routes';

const LinkItem: FC<{ href: string; label: string }> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`text-lg text-slate-200 hover:text-slate-400 transition-all ${isActive && 'text-blue-500 font-bold'}`}
    >
      {label}
    </Link>
  );
};
const NavBar = () => {
  return (
    <nav className="bg-gray-900/40 fixed w-full z-20 top-0 start-0 border-b border-gray-600 backdrop-blur-xl">
      <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#home">
          <Logo className="text-[50px]" style={{ WebkitTextStroke: '0px' }} />
        </Link>
        <div className="flex order-2 rtl:space-x-reverse">
          <Button
            as={Link}
            color="primary"
            className="bg-primary-gradient text-lg text-slate-700 font-semibold"
            href="/auth/"
            endContent={<IconCircleArrowRightFilled />}
          >
            Comenzar
          </Button>
        </div>
        <div
          className="items-center justify-between flex w-auto order-1"
          id="navbar-sticky"
        >
          <ul className="flex font-medium rounded-lg space-x-8 rtl:space-x-reverse">
            {routes.map(({ href, label }, index) => (
              <li key={index}>
                <LinkItem href={href} label={label} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
