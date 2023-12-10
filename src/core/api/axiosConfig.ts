import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import { store } from '@/core/store';
import { refreshToken } from '@/core/thunk/auth.thunk';

const config = {
  withCredentials: true,
  baseURL: typeof window !== 'undefined' ? `${window.location.origin}/api` : '',
};
export const apiPublicAxios = axios.create(config);
export const apiPublicAxiosLimited = rateLimit(axios.create(config), {
  maxRequests: 20,
  perMilliseconds: 60000,
});
export const apiPrivateAxios = axios.create(config);
export const apiPrivateAxiosLimited = rateLimit(axios.create(config), {
  maxRequests: 20,
  perMilliseconds: 60000,
});
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
apiPrivateAxiosLimited.interceptors.request.use(config => {
  const state = store.getState();
  if (state.authState.token) {
    config.headers.authorization = `Bearer ${state.authState.token}`;
  }
  return config;
});
apiPrivateAxiosLimited.interceptors.response.use(
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
