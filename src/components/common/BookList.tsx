import { BookItem, type Book } from "./BookItem"

interface BookListProps {
  books: Book[];
  onToggleFavorite?: (id: number) => void;
  onAddToCart?: (id: number) => void;
}



export const BookList = ({
  books,
  onToggleFavorite,
  onAddToCart,
}: BookListProps) => {
  return (
    <div className="flex justify-center gap-5 w-full flex-wrap">
      {books.map((book) => (
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
