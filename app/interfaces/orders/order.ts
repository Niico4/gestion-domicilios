import { Product } from '../products/products';
import { Client } from '../users/client';

export interface Order {
  id: string;
  client: Client;
  products: Product[];
  orderState: OrderState;
  orderDate: Date;
  totalPayment: number;
}

export enum OrderState {
  PENDING = 'Pendiente',
  ORDER_SENT = 'En camino',
  DELIVERED = 'Entregado',
  CANCELED = 'Cancelado',
}
