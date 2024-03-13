import { ILoginPayload, ILoginResponse, IRefreshResponse } from '@/core/types';
import {apiPrivateAxios, apiPublicAxios, apiPublicAxiosLimited} from '@/core/api/axiosConfig';

export const fetchLogin = async (params: ILoginPayload) => {
  try {
    return await apiPublicAxiosLimited.post<ILoginResponse>('/auth/login', null, { params });
  } catch (error: any) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('signature');
      localStorage.removeItem('isAuth');
    }
    //console.error(error);
  }
};
export const fetchRefreshToken = async () => {
  try {
    return await apiPrivateAxios.post<IRefreshResponse>('/auth/refresh-token');
  } catch (error) {
    //console.error(error);
  }
};
