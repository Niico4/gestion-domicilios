import { PaymentMethod } from '../payments/payment-method';

import { User } from './user';

export interface Client extends User {
  address: string;
  paymentMethod: PaymentMethod;
}
