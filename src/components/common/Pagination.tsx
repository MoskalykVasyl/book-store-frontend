import { useSearchParams } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import type { PaginationMeta } from '@/types/api/books-api.type';

type Props = {
  meta: PaginationMeta;
};

type PageItem = number | 'ellipsis-start' | 'ellipsis-end';

const getPageItems = (current: number, total: number): PageItem[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const items: PageItem[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) items.push('ellipsis-start');
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push('ellipsis-end');

  items.push(total);
  return items;
};

export const PaginationControl = ({ meta }: Props) => {
  const { totalPages, page, hasNextPage, hasPreviousPage } = meta;
  const [searchParams, setSearchParams] = useSearchParams();

  if (totalPages <= 1) return null;

  const getHref = (p: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(p));
    return `?${params.toString()}`;
  };

  const handleClick =
    (target: number, enabled = true) =>
    (e: React.MouseEvent) => {
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      if (enabled) {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(target));
        setSearchParams(params);
      }
    };

  return (
    <Pagination className="pt-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getHref(page - 1)}
            aria-disabled={!hasPreviousPage}
            tabIndex={!hasPreviousPage ? -1 : undefined}
            className={!hasPreviousPage ? 'pointer-events-none opacity-50' : undefined}
            onClick={handleClick(page - 1, hasPreviousPage)}
          />
        </PaginationItem>

        {getPageItems(page, totalPages).map((item) =>
          typeof item === 'number' ? (
            <PaginationItem key={item}>
              <PaginationLink
                href={getHref(item)}
                isActive={item === page}
                onClick={handleClick(item)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationEllipsis />
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href={getHref(page + 1)}
            aria-disabled={!hasNextPage}
            tabIndex={!hasNextPage ? -1 : undefined}
            className={!hasNextPage ? 'pointer-events-none opacity-50' : undefined}
            onClick={handleClick(page + 1, hasNextPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};