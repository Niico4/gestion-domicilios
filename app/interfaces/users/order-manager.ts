import { Domicilie } from '../orders/domicilie';

import { Dealer } from './dealer';
import { Rol, User } from './user';

export interface OrderManager extends User {
  rol: Rol.ORDER_MANAGER;
  domicilie: Domicilie[];
  dealer: Dealer;
}
