import { useMe } from '@/features/useMe';
import { Navigate } from 'react-router';

type AdminRouteProps = {
  children: React.ReactNode;
};

export const AdminRoute = ({ children }: AdminRouteProps) => {
  const { data, isLoading } = useMe();

  const user = data?.data;
  

  if (isLoading) {
    return <div>Loading...</div>; // або spinner
  }

  if (!user) {
    console.log('user',data);
    return <Navigate to="/register" replace />;
  }

  if (user.role !== 'REGULAR') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};