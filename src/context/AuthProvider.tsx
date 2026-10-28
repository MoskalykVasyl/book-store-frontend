import api from '@/lib/axios';
import { useLayoutEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

// сервер ротує refresh token, тому паралельні запити (StrictMode викликає ефект двічі)
// мають ділити один запит, інакше другий прийде зі старим cookie і сервер його видалить
let refreshPromise: Promise<string> | null = null;

const refreshAccessToken = () => {
  refreshPromise ??= api
    .post<{ access_token: string }>('/auth/refresh-token')
    .then((response) => response.data.access_token)
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useLayoutEffect(() => {
    const fetchMe = async () => {
      try {
        setToken(await refreshAccessToken());
      } catch {
        setToken(null);
      } finally {
        setIsAuthLoading(false);
      }
    };

    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = token ? `Bearer ${token}` : undefined;
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  //     useLayoutEffect(() => {
  //   const interceptor = api.interceptors.response.use(
  //   (res) => res,
  //   async (error) => {
  //     const originalRequest = error.config;

  //     if (
  //       (error.response?.status === 401 || error.response?.status === 403) &&
  //       !originalRequest._retry &&
  //       originalRequest.url !== '/auth/refresh-token'
  //     ) {
  //       originalRequest._retry = true;

  //       try {
  //         const response = await api.post('/auth/refresh-token');

  //         setToken(response.data.access_token);

  //         originalRequest.headers.Authorization =
  //           `Bearer ${response.data.access_token}`;

  //         return api(originalRequest);
  //       } catch (error) {
  //       console.error(error)
  //         setToken(null);
  //       }
  //     }

  //     return Promise.reject(error);
  //   }
  // );

  //   return () => {
  //     api.interceptors.response.eject(interceptor);
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
