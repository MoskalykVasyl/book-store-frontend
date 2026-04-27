import type { Book } from "@/types/api/book";
import { BookItem } from "./BookItem"

interface BookListProps {
  books: Book[] | undefined;
  onAddToCart?: (id: string) => void;
}



export const BookList = ({
  books,
  onAddToCart,
}: BookListProps) => {
  return (
    <div className="flex justify-center gap-5 w-full flex-wrap">
      {books?.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
