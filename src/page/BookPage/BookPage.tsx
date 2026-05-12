// import { useParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useAddToWishList } from '@/features/useAddToWishList';
import { useGetBookById } from '@/features/useGetBookById';
import { useRemoveFromWishList } from '@/features/useRemoveFromWishList';
import { useIsBookInCart } from '@/hooks/useIsBookInCart';
import { useIsBookInWishList } from '@/hooks/useIsBookInWishList';
import { Heart, ShoppingCart } from 'lucide-react';
import { useParams } from 'react-router';

export const BookPage = () => {
  const { id } = useParams();
  const bookId = id ?? '';
  const { mutateAsync: addToWishList } = useAddToWishList();
  const { mutateAsync: removeFromWishList } = useRemoveFromWishList();
  const { addToCart } = useCart();

  const bookData = useGetBookById(bookId);
  const isInCart = useIsBookInCart(bookId);
  const isInWishList = useIsBookInWishList(bookId);

  if (!bookData.data) {
    return <div>Book not found!</div>;
  }

  const handleClickOnHeart = (bookId: string) => {
    if (isInWishList) {
      removeFromWishList(bookId);
    } else {
      addToWishList(bookId);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT - IMAGE */}
          <div className="flex justify-center items-start">
            <img
              src={bookData.data?.imageUrl}
              alt="Book cover"
              className="w-full max-w-sm object-contain rounded-xl shadow"
            />
          </div>

          {/* RIGHT - INFO */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              {bookData.data?.title}
            </h1>

            <p className="text-muted-foreground">
              {bookData.data?.author.firstName} {bookData.data?.author.lastName}
            </p>

            <div className="text-2xl font-semibold">
              {bookData.data?.price} $
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-2">
              <Button
                className={`flex gap-2 cursor-pointer ${isInCart ? 'bg-green-600 text-white' : ''}`}
                onClick={() =>
                  addToCart({
                    id: bookData.data.id,
                    title: bookData.data.title,
                    price: bookData.data.price,
                    imageUrl: bookData.data.imageUrl,
                    quantity: 1,
                  })
                }
              >
                <ShoppingCart className="w-4 h-4" />
                {isInCart ? 'In Cart' : 'Add to Cart'}
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer"
                onClick={() => handleClickOnHeart(bookId)}
              >
                <Heart
                  className={`
                w-5 h-5
                transition
                stroke-current
                ${isInWishList ? 'fill-red-600 stroke-red-600' : 'fill-transparent'}
                group-hover:fill-red-600
                group-hover:stroke-red-600
              `}
                />
              </Button>
            </div>

            {/* DESCRIPTION */}
            <Card className="mt-4">
              <CardContent className="p-4 text-sm leading-relaxed text-muted-foreground">
                {bookData.data?.description}
              </CardContent>
            </Card>

            {/* EXTRA INFO */}
            <div className="text-sm space-y-1">
              <p>
                <span className="font-medium">Genre:</span>{' '}
                {bookData.data?.genre}
              </p>
              <p>
                <span className="font-medium">Pages:</span>{' '}
                {bookData.data?.countPage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
