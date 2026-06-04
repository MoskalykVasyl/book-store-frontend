import type { RegisterSchema } from "@/components/forms/RegisterForm/schema";
import api from "@/lib/axios"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const registerApi = async(formData: Omit<RegisterSchema, 'confirmPassword'>) => {
    const {data} = await api.post('/auth/register', formData);
    return data;
}

export const useRegister = () => {
    return useMutation({
        mutationFn: registerApi,
        onSuccess: () => {
            toast.success('Registration successful! You can now log in with your credentials.');
        },
        onError: (error) => {
            console.error('Registration failed:', error);
            toast.error('Registration failed. Please try again later.');
        }
    })
}