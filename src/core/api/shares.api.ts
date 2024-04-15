import { toast } from 'react-toastify';
import { apiPrivateAxios } from './axiosConfig';

export const uploadImage = async (image: string) => {
  try {
    const res = await apiPrivateAxios.post<{ link: string; id: string }>('/shares/upload', { image });
    return res;
  } catch (error) {
    toast.error('Failed to upload an image');
    return null;
  }
};
