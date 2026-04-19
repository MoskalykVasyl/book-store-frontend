
import api from "@/lib/axios";
import type { AddBookDto } from "@/lib/transformBookData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const addBookApi = async(formData: AddBookDto) => {
    await api.post('/books', formData);
}

export const useAddBook = () => {
    return useMutation({
        mutationFn: addBookApi,
        onError: (error) => {
            console.error('Book addition failed:', error);
        },
        onSuccess: () => {
            toast.success('Book added successfully!');
        }
    })
}