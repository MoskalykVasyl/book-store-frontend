import api from '@/lib/axios';
import type { Book } from '@/types/api/book';
import { useQuery } from '@tanstack/react-query';

const searchBooksApi = async (keyword: string) => {
  const { data } = await api.get<Omit<Book, 'isFavorite'>[]>('books/search', {
    params: {
      keyword,
    },
  });
  return data;
};

export const useSearchBooks = (keyword: string) => {
  return useQuery({
    queryKey: ['search-books'],
    queryFn: () => searchBooksApi(keyword),
    enabled: keyword.length > 0,
  });
};
