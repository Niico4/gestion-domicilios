export enum PaymentType {
  CASH = 'Efectivo',
  CARD = 'Tarjeta',
  BANK_TRANSFER = 'Transferencia',
}

export enum OrderState {
  PENDING = 'Pendiente',
  ON_THE_WAY = 'En camino',
  DELIVERED = 'Entregado',
  CANCELED = 'Cancelado',
}
