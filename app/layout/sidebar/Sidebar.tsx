'use client';

import React from 'react';
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
  Button,
  Card,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IconCaretDown, IconLogout, IconSettings } from '@tabler/icons-react';

import Logo from '@/app/components/shared/Logo';

import LinkItem from '../components/LinkItem';

import { navLinks } from './Sidebar.routes';

const Sidebar = () => {
  const { push } = useRouter();

  const handleSignOut = () => {
    toast.success('Sesión cerrada correctamente');

    setTimeout(() => {
      push('/');
    }, 1000);
  };

  return (
    <aside className="w-full bg-white p-8 rounded-xl flex flex-col gap-52">
      <Logo className="text-[50px]" style={{ WebkitTextStroke: '0px' }} />
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
            <Popover showArrow placement="bottom">
              <PopoverTrigger>
                <div className="flex items-center justify-between cursor-pointer">
                  <User
                    as="button"
                    name="Zoe Lang"
                    description="ADMIN"
                    className="transition-transform"
                    avatarProps={{
                      src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                    }}
                  />
                  <IconCaretDown stroke={1.5} className="text-slate-500" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <Card
                  shadow="none"
                  className="max-w-[300px] border-none bg-transparent"
                >
                  <CardHeader className="justify-between">
                    <div className="flex gap-3">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                      />

                      <div className="flex flex-col items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                          Zoey Lang
                        </h4>
                        <h5 className="text-small tracking-tight text-default-500">
                          @zoeylang
                        </h5>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      color="secondary"
                      variant="light"
                      size="sm"
                      startContent={<IconSettings stroke={1.5} />}
                    >
                      Configuración
                    </Button>

                    <Button
                      color="danger"
                      variant="light"
                      size="sm"
                      onClick={handleSignOut}
                      startContent={<IconLogout size={20} stroke={1.5} />}
                    >
                      Cerrar Sesión
                    </Button>
                  </CardFooter>
                </Card>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
