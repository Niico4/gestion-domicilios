'use client';

import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';

import Logo from '@/app/components/Logo';

import LinkItem from '../components/LinkItem';

import { navLinks } from './Sidebar.routes';

const Sidebar = () => {
  const { push } = useRouter();

  const handleSignOut = () => {
    toast.success('Sesión cerrada correctamente');

    setTimeout(() => {
      push('/auth');
    }, 1000);
  };

  return (
    <aside className="w-full bg-slate-100 p-8 rounded-xl flex flex-col gap-52">
      <Logo
        className="text-[50px]"
        style={{ WebkitTextStroke: '2px #c176fe' }}
      />
      <nav className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-2">
          {navLinks.map(({ name, href, icon }, index) => (
            <li key={index}>
              <LinkItem href={href} name={name} icon={icon} />
            </li>
          ))}
        </ul>
        <ul className="w-full">
          <li>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="flat"
                  color="secondary"
                  size="lg"
                  fullWidth
                  startContent={<IconSettings stroke={1.5} />}
                >
                  Configuración
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                variant="flat"
                color="secondary"
              >
                <DropdownItem
                  key="profile"
                  href="/profile"
                  startContent={<IconUser size={20} stroke={1.5} />}
                >
                  Perfil
                </DropdownItem>
                <DropdownItem
                  key="sign-out"
                  className="text-danger"
                  color="danger"
                  onClick={handleSignOut}
                  startContent={<IconLogout size={20} stroke={1.5} />}
                >
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
