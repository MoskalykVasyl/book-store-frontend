import type { LoginSchema } from '@/components/forms/LoginFom/schema';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/axios';
import { getErrorMessage } from '@/lib/getErrorMessage';
import type { ErrorResponse } from '@/types/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

type UseLoginOptions = {
    onSuccess?: () => void;
}

type LoginResponse = {
  access_token: string;
};

const loginApi = async (formData: LoginSchema) => {
  return await api.post<LoginResponse>('/auth/login', formData);
};

export const useLogin = ({ onSuccess }: UseLoginOptions) => {
  const { setToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      setToken(res.data.access_token);
      queryClient.invalidateQueries({ queryKey: ['me', 'wishlist'] });
      onSuccess?.();
    },
    onError: (err: AxiosError<ErrorResponse>) => {
        console.error('Login failed:', err);
        toast.error(getErrorMessage(err));
    }
  });
};
