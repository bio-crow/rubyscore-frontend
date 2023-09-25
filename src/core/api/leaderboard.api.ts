import { ILeaderBoardResponse } from '@/core/types';
import { apiPrivateAxios } from '@/core/api/axiosConfig';

export const fetchLeaderboard = async () => {
  try {
    return await apiPrivateAxios.get<ILeaderBoardResponse>('/leaderboard/all');
  } catch (error) {
    //console.error(error);
  }
};
