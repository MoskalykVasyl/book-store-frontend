import { Genres } from '@/components/forms/AddBookForm/schema';

type Author = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type Book = {
  id: string;
  title: string;
  price: number;
  countPage: number;
  genre: typeof Genres;
  publicYear: string;
  description: string;
  imageUrl: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  isFavorite?: boolean;
};

export interface CartItem extends Pick<Book, 'id' | 'title' | 'price' | 'imageUrl'>  {
  quantity: number;
}