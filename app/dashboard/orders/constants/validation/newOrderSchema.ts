import { z } from 'zod';

import { PaymentType } from '@/app/interfaces/payments/payment-method';
import { OrderState } from '@/app/interfaces/orders/order-state';

export const newOrderSchema = z.object({
  clientFirstName: z
    .string()
    .trim()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
    .max(50, { message: 'El nombre no puede tener más de 50 caracteres.' })
    .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, {
      message: 'El nombre solo puede contener letras y espacios.',
    }),
  clientLastName: z
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
    .regex(/^\d{7,15}$/, {
      message: 'El número de contacto debe contener entre 7 y 15 dígitos.',
    }),
  address: z
    .string()
    .trim()
    .min(5, { message: 'La dirección debe tener al menos 5 caracteres.' })
    .max(100, { message: 'La dirección no puede exceder los 100 caracteres.' }),
  products: z
    .string()
    .trim()
    .min(1, { message: 'Debes especificar al menos un producto.' })
    .max(500, {
      message:
        'La descripción de los productos no puede exceder los 500 caracteres.',
    }),
  dealerFirstName: z
    .string()
    .trim()
    .min(3, {
      message: 'El nombre del repartidor debe tener al menos 3 caracteres.',
    })
    .max(50, {
      message: 'El nombre del repartidor no puede tener más de 50 caracteres.',
    })
    .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, {
      message:
        'El nombre del repartidor solo puede contener letras y espacios.',
    }),
  dealerLastName: z
    .string()
    .trim()
    .min(3, {
      message: 'El apellido del repartidor debe tener al menos 3 caracteres.',
    })
    .max(50, {
      message:
        'El apellido del repartidor no puede tener más de 50 caracteres.',
    })
    .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, {
      message:
        'El apellido del repartidor solo puede contener letras y espacios.',
    }),
  totalPayment: z
    .number()
    .positive({ message: 'El monto debe ser mayor a 0.' })
    .max(999999.99, { message: 'El monto no puede exceder 999,999.99.' }),
  paymentType: z
    .array(z.enum(Object.values(PaymentType) as [string, ...string[]]))
    .min(1, { message: 'Debe seleccionar al menos un tipo de pago.' })
    .max(1, { message: 'Solo se puede seleccionar un tipo de pago.' }),
  orderState: z
    .array(z.enum(Object.values(OrderState) as [string, ...string[]]))
    .min(1, { message: 'Debe seleccionar al menos un estado.' })
    .max(1, { message: 'Solo se puede seleccionar un estado.' }),
});

export type NewOrderType = z.infer<typeof newOrderSchema>;
