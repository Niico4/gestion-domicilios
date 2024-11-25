export interface Order {
  id: string;
  clientName: string;
  numberContact: string;
  direction: string;
  products: string[];
  paymentType: string;
  orderState: string;
}
