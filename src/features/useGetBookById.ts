import api from "@/lib/axios"
import type { Book } from "@/types/api/book";
import { useQuery } from "@tanstack/react-query";

const getBookByIdApi = async(bookId: string) => {
    const {data} = await api.get<Omit<Book, 'isFavorite'>>(`/books/by-id/${bookId}`);
    return data;
}

export const useGetBookById = (bookId: string) => {
    return useQuery({
        queryKey: ['book', bookId],
        queryFn: () => getBookByIdApi(bookId),
        enabled: !!bookId,
    })
}