import { useAuth } from '@/context/AuthContext';
import api from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const logoutApi = async () => {
  return await api.post('/auth/logout');
};

export const useLogout = () => {
  const { setToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutApi,
    // навіть якщо сервер не відповів, локально користувача все одно розлогінюємо
    onSettled: (_data, err) => {
      if (err) {
        console.error('Logout failed:', err);
      }

      setToken(null);
      // useMe вимикається без токена, але дані лишаються в кеші, тому їх треба видалити
      queryClient.removeQueries({ queryKey: ['me'] });
      queryClient.removeQueries({ queryKey: ['wishList'] });
      navigate('/');
      toast.success('You have been logged out');
    },
  });
};