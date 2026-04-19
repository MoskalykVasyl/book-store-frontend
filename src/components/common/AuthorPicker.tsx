import { useGetAllAuthors } from '@/features/useGetAllAuthors';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Spinner } from '../ui/spinner';
import { defaultImageUrl } from '../forms/AddBookForm/components/AuthorItem';
import { useState } from 'react';
import { Input } from '../ui/input';
import type { UseFormSetValue } from 'react-hook-form';
import type { AddBookSchema } from '../forms/AddBookForm/schema';

interface AuthorPickerProps {
    setValue: UseFormSetValue<AddBookSchema>;
}

export const AuthorPicker = ({setValue}: AuthorPickerProps) => {
  const { data, isLoading } = useGetAllAuthors();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  const filteredAuthors = data.filter((author) =>
    `${author.firstName} ${author.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleAuthorSelect = (authorId: string) => {
    setValue('authorId', authorId);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Pick author</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pick Author</DialogTitle>
          <DialogDescription>Pick an author from the list</DialogDescription>
        </DialogHeader>

        <Input
          placeholder="Search author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="max-h-75 overflow-y-auto space-y-2 pr-2">
            {filteredAuthors.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No authors found
              </div>
            ) : (
              filteredAuthors.map((author) => (
                <div
                  key={author.id}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer transition"
                  onClick={() => handleAuthorSelect(author.id)}
                >
                  <img
                    src={author.imageUrl ? author.imageUrl : defaultImageUrl}
                    alt={`${author.firstName} ${author.lastName}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {author.firstName} {author.lastName}
                    </h3>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
