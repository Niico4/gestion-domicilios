import { z } from 'zod';

export const newOrderSchema = z.object({
  clientName: z
    .string()
    .trim()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
    .max(50, { message: 'El nombre no puede tener más de 50 caracteres.' })
    .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, {
      message: 'El nombre solo puede contener letras y espacios.',
    }),
  numberContact: z
    .string()
    .trim()
    .regex(/^\d{7,15}$/, {
      message: 'El número de contacto debe contener entre 7 y 15 dígitos.',
    }),
  direction: z
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
});

export type NewOrderType = z.infer<typeof newOrderSchema>;
