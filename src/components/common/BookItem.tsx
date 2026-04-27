import { Heart, ShoppingCart } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import type { Book } from '@/types/api/book';
import { useAddToWishList } from '@/features/useAddToWishList';
import { useRemoveFromWishList } from '@/features/useRemoveFromWishList';

interface BookItemProps {
  book: Book;
  onAddToCart?: (id: string) => void;
}

export const BookItem = ({ book, onAddToCart }: BookItemProps) => {
  const { mutateAsync: addToWishList } = useAddToWishList();
  const { mutateAsync: removeFromWishList } = useRemoveFromWishList();

  const handleClickOnHeart = (bookId: string) => {
    if (book.isFavorite) {
      removeFromWishList(bookId);
    } else {
      addToWishList(bookId);
    }
  };

  return (
    <Card className="relative w-48 mt-4 transition hover:shadow-lg hover:-translate-y-1">
      {/* FAVORITE */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleClickOnHeart(book.id)}
            className="absolute right-2 top-2 group"
          >
            <Heart
              className={`
                transition
                stroke-current
                ${book.isFavorite ? 'fill-red-600 stroke-red-600' : 'fill-transparent'}
                group-hover:fill-red-600
                group-hover:stroke-red-600
              `}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {book.isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        </TooltipContent>
      </Tooltip>

      {/* IMAGE */}
      <img
        src={book.imageUrl}
        alt={book.title}
        className="h-40 w-full object-contain p-2"
      />

      {/* INFO */}
      <CardHeader>
        <CardTitle className="line-clamp-2 wrap-break-word">
          {book.title}
        </CardTitle>
        <CardDescription>
          {book.author.firstName} {book.author.lastName}
        </CardDescription>
      </CardHeader>

      {/* FOOTER */}
      <CardFooter className="flex justify-between items-center">
        <span className="text-xl font-semibold">{book.price} $</span>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              onClick={() => onAddToCart?.(book.id)}
              className="bg-amber-400 hover:bg-amber-500 transition-transform hover:rotate-12 duration-500"
            >
              <ShoppingCart />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add book to cart</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};
