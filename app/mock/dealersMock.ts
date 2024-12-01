import { Domicilie } from '../interfaces/orders/domicilie';
import { Dealer } from '../interfaces/users/dealer';
import { Rol } from '../interfaces/users/user';
import { generateDomicilieID } from '../utils/generateID';

export const mockDealers: Dealer[] = [
  {
    id: 'R-1365',
    firstName: 'Juan',
    lastName: 'Pérez',
    numberContact: '3001234567',
    email: 'juan.perez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(3),
  },
  {
    id: 'R-2355',
    firstName: 'María',
    lastName: 'Gómez',
    numberContact: '3101234567',
    email: 'maria.gomez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(5),
  },
  {
    id: 'R-7567',
    firstName: 'Carlos',
    lastName: 'López',
    numberContact: '3202345678',
    email: 'carlos.lopez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(2),
  },
  {
    id: 'R-3525',
    firstName: 'Ana',
    lastName: 'Martínez',
    numberContact: '3303456789',
    email: 'ana.martinez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(0),
  },
  {
    id: 'R-6786',
    firstName: 'Luis',
    lastName: 'Rodríguez',
    numberContact: '3404567890',
    email: 'luis.rodriguez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(7),
  },
  {
    id: 'R-3435',
    firstName: 'Sofía',
    lastName: 'Ramírez',
    numberContact: '3505678901',
    email: 'sofia.ramirez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(1),
  },
  {
    id: 'R-9090',
    firstName: 'Andrés',
    lastName: 'Torres',
    numberContact: '3606789012',
    email: 'andres.torres@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(4),
  },
  {
    id: 'R-7865',
    firstName: 'Paula',
    lastName: 'Castro',
    numberContact: '3707890123',
    email: 'paula.castro@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(6),
  },
  {
    id: 'R-6567',
    firstName: 'Miguel',
    lastName: 'Vega',
    numberContact: '3808901234',
    email: 'miguel.vega@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(2),
  },
  {
    id: 'R-1466',
    firstName: 'Camila',
    lastName: 'Hernández',
    numberContact: '3909012345',
    email: 'camila.hernandez@example.com',
    rol: Rol.DEALER,
    domicilie: generateDomicilies(8),
  },
];

function generateDomicilies(count: number): Domicilie[] {
  return Array.from({ length: count }, () => ({
    id: generateDomicilieID(),
    orders: [],
  }));
}
