import axios from 'axios';
import { store } from '@/core/store';
import { refreshToken } from '@/core/thunk/auth.thunk';

const config = {
  withCredentials: true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Credentials': 'true',
  baseURL: typeof window !== 'undefined' ? `${process.env.NEXT_PUBLIC_BACK_END_API}` : '',
};
export const apiPublicAxios = axios.create(config);
export const apiPrivateAxios = axios.create(config);
apiPrivateAxios.interceptors.request.use(config => {
  const state = store.getState();
  if (state.authState.token) {
    config.headers.authorization = `Bearer ${state.authState.token}`;
  }
  return config;
});
apiPrivateAxios.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      try {
        store.dispatch(refreshToken());
        return apiPrivateAxios.request(originalRequest);
      } catch (error) {
        throw error;
      }
    }
    throw error;
  }
);
