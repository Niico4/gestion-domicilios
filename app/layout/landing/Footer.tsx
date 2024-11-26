import React from 'react';
import Link from 'next/link';

import Logo from '@/app/components/shared/Logo';

import { routes } from '../routes/landing.routes';

const Footer = () => {
  return (
    <footer className="rounded-lg shadow bg-gray-900/40">
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <div className="flex items-center justify-between">
          <article>
            <Link href="#home">
              <Logo
                className="text-[50px]"
                style={{ WebkitTextStroke: '0px' }}
              />
            </Link>
          </article>
          <ul className="flex justify-center items-center gap-4 text-lg font-medium text-gray-400">
            {routes.map(({ href, label }, index) => (
              <li key={index}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 mx-auto border-gray-700" />
        <span className="block text-md text-center text-gray-400">
          © {new Date().getFullYear()} DomiSys™. Derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
