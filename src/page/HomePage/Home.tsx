import { BookList } from '@/components/common/BookList';
import { SelectBookFilter } from '@/components/common/SelectBookFilter';
import { useAuth } from '@/context/AuthContext';
import { useGetAllBooks } from '@/features/useGetAllBooks';
// import { useGetAllBooks } from '@/features/useGetAllBooks';
import { useGetBooks } from '@/features/useGetBooks';
import { useSearchParams } from 'react-router';

export const Home = () => {
const { token } = useAuth();

  const [searchParams] = useSearchParams();
  const genre = searchParams.get('genre') || undefined;
  const  guestQuery = useGetAllBooks();
  const personalQuery  = useGetBooks(genre);

 const books = token ? personalQuery.data : guestQuery.data;
const isLoading = !books;
  return (
    <div>
      <h2 className="text-3xl">New books</h2>
      <SelectBookFilter />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};
