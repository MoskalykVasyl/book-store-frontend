import api from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';


interface UploadImageResponse {
    message: string;
    url: string;
}

const uploadImageApi = async(file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const {data} = await api.post<UploadImageResponse>('/file-upload/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    
    return data.url;
}

export const useUploadImage = () => {
    return useMutation({
        mutationFn: uploadImageApi,
        onError: (error) => {
            console.error('Image upload failed:', error);
        },
        onSuccess: () => {
            toast.success('Image uploaded successfully!', {position: 'bottom-left'});
        }
    })
}