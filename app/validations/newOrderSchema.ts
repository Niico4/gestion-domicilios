import { z } from 'zod';

import { PaymentType } from '@/app/interfaces/payments/payment-method';

import { OrderState } from '../interfaces/orders/order';

export const newOrderSchema = z.object({
  client: z.object({
    firstName: z
      .string()
      .trim()
      .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
      .max(50, { message: 'El nombre no puede tener más de 50 caracteres.' })
      .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, {
        message: 'El nombre solo puede contener letras y espacios.',
      }),
    lastName: z
      .string()
      .trim()
      .min(3, { message: 'El apellido debe tener al menos 3 caracteres.' })
      .max(50, { message: 'El apellido no puede tener más de 50 caracteres.' })
      .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, {
        message: 'El apellido solo puede contener letras y espacios.',
      }),
    numberContact: z
      .string()
      .trim()
      .regex(/^\+?\d{7,15}$/, {
        message: 'El número de contacto debe contener entre 7 y 15 dígitos.',
      }),
    address: z
      .string()
      .trim()
      .min(5, { message: 'La dirección debe tener al menos 5 caracteres.' })
      .max(100, {
        message: 'La dirección no puede exceder los 100 caracteres.',
      }),
    paymentMethod: z.object({
      paymentType: z.enum(Object.values(PaymentType) as [string, ...string[]]),
      accountNumber: z.string().optional(),
      cardNumber: z.string().optional(),
      expirationDate: z.string().optional(),
      securityCode: z.string().optional(),
    }),
  }),
  products: z
    .string()
    .trim()
    .min(1, { message: 'Debes especificar al menos un producto.' })
    .max(500, {
      message:
        'La descripción de los productos no puede exceder los 500 caracteres.',
    })
    .transform((value) => {
      const productNames = value
        .split(', ')
        .map((name) => name.trim())
        .filter((name) => name.length > 0);
      return productNames.map((name) => ({ nameProduct: name }));
    }),
  // products: z.object({
  //   nameProduct: z
  //     .string()
  //     .min(1, { message: 'El nombre del producto no puede estar vacío.' }),
  //   quantity: z
  //     .number()
  //     .min(1, { message: 'La cantidad debe ser al menos 1.' }),
  //   price: z
  //     .number()
  //     .positive({ message: 'El precio debe ser mayor a 0.' }),
  // }),
  orderState: z.enum(Object.values(OrderState) as [string, ...string[]]),
  totalPayment: z
    .number()
    .positive({ message: 'El monto debe ser mayor a 0.' })
    .max(999999.99, { message: 'El monto no puede exceder 999,999.99.' }),
});

export type NewOrderType = z.infer<typeof newOrderSchema>;
