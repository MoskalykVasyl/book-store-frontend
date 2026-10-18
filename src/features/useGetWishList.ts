import api from "@/lib/axios"
import type { Book } from "@/types/api/books-api.type";

import { useQuery } from "@tanstack/react-query";

const getWishListApi = async() => {
    const {data} = await api.get<Book[]>('/books/wish-list');
    return data;
}

export const useGetWishList = () =>{
    return useQuery({
        queryKey: ['wishList'],
        queryFn: getWishListApi,
    })
}