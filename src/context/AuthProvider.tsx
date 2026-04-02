import api from "@/lib/axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(null);

    // useEffect(()=>{
    //     const fetchMe = async()=>{
    //         try{
    //             const response = await api.get('/auth/refresh-token');                
    //             setToken(response.data.access_token);
    //         }
    //         catch {
    //             setToken(null);
    //         }
    //     };

    //     fetchMe();
    // }, [])

    // useLayoutEffect(()=>{
    //     const authInterceptor = api.interceptors.request.use((config) => {
    //         config.headers.Authorization = token ? `Bearer ${token}` : undefined;
    //         return config;
    //     });

    //     console.log('useLayoutEffect ran auth interceptor')

    //     return () => {
    //         api.interceptors.request.eject(authInterceptor);
    //     }
    // }, [token])

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
//         const response = await api.get('/auth/refresh-token');

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

return (<AuthContext.Provider value={{ token, setToken }}>
    {children}
</AuthContext.Provider>)

}