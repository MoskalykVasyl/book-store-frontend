import { useAuth } from '@/context/AuthContext';
import api from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

type UserRole = 'REGULAR' | 'ADMIN';

type MeResponse = {
    id: number;
    email: string;
    displayName: string;
    picture: string | null;
    role: UserRole;
    createdAt: string;
}

const fetchMe = async () => {
  return await api.get<MeResponse>('/auth/me');
};

export const useMe = () => {
    const { token } = useAuth();

  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    enabled: !!token,
    retry: false,
  });
};
