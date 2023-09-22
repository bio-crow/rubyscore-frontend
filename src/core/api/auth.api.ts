import { ILoginPayload, ILoginResponse } from '@/core/types';
import { apiPublicAxios } from '@/core/api/axiosConfig';

export const fetchLogin = async (params: ILoginPayload) => {
  try {
    return await apiPublicAxios.post<ILoginResponse>('/auth/login', null, { params });
  } catch (error) {
    //console.error(error);
  }
};
