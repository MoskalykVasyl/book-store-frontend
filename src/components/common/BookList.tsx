import type { Book } from "@/types/api/book";
import { BookItem } from "./BookItem"

interface BookListProps {
  books: Book[] | undefined;
  onToggleFavorite?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}



export const BookList = ({
  books,
  onToggleFavorite,
  onAddToCart,
}: BookListProps) => {
  return (
    <div className="flex justify-center gap-5 w-full flex-wrap">
      {books?.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
