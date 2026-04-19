import { useForm } from 'react-hook-form';
import { addBookSchema, Genres, type AddBookSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/components/common/FormInput';
import { FormSelect } from '@/components/common/FormSelect';
import { Button } from '@/components/ui/button';
import { FormTextarea } from '@/components/common/FormTextarea';
import { UploadImage } from '@/components/common/UploadImage';
import { CreateAuthorForm } from '../CreateAuthor';
import { FieldGroup } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { AuthorItem } from '@/components/forms/AddBookForm/components/AuthorItem';
import { AuthorPicker } from '@/components/common/AuthorPicker';
import { useAddBook } from '@/features/useAddBook';
import { transformBookData } from '@/lib/transformBookData';

export const AddBookForm = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddBookSchema>({
    resolver: zodResolver(addBookSchema),
    mode: 'onChange',
  });

  const {mutateAsync} = useAddBook();
 
  const authorId = watch('authorId');

  const onSubmit = (data: AddBookSchema) => {
    const payload = transformBookData(data);
    mutateAsync(payload);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <FieldGroup>
      <FormInput
        label="Title"
        name="title"
        register={register}
        errors={errors}
        placeholder="Enter book title"
      />
      <FormInput
        label="Price"
        name="price"
        register={register}
        errors={errors}
        placeholder="Enter book price"
        type="number"
      />
      <FormInput
        label="Pages"
        name="countPage"
        register={register}
        errors={errors}
        placeholder="Enter number of pages"
        type="number"
      />
      <FormInput
        label="Public Year"
        name="publicYear"
        register={register}
        errors={errors}
        placeholder="Enter public year"
        type="number"
      />
       <FormTextarea
        label="Description"
        name="description"
        register={register}
        errors={errors}
        placeholder="Fill book description"
      />
      <FormSelect
        label="Genre"
        name="genre"
        control={control}
        selectItems={Genres}
        placeholder="Select genre"
      />
      <UploadImage control={control} name='imageUrl' />
      <Label>Choose Author</Label>
      {authorId && <AuthorItem authorId={authorId} />}
      <div className='flex items-center gap-5'>
      <CreateAuthorForm setValue={setValue} />
      <AuthorPicker setValue={setValue} />
      </div>
      </FieldGroup>
     
      <Button type="submit" className="mt-4">
        Add Book
      </Button>
    </form>
  );
};
