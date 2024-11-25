import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { IconPlayerPlay } from '@tabler/icons-react';

import Logo from '@/app/components/shared/Logo';

const NavBar = () => {
  return (
    <Navbar className="bg-transparent">
      <NavbarContent>
        <NavbarBrand>
          <Logo className="text-[50px]" style={{ WebkitTextStroke: '0px' }} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            className="bg-primary-gradient text-lg"
            href="/auth/"
            endContent={<IconPlayerPlay stroke={1.5} />}
          >
            Empezar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
