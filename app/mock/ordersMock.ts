import { Order, OrderState } from '../interfaces/orders/order';
import { PaymentType } from '../interfaces/payments/payment-method';

export const mockOrders: Order[] = [
  {
    id: 'D-1093',
    client: {
      id: 'C-8462',
      firstName: 'Carlos',
      lastName: 'Pérez',
      numberContact: '3101234567',
      email: 'carlos.perez@correo.com',
      address: 'Calle 123 #45-67, Bogotá',
      paymentMethod: {
        paymentType: PaymentType.CASH,
      },
    },
    products: [
      {
        id: 'P-2894',
        nameProduct: 'Pizza Familiar',
        price: 35000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2895',
        nameProduct: 'Coca-Cola 1.5L',
        price: 6000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2896',
        nameProduct: 'Helado de Vainilla',
        price: 12000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.CANCELED,
    totalPayment: 53000,
    orderDate: new Date('2024-11-01'),
  },
  {
    id: 'D-1094',
    client: {
      id: 'C-8463',
      firstName: 'María',
      lastName: 'Gómez',
      numberContact: '3159876543',
      email: 'maria.gomez@correo.com',
      address: 'Carrera 9 #23-45, Medellín',
      paymentMethod: {
        paymentType: PaymentType.CARD,
        cardNumber: '4111111111111111',
        expirationDate: '12/25',
        securityCode: '123',
      },
    },
    products: [
      {
        id: 'P-2897',
        nameProduct: 'Hamburguesa Doble',
        price: 20000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2898',
        nameProduct: 'Papas Fritas',
        price: 8000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2899',
        nameProduct: 'Malteada de Fresa',
        price: 10000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.PENDING,
    totalPayment: 38000,
    orderDate: new Date('2024-11-02'),
  },
  {
    id: 'D-1095',
    client: {
      id: 'C-8464',
      firstName: 'Andrés',
      lastName: 'López',
      numberContact: '3214567890',
      email: 'andres.lopez@correo.com',
      address: 'Avenida Siempreviva 742, Cali',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2900',
        nameProduct: 'Sushi Roll Especial',
        price: 45000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2901',
        nameProduct: 'Té Verde',
        price: 5000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2902',
        nameProduct: 'Tempura Vegetal',
        price: 15000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.DELIVERED,
    totalPayment: 65000,
    orderDate: new Date('2024-11-03'),
  },
  {
    id: 'D-1096',
    client: {
      id: 'C-8465',
      firstName: 'Lucía',
      lastName: 'Ramírez',
      numberContact: '3106543210',
      email: 'lucia.ramirez@correo.com',
      address: 'Calle 10 #12-34, Bogotá',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2903',
        nameProduct: 'Pizza Margarita',
        price: 25000,
        quantity: 2,
        inStock: true,
      },
      {
        id: 'P-2904',
        nameProduct: 'Coca-Cola 2L',
        price: 7000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 57000,
    orderDate: new Date('2024-11-04'),
  },
  {
    id: 'D-1097',
    client: {
      id: 'C-8466',
      firstName: 'Pedro',
      lastName: 'Hernández',
      numberContact: '3209876543',
      email: 'pedro.hernandez@correo.com',
      address: 'Avenida 40 #15-20, Medellín',
      paymentMethod: {
        paymentType: PaymentType.CARD,
        cardNumber: '5222222222222222',
        expirationDate: '09/26',
        securityCode: '321',
      },
    },
    products: [
      {
        id: 'P-2905',
        nameProduct: 'Hamburguesa Clásica',
        price: 15000,
        quantity: 2,
        inStock: true,
      },
      {
        id: 'P-2906',
        nameProduct: 'Papas Deluxe',
        price: 12000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.PENDING,
    totalPayment: 54000,
    orderDate: new Date('2024-11-05'),
  },
  {
    id: 'D-1098',
    client: {
      id: 'C-8467',
      firstName: 'Ana',
      lastName: 'Pérez',
      numberContact: '3198765432',
      email: 'ana.perez@correo.com',
      address: 'Calle 25 #10-50, Cali',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2907',
        nameProduct: 'Pizza Vegetariana',
        price: 22000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2908',
        nameProduct: 'Jugo Natural',
        price: 6000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.DELIVERED,
    totalPayment: 28000,
    orderDate: new Date('2024-11-06'),
  },
  {
    id: 'D-1099',
    client: {
      id: 'C-8468',
      firstName: 'Marta',
      lastName: 'Sanchez',
      numberContact: '3154321098',
      email: 'marta.sanchez@correo.com',
      address: 'Calle 4 #30-10, Bogotá',
      paymentMethod: {
        paymentType: PaymentType.BANK_TRANSFER,
        accountNumber: '1234567890',
      },
    },
    products: [
      {
        id: 'P-2909',
        nameProduct: 'Pizza de Jamón',
        price: 27000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2910',
        nameProduct: 'Refresco Naranja',
        price: 5000,
        quantity: 2,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 37000,
    orderDate: new Date('2024-11-07'),
  },
  {
    id: 'D-1100',
    client: {
      id: 'C-8469',
      firstName: 'Luis',
      lastName: 'Torres',
      numberContact: '3145432109',
      email: 'luis.torres@correo.com',
      address: 'Calle 15 #5-20, Medellín',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2911',
        nameProduct: 'Sushi de Atún',
        price: 40000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2912',
        nameProduct: 'Sopa Miso',
        price: 12000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.CANCELED,
    totalPayment: 52000,
    orderDate: new Date('2024-11-08'),
  },
  {
    id: 'D-1101',
    client: {
      id: 'C-8470',
      firstName: 'Felipe',
      lastName: 'Gutiérrez',
      numberContact: '3123456789',
      email: 'felipe.gutierrez@correo.com',
      address: 'Calle 50 #15-25, Bogotá',
      paymentMethod: {
        paymentType: PaymentType.CARD,
        cardNumber: '4111111111111111',
        expirationDate: '01/25',
        securityCode: '456',
      },
    },
    products: [
      {
        id: 'P-2913',
        nameProduct: 'Ensalada César',
        price: 15000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2914',
        nameProduct: 'Limonada',
        price: 5000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.PENDING,
    totalPayment: 20000,
    orderDate: new Date('2024-11-09'),
  },
  {
    id: 'D-1102',
    client: {
      id: 'C-8471',
      firstName: 'Laura',
      lastName: 'Mendoza',
      numberContact: '3136549870',
      email: 'laura.mendoza@correo.com',
      address: 'Calle 80 #21-34, Bogotá',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2915',
        nameProduct: 'Pizza Napolitana',
        price: 28000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2916',
        nameProduct: 'Agua Mineral',
        price: 3000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.DELIVERED,
    totalPayment: 31000,
    orderDate: new Date('2024-11-10'),
  },
  {
    id: 'D-1103',
    client: {
      id: 'C-8472',
      firstName: 'Ricardo',
      lastName: 'Alvarado',
      numberContact: '3206543210',
      email: 'ricardo.alvarado@correo.com',
      address: 'Calle 13 #25-10, Medellín',
      paymentMethod: { paymentType: PaymentType.CARD },
    },
    products: [
      {
        id: 'P-2917',
        nameProduct: 'Hamburguesa BBQ',
        price: 22000,
        quantity: 2,
        inStock: true,
      },
      {
        id: 'P-2918',
        nameProduct: 'Papas Fritas con Queso',
        price: 10000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 54000,
    orderDate: new Date('2024-11-11'),
  },
  {
    id: 'D-1104',
    client: {
      id: 'C-8473',
      firstName: 'Carolina',
      lastName: 'Vargas',
      numberContact: '3119876543',
      email: 'carolina.vargas@correo.com',
      address: 'Calle 4 #45-30, Cali',
      paymentMethod: {
        paymentType: PaymentType.BANK_TRANSFER,
        accountNumber: '9876543210',
      },
    },
    products: [
      {
        id: 'P-2919',
        nameProduct: 'Sushi Roll Clásico',
        price: 35000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2920',
        nameProduct: 'Té Matcha',
        price: 8000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.CANCELED,
    totalPayment: 43000,
    orderDate: new Date('2024-11-12'),
  },
  {
    id: 'D-1105',
    client: {
      id: 'C-8474',
      firstName: 'Javier',
      lastName: 'Rojas',
      numberContact: '3186543210',
      email: 'javier.rojas@correo.com',
      address: 'Avenida 10 #20-50, Bogotá',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2921',
        nameProduct: 'Pizza Hawaiana',
        price: 25000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2922',
        nameProduct: 'Refresco Cola',
        price: 6000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.PENDING,
    totalPayment: 31000,
    orderDate: new Date('2024-11-13'),
  },
  {
    id: 'D-1106',
    client: {
      id: 'C-8475',
      firstName: 'David',
      lastName: 'Paredes',
      numberContact: '3195432109',
      email: 'david.paredes@correo.com',
      address: 'Calle 18 #10-20, Medellín',
      paymentMethod: {
        paymentType: PaymentType.CARD,
        cardNumber: '5123456789012345',
        expirationDate: '04/26',
        securityCode: '654',
      },
    },
    products: [
      {
        id: 'P-2923',
        nameProduct: 'Taco de Carne',
        price: 15000,
        quantity: 2,
        inStock: true,
      },
      {
        id: 'P-2924',
        nameProduct: 'Guacamole',
        price: 5000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 35000,
    orderDate: new Date('2024-11-14'),
  },
  {
    id: 'D-1107',
    client: {
      id: 'C-8476',
      firstName: 'Valentina',
      lastName: 'González',
      numberContact: '3154321098',
      email: 'valentina.gonzalez@correo.com',
      address: 'Carrera 12 #15-30, Bogotá',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2925',
        nameProduct: 'Ensalada Griega',
        price: 18000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2926',
        nameProduct: 'Jugo de Naranja',
        price: 4000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.CANCELED,
    totalPayment: 22000,
    orderDate: new Date('2024-11-15'),
  },
  {
    id: 'D-1108',
    client: {
      id: 'C-8477',
      firstName: 'Mónica',
      lastName: 'Hernández',
      numberContact: '3101239876',
      email: 'monica.hernandez@correo.com',
      address: 'Calle 30 #12-45, Medellín',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2927',
        nameProduct: 'Pizza Pepperoni',
        price: 26000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2928',
        nameProduct: 'Papas Fritas',
        price: 7000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.PENDING,
    totalPayment: 33000,
    orderDate: new Date('2024-11-16'),
  },
  {
    id: 'D-1109',
    client: {
      id: 'C-8478',
      firstName: 'Juan',
      lastName: 'Martínez',
      numberContact: '3209876543',
      email: 'juan.martinez@correo.com',
      address: 'Carrera 7 #18-20, Cali',
      paymentMethod: { paymentType: PaymentType.CARD },
    },
    products: [
      {
        id: 'P-2929',
        nameProduct: 'Hot Dog Clásico',
        price: 15000,
        quantity: 2,
        inStock: true,
      },
      {
        id: 'P-2930',
        nameProduct: 'Refresco Limón',
        price: 4000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 34000,
    orderDate: new Date('2024-11-17'),
  },
  {
    id: 'D-1110',
    client: {
      id: 'C-8479',
      firstName: 'Ricardo',
      lastName: 'Lozano',
      numberContact: '3148765432',
      email: 'ricardo.lozano@correo.com',
      address: 'Avenida 15 #32-10, Bogotá',
      paymentMethod: {
        paymentType: PaymentType.BANK_TRANSFER,
        accountNumber: '123123123',
      },
    },
    products: [
      {
        id: 'P-2931',
        nameProduct: 'Ensalada de Atún',
        price: 20000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2932',
        nameProduct: 'Jugo de Piña',
        price: 6000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.DELIVERED,
    totalPayment: 26000,
    orderDate: new Date('2024-11-18'),
  },
  {
    id: 'D-1111',
    client: {
      id: 'C-8480',
      firstName: 'Sandra',
      lastName: 'Pérez',
      numberContact: '3189876543',
      email: 'sandra.perez@correo.com',
      address: 'Calle 50 #35-40, Medellín',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2933',
        nameProduct: 'Spaghetti Bolognesa',
        price: 27000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2934',
        nameProduct: 'Limonada Natural',
        price: 5000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 32000,
    orderDate: new Date('2024-11-19'),
  },
  {
    id: 'D-1112',
    client: {
      id: 'C-8481',
      firstName: 'Carlos',
      lastName: 'Torres',
      numberContact: '3198765432',
      email: 'carlos.torres@correo.com',
      address: 'Avenida 5 #50-50, Bogotá',
      paymentMethod: {
        paymentType: PaymentType.CARD,
        cardNumber: '5398765432109876',
        expirationDate: '03/25',
        securityCode: '786',
      },
    },
    products: [
      {
        id: 'P-2935',
        nameProduct: 'Pechuga a la Parrilla',
        price: 23000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2936',
        nameProduct: 'Ensalada de Verduras',
        price: 8000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.PENDING,
    totalPayment: 31000,
    orderDate: new Date('2024-11-20'),
  },
  {
    id: 'D-1113',
    client: {
      id: 'C-8482',
      firstName: 'Alejandra',
      lastName: 'Sánchez',
      numberContact: '3157654321',
      email: 'alejandra.sanchez@correo.com',
      address: 'Calle 40 #12-18, Cali',
      paymentMethod: { paymentType: PaymentType.CASH },
    },
    products: [
      {
        id: 'P-2937',
        nameProduct: 'Tacos de Pollo',
        price: 20000,
        quantity: 2,
        inStock: true,
      },
      {
        id: 'P-2938',
        nameProduct: 'Sopa de Pollo',
        price: 12000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.ORDER_SENT,
    totalPayment: 44000,
    orderDate: new Date('2024-11-21'),
  },
  {
    id: 'D-1114',
    client: {
      id: 'C-8483',
      firstName: 'Mauricio',
      lastName: 'García',
      numberContact: '3191234567',
      email: 'mauricio.garcia@correo.com',
      address: 'Carrera 9 #24-11, Medellín',
      paymentMethod: { paymentType: PaymentType.CARD },
    },
    products: [
      {
        id: 'P-2939',
        nameProduct: 'Ensalada de Pollo',
        price: 23000,
        quantity: 1,
        inStock: true,
      },
      {
        id: 'P-2940',
        nameProduct: 'Jugo de Durazno',
        price: 5000,
        quantity: 1,
        inStock: true,
      },
    ],
    orderState: OrderState.DELIVERED,
    totalPayment: 28000,
    orderDate: new Date('2024-11-22'),
  },
];
