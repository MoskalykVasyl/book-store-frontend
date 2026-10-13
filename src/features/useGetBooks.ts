import { useAuth } from '@/context/AuthContext';
import api from '@/lib/axios';
import type { Book } from '@/types/api/book';
import { useQuery } from '@tanstack/react-query';

const getBooksApi = async (genre?: string) => {
  const url = `/books${genre ? `?genre=${genre}` : '/get-all'}`;
  const { data } = await api.get<Book[]>(url);
  return data;
};

export const useGetBooks = (genre?: string) => {
    const {token, isAuthLoading} = useAuth();

  return useQuery({
    queryKey: ['books', genre || 'all', token ? 'auth' : 'guest'],
    queryFn: ()=> getBooksApi(genre),
    enabled: !isAuthLoading,
  });
};
