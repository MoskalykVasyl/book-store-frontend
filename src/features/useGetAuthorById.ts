import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query";

const getAuthorByIdApi = async(authorId: string) => {
    const {data} = await api.get(`/authors/by-id/${authorId}`);
    console.log(data)
    return data;
}

export const useGetAuthorById = (authorId: string) => {
    return useQuery({
        queryKey: ['author', authorId],
        queryFn: () => getAuthorByIdApi(authorId),
        enabled: !!authorId,
    })
}
