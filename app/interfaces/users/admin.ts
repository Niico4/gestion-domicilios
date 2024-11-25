import { Rol, User } from './user';

export interface Admin extends User {
  //   inventory: Inventory;
  rol: Rol.ADMIN;
}
