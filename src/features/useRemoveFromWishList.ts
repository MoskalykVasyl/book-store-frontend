import api from '@/lib/axios';
import type { Book } from '@/types/api/book';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

const removeFromWishList = async (bookId: string) => {
  return await api.delete(`/wish-list/books/${bookId}`);
};

export const useRemoveFromWishList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeFromWishList,
    onMutate: async (bookId: string) => {
          await queryClient.cancelQueries({ queryKey: ['books'] });
          const previousBooks = queryClient.getQueryData<Book[]>(['books']);
          //Optimistically update the book's isFavorite status
          queryClient.setQueryData<Book[]>(['books'], (oldBooks) => {
            return oldBooks?.map((book) => {
              return book.id === bookId ? { ...book, isFavorite: false } : book;
            });
          });
    
          return { previousBooks };
        },
    onError: (error, _bookId, context) => {
      queryClient.setQueryData(['books'], context?.previousBooks);
      const err = error as AxiosError;
      if(err.response?.status === 401) {
        toast.error('You need to be logged in to remove books from your wishlist.');
        return;
      }

      console.error('Failed to remove book from wishlist:', error);
  
        
    },
    onSuccess: () => {
      toast.success('Book removed from wishlist successfully!');
    },
    onSettled: (bookId) => {
      queryClient.invalidateQueries({ queryKey: ['wishList']});
      queryClient.invalidateQueries({ queryKey: ['books']});
      queryClient.invalidateQueries({queryKey: ['book', bookId]})
    }
  });
};
