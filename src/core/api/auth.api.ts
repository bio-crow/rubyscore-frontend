import { ILoginPayload, ILoginResponse, IRefreshResponse } from '@/core/types';
import { apiPrivateAxios, apiPublicAxiosLimited } from '@/core/api/axiosConfig';

export const fetchLogin = async (params: ILoginPayload) => {
  try {
    const response = await apiPublicAxiosLimited.post<ILoginResponse>('/auth/login', null, { params });

    const tokenData = response?.data?.result;
    // If the user has not visited the site for more than a day and has not closed the browser, he should log in again using fetchLogin
    // Otherwise, let's update expiration of token and keep him logged in
    sessionStorage.setItem(
      'sessionData',
      JSON.stringify({ exp: tokenData.exp, token: btoa(tokenData.token) })
    );

    return response;
  } catch (error: any) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuth');
      sessionStorage.removeItem('sessionData');
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
