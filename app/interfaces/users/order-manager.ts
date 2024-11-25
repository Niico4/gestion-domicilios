import { Rol, User } from './user';

export interface OrderManager extends User {
  rol: Rol.ORDER_MANAGER;
}
