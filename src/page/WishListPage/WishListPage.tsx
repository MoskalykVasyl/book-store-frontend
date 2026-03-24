
import { BookList } from "@/components/common/BookList";

const mockWishlist = [
  {
    id: 1,
    title: "Game of Thrones",
    author: "George R. R. Martin",
    price: 20,
    image:
      "https://ksd.ua/storage/products/gallery/medium/0QjjMg1C754OAeypQcQBP3BSdX4QyvfDzTANd5ZR.jpg.webp?v=1733324810",
  },
];

export const WishlistPage = () => {
  const wishlist = mockWishlist;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        <BookList books={wishlist} />
      )}
    </div>
  );
};