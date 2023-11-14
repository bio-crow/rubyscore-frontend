import { ILoginPayload, ILoginResponse, IRefreshResponse } from '@/core/types';
import { apiPrivateAxios, apiPublicAxios } from '@/core/api/axiosConfig';

export const fetchLogin = async (params: ILoginPayload) => {
  try {
    return await apiPublicAxios.post<ILoginResponse>('/auth/login', null, { params });
  } catch (error: any) {
    if (error?.response?.status === 422) {
      localStorage.removeItem('signature');
      localStorage.removeItem('isAuth');
    }
  }
};
export const fetchRefreshToken = async () => {
  try {
    return await apiPrivateAxios.post<IRefreshResponse>('/auth/refresh-token');
  } catch (error) {
    //console.error(error);
  }
};
