import { BookList } from "@/components/common/BookList";

export const mockBooks: Book[] = [
  {
    id: 1,
    title: "Game of Thrones",
    author: "George R. R. Martin",
    price: 20,
    image: "https://ksd.ua/storage/products/gallery/medium/0QjjMg1C754OAeypQcQBP3BSdX4QyvfDzTANd5ZR.jpg.webp?v=1733324810",
    isFavorite: true,
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15,
    image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 12,
    image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
    isFavorite: true,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 14,
    image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 18,
    image: "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg",
  },
  {
    id: 6,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    price: 25,
    image: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
    isFavorite: true,
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 17,
    image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 13,
    image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
  },
  {
    id: 9,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 16,
    image: "https://images-na.ssl-images-amazon.com/images/I/91A0+W7r7LL.jpg",
  },
  {
    id: 10,
    title: "A very very very long book title that should break into multiple lines instead of stretching the card UI",
    author: "Test Author",
    price: 22,
    image: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
  },
];

export const Home = () => {
  return (
    <div>
      <h2 className="text-3xl">New books</h2>
     <BookList books={mockBooks} />
    </div>
  );
};
