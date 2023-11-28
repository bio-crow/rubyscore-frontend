import axios from 'axios';
import { store } from '@/core/store';
import { refreshToken } from '@/core/thunk/auth.thunk';

const config = {
  withCredentials: true,
  baseURL: typeof window !== 'undefined' ? `${window.location.origin}/api` : '',
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
    } else {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('signature');
        localStorage.removeItem('isAuth');
      }
    }
    throw error;
  }
);
