import { z } from 'zod';

export const newProductSchema = z.object({
  nameProduct: z.string().min(1, 'El nombre del producto es requerido'),
  price: z.number().positive('El precio debe ser mayor que cero'),
  quantity: z.number().int().positive('La cantidad debe ser mayor que cero'),
  inStock: z.boolean(),
});

export type NewProductType = z.infer<typeof newProductSchema>;
