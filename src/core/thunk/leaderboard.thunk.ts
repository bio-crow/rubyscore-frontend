import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLeaderboard } from '@/core/api/leaderboard.api';

export const getLeaderboardData = createAsyncThunk('leaderboardSlice/getLeaderBoardData', async () => {
  return await fetchLeaderboard();
});
