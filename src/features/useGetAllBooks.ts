
import api from '@/lib/axios';
import type { Book } from '@/types/api/book';
import { useQuery } from '@tanstack/react-query';

const getAllBooksApi = async () => {
  const { data } = await api.get<Book[]>('/books/get-all');
  return data;
};

// all book for unauthenticated users, for first time loading
export const useGetAllBooks = () => {
  return useQuery({
    queryKey: ['books-all',],
    queryFn: getAllBooksApi,
  });
};
