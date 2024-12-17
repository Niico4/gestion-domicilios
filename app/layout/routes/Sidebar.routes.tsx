import {
  IconClipboardText,
  IconArchive,
  IconMoped,
  IconClipboardData,
} from '@tabler/icons-react';

import { Rol } from '@/app/interfaces/users/user';

export const navLinks = [
  {
    name: 'Domicilios',
    href: '/dashboard/orders',
    icon: IconClipboardText,
    roles: [Rol.ORDER_MANAGER, Rol.DEALER, Rol.ADMIN],
  },
  {
    name: 'Inventario',
    href: '/dashboard/inventory',
    icon: IconArchive,
    roles: [Rol.ADMIN],
  },
  {
    name: 'Repartidores',
    href: '/dashboard/delivery',
    icon: IconMoped,
    roles: [Rol.ADMIN, Rol.DEALER, Rol.ORDER_MANAGER],
  },
  {
    name: 'Reportes',
    href: '/dashboard/reports',
    icon: IconClipboardData,
    roles: [Rol.ADMIN, Rol.ORDER_MANAGER],
  },
];
