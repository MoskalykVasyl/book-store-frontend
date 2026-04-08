import api from "@/lib/axios";
import type { LoginSchema } from "../schema"

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data: LoginSchema) => {
            await api.post('/auth/login', data);
        }
    })
}