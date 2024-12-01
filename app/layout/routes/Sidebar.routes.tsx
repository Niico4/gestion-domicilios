import {
  IconClipboardText,
  IconArchive,
  IconMoped,
  IconClipboardData,
} from '@tabler/icons-react';

export const navLinks = [
  { name: 'Domicilios', href: '/dashboard/orders', icon: IconClipboardText },
  { name: 'Inventario', href: '/dashboard/inventory', icon: IconArchive },
  { name: 'Repartidores', href: '/dashboard/delivery', icon: IconMoped },
  { name: 'Reportes', href: '/dashboard/reports', icon: IconClipboardData },
];
