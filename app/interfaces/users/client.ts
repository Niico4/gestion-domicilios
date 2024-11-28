import { PaymentMethod } from '../payments/payment-method';

import { Rol, User } from './user';

export interface Client extends User {
  rol: Rol.CUSTOMER;
  address: string;
  paymentMethod: PaymentMethod;
}
