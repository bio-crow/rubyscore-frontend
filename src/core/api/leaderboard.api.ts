import { ILeaderBoardResponse, ISearchUserPayload, ISearchUserResponse } from '@/core/types';
import { apiPrivateAxios, apiPublicAxios, apiPublicAxiosLimited } from '@/core/api/axiosConfig';
import { toast } from 'react-toastify';

export const fetchPublicLeaderboard = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<ILeaderBoardResponse>(`/leaderboard/${projectName}`);
  } catch (error) {
    //console.error(error);
  }
};

export const fetchPrivateLeaderboard = async (projectName: string) => {
  try {
    return await apiPrivateAxios.get<ILeaderBoardResponse>(`/leaderboard/${projectName}`);
  } catch (error) {
    //console.error(error);
  }
};
export const searchUser = async (params: ISearchUserPayload) => {
  try {
    apiPublicAxiosLimited.setRateLimitOptions({ maxRequests: 50, perMilliseconds: 60000 });
    return await apiPublicAxiosLimited.post<ISearchUserResponse>(`/leaderboard/search`, null, { params });
  } catch (error) {
    toast('Wallet not found', { position: 'top-right' });
  }
  return;
};
