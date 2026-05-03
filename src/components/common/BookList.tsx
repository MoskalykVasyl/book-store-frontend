import type { Book } from "@/types/api/book";
import { BookItem } from "./BookItem"

interface BookListProps {
  books: Book[] | undefined;
}



export const BookList = ({
  books
}: BookListProps) => {
  return (
    <div className="flex justify-center gap-5 w-full flex-wrap">
      {books?.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
};
