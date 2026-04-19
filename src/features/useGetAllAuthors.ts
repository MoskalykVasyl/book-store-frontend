import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query";

export interface GetAuthorsResponse {
    id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

const getAllAuthorsApi = async()=> {
    const {data} = await api.get<GetAuthorsResponse[]>('/authors/get-all');
    return data;
}

export const useGetAllAuthors = () =>{
    return useQuery({
        queryKey: ['get-all-authors'],
        queryFn: getAllAuthorsApi,
    })
}