import { Product } from '../products/products';
import { Client } from '../users/client';

import { OrderShipping } from './order-shipping';
import { OrderState } from './order-state';

export interface Order {
  id: string;
  client: Client;
  products: Product[];
  orderState: OrderState;
  orderShipping: OrderShipping;
  totalPayment: number;
}
