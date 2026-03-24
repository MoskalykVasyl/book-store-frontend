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

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  isFavorite?: boolean;
};

interface BookItemProps {
  book: Book;
  onToggleFavorite?: (id: number) => void;
  onAddToCart?: (id: number) => void;
}

export const BookItem = ({
  book,
  onToggleFavorite,
  onAddToCart,
}: BookItemProps) => {
  return (
    <Card className="relative w-48 mt-4 transition hover:shadow-lg hover:-translate-y-1">
      
      {/* FAVORITE */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleFavorite?.(book.id)}
            className="absolute right-2 top-2 group"
          >
            <Heart
              className={`
                transition
                stroke-current
                ${book.isFavorite ? "fill-red-600 stroke-red-600" : "fill-transparent"}
                group-hover:fill-red-600
                group-hover:stroke-red-600
              `}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {book.isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        </TooltipContent>
      </Tooltip>

      {/* IMAGE */}
      <img
        src={book.image}
        alt={book.title}
        className="h-40 w-full object-contain p-2"
      />

      {/* INFO */}
      <CardHeader>
        <CardTitle className="line-clamp-2 wrap-break-word">
          {book.title}
        </CardTitle>
        <CardDescription>{book.author}</CardDescription>
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
