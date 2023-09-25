import { createSlice } from '@reduxjs/toolkit';
import { ILeaderboardData } from '@/types/index';
import { getLeaderboardData } from '@/core/thunk/leaderboard.thunk';

interface ILeaderboardState {
  leaderboard: ILeaderboardData[];
  refCode: string | null;
  loading: boolean;
}

const initialState: ILeaderboardState = {
  leaderboard: [],
  refCode: null,
  loading: false,
};

export const leaderboardSlice = createSlice({
  initialState,
  name: 'leaderboardSlice',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLeaderboardData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLeaderboardData.fulfilled, (state, action) => {
        if (action.payload) {
          state.leaderboard = action.payload.data.result.leaderboard;
        }
        state.loading = false;
      });
  },
});

export default leaderboardSlice.reducer;

export const {} = leaderboardSlice.actions;
