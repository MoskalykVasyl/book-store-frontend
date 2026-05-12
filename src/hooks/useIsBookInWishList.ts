import { useGetWishList } from "@/features/useGetWishList"

export const useIsBookInWishList = (bookId: string) => {
    const {data} = useGetWishList();
    return data?.some(book => book.id === bookId) ?? false;
}