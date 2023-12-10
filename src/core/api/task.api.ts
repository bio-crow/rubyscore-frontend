import {
  ILoginPayload,
  ILoginResponse,
  IReferralsResponse,
  IRefreshResponse,
  ITasksCompletedResponse,
  ITasksResponse,
} from '@/core/types';
import { apiPrivateAxios, apiPrivateAxiosLimited } from '@/core/api/axiosConfig';

export const fetchTasks = async () => {
  try {
    return await apiPrivateAxios.get<ITasksResponse>('/profile/tasks');
  } catch (error) {
    //console.error(error);
  }
};
export const fetchCompletedTasks = async (wallet: string) => {
  try {
    return await apiPrivateAxios.get<ITasksCompletedResponse>(`/profile/${wallet}/tasks`);
  } catch (error) {
    //console.error(error);
  }
};
export const loadClaimTask = async (taskId: number) => {
  try {
    apiPrivateAxiosLimited.setRateLimitOptions({ maxRequests: 20, perMilliseconds: 60000 });
    return await apiPrivateAxiosLimited.post<any>(`/task/check`, null, { params: { taskId } });
  } catch (error) {
    //console.error(error);
  }
};
