import * as z from 'zod';

export const createAuthorSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  biography: z
    .string()
    .max(200, 'Biography must be less than 200 characters')
    .optional(),
  imageUrl: z.string().url('Invalid URL').optional(),
});

export type CreateAuthorSchema = z.infer<typeof createAuthorSchema>;
