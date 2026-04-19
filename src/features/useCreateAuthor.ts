import type { CreateAuthorSchema } from '@/components/forms/CreateAuthor/schema';
import api from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const createAuthorApi = async (formData: CreateAuthorSchema) => {
  const { data } = await api.post('/authors/create', formData);
  return data.id;
};

export const useCreateAuthor = () => {
  return useMutation({
    mutationFn: createAuthorApi,
    onError: (error) => {
      console.error('Author creation failed:', error);
    },
    onSuccess: () => {
      toast.success('Author created successfully!', {
        position: 'bottom-left',
      });
    },
  });
};
