import { z } from 'zod';

import { Rol } from '@/app/interfaces/users/user';

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
      .max(20, { message: 'El nombre no puede tener más de 20 caracteres.' }),
    lastName: z
      .string()
      .min(3, { message: 'El apellido debe tener al menos 3 caracteres.' })
      .max(20, { message: 'El apellido no puede tener más de 20 caracteres.' }),
    email: z
      .string()
      .email({ message: 'Introduce un correo electrónico válido.' }),
    password: z
      .string()
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
      .max(20, {
        message: 'La contraseña no puede exceder los 20 caracteres.',
      })
      .regex(/[A-Z]/, {
        message: 'La contraseña debe incluir al menos una letra mayúscula.',
      })
      .regex(/[a-z]/, {
        message: 'La contraseña debe incluir al menos una letra minúscula.',
      })
      .regex(/[0-9]/, {
        message: 'La contraseña debe incluir al menos un número.',
      })
      .regex(/[\W_]/, {
        message: 'La contraseña debe incluir al menos un símbolo.',
      }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Debes confirmar tu contraseña.' }),
    rol: z.enum(Object.values(Rol) as [Rol, ...Rol[]], {
      message: 'Debes elegir un rol.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas deben coincidir',
    path: ['confirmPassword'],
  });

export type SignUpType = z.infer<typeof signUpSchema>;
