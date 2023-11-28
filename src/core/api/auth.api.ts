import { ILoginPayload, ILoginResponse, IRefreshResponse } from '@/core/types';
import { apiPrivateAxios, apiPublicAxios } from '@/core/api/axiosConfig';

export const fetchLogin = async (params: ILoginPayload) => {
  try {
    return await apiPublicAxios.post<ILoginResponse>('/auth/login', null, { params });
  } catch (error: any) {
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
