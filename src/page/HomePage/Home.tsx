import { BookList } from '@/components/common/BookList';
import { PaginationControl } from '@/components/common/Pagination';
import { SelectBookFilter } from '@/components/common/SelectBookFilter';
import { useGetBooks } from '@/features/useGetBooks';
import { useSearchParams } from 'react-router';

export const Home = () => {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get('genre') || undefined;
  const page = Math.max(1, Number(searchParams.get('page')) || 1);

  const { data, isLoading, isPlaceholderData } = useGetBooks({genre, page});
  return (
    <div>
      <h2 className="text-3xl">New books</h2>
      <SelectBookFilter />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={isPlaceholderData ? 'opacity-50 transition-opacity' : ''}>
          <BookList books={data?.items} />
        </div>
      )}

      {data && <PaginationControl meta={data.meta} />}
    </div>
  );
};
