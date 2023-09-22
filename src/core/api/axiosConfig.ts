import axios from 'axios';
import { store } from '@/core/store';
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
      /* try {
        // call refresh thunk
        return apiPrivateAxios.request(originalRequest)
      } catch (error) {
        throw error;
      }*/
    }
    // console.log("!!", error);
    throw error;
  }
);
