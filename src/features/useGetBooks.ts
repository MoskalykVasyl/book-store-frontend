

import api from '@/lib/axios';
import type { Book, PaginatedResponse } from '@/types/api/books-api.type';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useMe } from './useMe';

type GetBooksParams = {
  genre?: string;
  page?: number;
  limit?: number;
};

const getBooksApi = async ({genre, page, limit}: GetBooksParams) => {
  const { data } = await api.get<PaginatedResponse<Book>>('/books', {
    params: {  genre, page, limit },
  });
  return data;
};

export const useGetBooks = (params: GetBooksParams) => {
  const data = useMe();
  const userId = data.data?.data.id ?? 'guest'


  return useQuery({
    queryKey: ['books', {...params, userId}],
    queryFn: () => getBooksApi(params),
    placeholderData: keepPreviousData,
  });
};
