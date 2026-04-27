import api from '@/lib/axios';
import type { Book } from '@/types/api/book';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

const addToWishList = async (bookId: string) => {
  return await api.post(`/wish-list/books/${bookId}`);
};

export const useAddToWishList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToWishList,
    onMutate: async (bookId: string) => {
      await queryClient.cancelQueries({ queryKey: ['books'] });
      const previousBooks = queryClient.getQueryData<Book[]>(['books']);
      //Optimistically update the book's isFavorite status
      queryClient.setQueryData<Book[]>(['books'], (oldBooks) => {
        return oldBooks?.map((book) => {
          return book.id === bookId ? { ...book, isFavorite: true } : book;
        });
      });

      return { previousBooks };
    },
    onError: (error, _bookId, context) => {
      queryClient.setQueryData(['books'], context?.previousBooks);

      const err = error as AxiosError;
      if (err.response?.status === 401) {
        toast.error('You need to be logged in to add books to your wishlist.');
        return;
      }

      console.error('Failed to add book to wishlist:', error);
    },
    onSuccess: () => {
      toast.success('Book added to wishlist successfully!');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
