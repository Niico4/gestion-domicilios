import { PaymentMethod } from '../payments/payment-method';

import { User } from './user';

export interface Client extends User {
  id: string;
  numberContact: string;
  address: string;
  paymentMethod: PaymentMethod;
}
