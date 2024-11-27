import { Inventory } from '../products/inventory';

import { Rol, User } from './user';

export interface Admin extends User {
  rol: Rol.ADMIN;
  inventory: Inventory;
}
