import { Domicilie } from '../orders/domicilie';

import { Rol, User } from './user';

export interface Dealer extends User {
  rol: Rol.DEALER;
  domicilie: Domicilie[];
}
