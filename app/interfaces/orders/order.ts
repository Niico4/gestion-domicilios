import { Product } from '../products/products';
import { Client } from '../users/client';

import { OrderState } from './order-state';

export interface Order {
  id: string;
  client: Client;
  products: Product[];
  orderState: OrderState;
  orderDate: Date;
  totalPayment: number;
}
