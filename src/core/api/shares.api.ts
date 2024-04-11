import { toast } from 'react-toastify';
import { apiPrivateAxios } from './axiosConfig';

export const uploadImage = async (image: string) => {
  try {
    return apiPrivateAxios.post<{ link: string; id: string }>('/shares/upload', { image });
  } catch (error) {
    toast.error('Failed to upload an image');
    return null;
  }
};
