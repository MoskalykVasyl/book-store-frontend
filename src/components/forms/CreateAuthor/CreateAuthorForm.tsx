import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FieldGroup } from '@/components/ui/field';
import { Plus } from 'lucide-react';
import { useForm, type UseFormSetValue } from 'react-hook-form';
import { createAuthorSchema, type CreateAuthorSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/components/common/FormInput';
import { FormTextarea } from '@/components/common/FormTextarea';
import { UploadImage } from '@/components/common/UploadImage';
import { useCreateAuthor } from '@/features/useCreateAuthor';
import type { AddBookSchema } from '../AddBookForm/schema';
import { useState } from 'react';

interface CreateAuthorFormProps {
  setValue: UseFormSetValue<AddBookSchema>;
}

export const CreateAuthorForm = ({ setValue }: CreateAuthorFormProps) => {
  const [isOpenCreateAuthor, setIsOpenCreateAuthor] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateAuthorSchema>({
    resolver: zodResolver(createAuthorSchema),
    mode: 'onChange',
  });

  const { mutateAsync, isPending } = useCreateAuthor();

  const onSubmit = async (data: CreateAuthorSchema) => {
    const authorId = await mutateAsync(data);
    setValue('authorId', authorId);
    reset();
    setIsOpenCreateAuthor(false);
  };
  return (
    <Dialog open={isOpenCreateAuthor} onOpenChange={setIsOpenCreateAuthor}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Create Author <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create Author</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new author.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <FormInput
              register={register}
              name="firstName"
              label="First name"
              errors={errors}
            />
            <FormInput
              register={register}
              name="lastName"
              label="Last name"
              errors={errors}
            />
            <FormTextarea
              register={register}
              name="biography"
              label="Biography"
              errors={errors}
            />
            <UploadImage control={control} name="imageUrl" />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isPending}>
                {isPending ? 'Creating...' : 'Create Author'}
              </Button>
            </DialogFooter>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};
