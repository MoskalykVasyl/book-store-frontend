import * as z from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email('Incorect email!'),
    displayName: z.string().min(3, 'Min length must be 3!'),
    password: z.string().min(6, 'Min length must be 6!'),
    confirmPassword: z.string().min(1, 'Confirm the password!'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password does not match!',
    path: ['confirmPassword'],
  });

  export type RegisterSchema = z.infer<typeof registerSchema>
