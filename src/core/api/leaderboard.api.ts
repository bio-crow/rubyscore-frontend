import { ILeaderBoardResponse } from '@/core/types';
import { apiPrivateAxios, apiPublicAxios } from '@/core/api/axiosConfig';

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
