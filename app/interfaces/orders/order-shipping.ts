import { Dealer } from '../users/dealer';

export interface OrderShipping {
  id: string;
  address: string;
  dealer: Dealer;
}
