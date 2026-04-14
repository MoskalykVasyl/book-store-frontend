import { useForm } from 'react-hook-form';
import { addBookSchema, Genres, type AddBookSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/components/common/FormInput';
import { FormSelect } from '@/components/common/FormSelect';
import { Button } from '@/components/ui/button';
import { FormTextarea } from '@/components/common/FormTextarea';
import { UploadImage } from '@/components/common/UploadImage';

export const AddBookForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBookSchema>({
    resolver: zodResolver(addBookSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: AddBookSchema) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-2 mr-1"'>
      <FormInput<AddBookSchema>
        label="Title"
        name="title"
        register={register}
        errors={errors}
        placeholder="Enter book title"
      />
      <FormInput<AddBookSchema>
        label="Price"
        name="price"
        register={register}
        errors={errors}
        placeholder="Enter book price"
        type="number"
      />
      <FormInput<AddBookSchema>
        label="Pages"
        name="countPage"
        register={register}
        errors={errors}
        placeholder="Enter number of pages"
        type="number"
      />
      <FormInput<AddBookSchema>
        label="Public Year"
        name="publicYear"
        register={register}
        errors={errors}
        placeholder="Enter public year"
        type="number"
      />
       <FormTextarea<AddBookSchema>
        label="Description"
        name="description"
        register={register}
        errors={errors}
        placeholder="Fill book description"
      />
      <FormSelect<AddBookSchema>
        label="Genre"
        name="genre"
        control={control}
        selectItems={Genres}
        placeholder="Select genre"
      />
      <UploadImage<AddBookSchema> control={control} name='imageUrl' />
     
      <Button type="submit" className="mt-4">
        Add Book
      </Button>
    </form>
  );
};
