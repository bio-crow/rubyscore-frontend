import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrivateLeaderboard, fetchPublicLeaderboard, searchUser } from '@/core/api/leaderboard.api';
import { initLeaderBoard, setUserStatistics, setUserStatisticsLoading } from '@/core/state/leaderboard.state';

export const getPublicLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPublicLeaderBoardData',
  async (projectName: string, { dispatch }) => {
    const data = await fetchPublicLeaderboard(projectName);
    dispatch(initLeaderBoard(data));
    return;
  }
);
export const getPrivateLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPrivateLeaderBoardData',
  async (projectName: string, { dispatch }) => {
    const data = await fetchPrivateLeaderboard(projectName);
    dispatch(initLeaderBoard(data));
    return;
  }
);

export const getUserStatistics = createAsyncThunk(
  'leaderboardSlice/getUserStatistics',
  async (
    params: {
      wallet: string;
      project: string;
    },
    { dispatch }
  ) => {
    dispatch(setUserStatisticsLoading(true));
    const data: any = await searchUser(params);
    if (data.data.result) {
      dispatch(setUserStatistics(data.data.result.user));
    } else {
      dispatch(setUserStatistics(null));
    }
    dispatch(setUserStatisticsLoading(false));
    return;
  }
);
