import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrivateLeaderboard, fetchPublicLeaderboard } from '@/core/api/leaderboard.api';
import { initLeaderBoard } from '@/core/state/leaderboard.state';

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
  }
);
