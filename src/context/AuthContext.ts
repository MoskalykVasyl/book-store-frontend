import { createContext, useContext } from "react";

type AuthContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if(!authContext) {
        throw new Error('useAuth must be used with AuthProvider!')
    }

    return authContext;
}

