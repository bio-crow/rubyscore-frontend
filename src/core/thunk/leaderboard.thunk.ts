import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrivateLeaderboard, fetchPublicLeaderboard } from '@/core/api/leaderboard.api';

export const getPublicLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPublicLeaderBoardData',
  async (projectName: string) => {
    return await fetchPublicLeaderboard(projectName);
  }
);
export const getPrivateLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPrivateLeaderBoardData',
  async (projectName: string) => {
    return await fetchPrivateLeaderboard(projectName);
  }
);
