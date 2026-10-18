export type Genre =
  | 'Fantasy'
  | 'Mystery'
  | 'Horror'
  | 'RomanceNovel'
  | 'Biography'
  | 'Detective';

export type Author = {
  id: string;
  firstName: string;
  lastName: string;
  biography: string | null;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Book = {
  id: string;
  title: string;
  price: number;
  countPage: number;
  genre: Genre;
  publicYear: string; 
  description: string;
  imageUrl: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  isFavorite: boolean;
};

export type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type PaginatedResponse<T> = {
  items: T[];
  meta: PaginationMeta;
};