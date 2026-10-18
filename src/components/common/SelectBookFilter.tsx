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
  const genres = [...Genres];

  const genre = searchParams.get('genre') ?? '';

  const handleGenreChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === 'all') {
      params.delete('genre');
    } else {
      params.set('genre', value);
    }

    params.delete('page');
    setSearchParams(params);
  };

  return (
    <Field className="w-fit">
      <Select value={genre} onValueChange={handleGenreChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select genre" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectItem value="all">All genres</SelectItem>
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
