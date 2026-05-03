import { BookList } from '@/components/common/BookList';
import { useGetWishList } from '@/features/useGetWishList';

export const WishlistPage = () => {
  const {data, isLoading} = useGetWishList();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <BookList books={data} />
      )}
    </div>
  );
};
