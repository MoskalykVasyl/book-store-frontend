import * as z from 'zod';

export const Genres = [
  'Fantasy',
  'Mystery',
  'Horror',
  'RomanceNovel',
  'Biography',
  'Detective',
] as const;

export const addBookSchema = z.object({
  title: z.string().min(1, 'Title is required!'),
  description: z
    .string()
    .max(200, 'Description must be less than 200 characters!'),
  price: z.number("Please enter a number").positive('Price must be a positive number!'),
  countPage: z.number("Please enter a number").positive('Count of pages must be a positive number!'),
  publicYear: z.number("Please enter a number").positive('Year must be a positive number!'),
  imageUrl: z.string().url('Image URL must be a valid URL!'),
//   authorId: z.string().min(1, 'Author ID is required!'),
  genre: z.enum(
    Genres,
    'Genre must be one of the following: Fantasy, Mystery, Horror, RomanceNovel, Biography, Detective!',
  ),
});

export type AddBookSchema = z.infer<typeof addBookSchema>;
