import { useSearchBooks } from '@/features/useSearchBooks';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Link } from 'react-router';

export const SearchBooks = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const debounceQuery = useDebounce(query, 500);

  const { data, isLoading } = useSearchBooks(debounceQuery);

  // Hotkey: Ctrl + K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl border bg-background px-4 py-2 text-sm text-muted-foreground hover:bg-muted"
      >
        <Search className="h-4 w-4" />
        <span>Search books...</span>
        <kbd className="ml-8 rounded border bg-muted px-2 py-0.5 text-xs">
          Ctrl+K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-[20%] translate-y-0 overflow-hidden p-0 sm:max-w-2xl">
          <DialogTitle className="sr-only">Search Books</DialogTitle>
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search books..."
              value={query}
              onValueChange={setQuery}
            />
            <CommandList className="max-h-96 overflow-y-auto">
              {isLoading && <div className="p-4 text-sm">Loading...</div>}

              {!isLoading  && query.length > 1 && data?.length === 0 && (
                <CommandEmpty>No books found.</CommandEmpty>
              )}

              <CommandGroup heading="Books">
                {data?.map((book) => (
                  <Link
                    key={book.id}
                    to={`/books/${book.id}`}
                    onClick={() => {
                      setOpen(false);
                      setQuery('');
                    }}
                  >
                    <CommandItem className="flex items-center gap-3 px-4 py-3 cursor-pointer">
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="h-16 w-12 rounded-md object-cover"
                      />

                      <div className="flex flex-col">
                        <span className="font-medium">{book.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {book.author.firstName} {book.author.lastName}
                        </span>
                      </div>
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};
