export interface PaymentMethod {
  paymentType: PaymentType;
  accountNumber?: string;
  cardNumber?: string;
  expirationDate?: string;
  securityCode?: string;
}

export enum PaymentType {
  CASH = 'Efectivo',
  CARD = 'Tarjeta',
  BANK_TRANSFER = 'Transferencia bancaria',
}
