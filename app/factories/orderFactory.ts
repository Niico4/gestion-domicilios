import { Order, OrderState } from '../interfaces/orders/order';
import { PaymentType } from '../interfaces/payments/payment-method';
import { Rol } from '../interfaces/users/user';

export const OrderFactory = {
  createNewOrder: (): Order => ({
    id: '',
    client: {
      id: '',
      rol: Rol.CUSTOMER,
      firstName: '',
      lastName: '',
      numberContact: '',
      email: '',
      password: '',
      address: '',
      paymentMethod: {
        paymentType: PaymentType.CASH,
        accountNumber: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
      },
    },
    products: [],
    orderDate: new Date(),
    orderState: OrderState.PENDING,
    totalPayment: 0,
  }),
};
