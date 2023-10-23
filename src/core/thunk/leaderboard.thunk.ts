import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrivateLeaderboard, fetchPublicLeaderboard, searchUser } from '@/core/api/leaderboard.api';
import {
  initLeaderBoard,
  setLoading,
  setUserStatistics,
  setUserStatisticsLoading,
} from '@/core/state/leaderboard.state';
import fa from '@walletconnect/legacy-modal/dist/cjs/browser/languages/fa';

export const getPublicLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPublicLeaderBoardData',
  async (projectName: string, { dispatch }) => {
    dispatch(setLoading(true));
    const data = await fetchPublicLeaderboard(projectName);
    dispatch(initLeaderBoard(data));
    dispatch(setLoading(false));
    return;
  }
);
export const getPrivateLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPrivateLeaderBoardData',
  async (projectName: string, { dispatch }) => {
    dispatch(setLoading(true));
    const data = await fetchPrivateLeaderboard(projectName);
    dispatch(initLeaderBoard(data));
    dispatch(setLoading(false));
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
