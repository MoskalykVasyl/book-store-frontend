import { useSearchParams } from 'react-router';
import { Genres } from '../forms/AddBookForm/schema';
import { Field } from '../ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const SelectBookFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genres = [...Genres, 'All'];

  const handleGenreChange = (value: string) => {
    searchParams.set('genre', value);
    setSearchParams(searchParams);
  }
  return (
    <Field className="w-fit">
      <Select onValueChange={handleGenreChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select genre" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {genres.map((item) => (
              <SelectItem key={item} value={item.toLowerCase()}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
};
