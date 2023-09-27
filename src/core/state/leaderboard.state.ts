import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILeaderboardData, ILeaderboardUser } from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';

interface ILeaderboardState {
  leaderboard: ILeaderboardData[];
  leaderboardUser: ILeaderboardUser | null;
  refCode: string | null;
  loading: boolean;
}

const initialState: ILeaderboardState = {
  leaderboard: [],
  leaderboardUser: null,
  refCode: null,
  loading: false,
};

export const leaderboardSlice = createSlice({
  initialState,
  name: 'leaderboardSlice',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPublicLeaderboardData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPublicLeaderboardData.fulfilled, (state, action) => {
        if (action.payload) {
          state.leaderboard = action.payload.data.result?.leaderboard || [];
          state.leaderboardUser = null;
        }
        state.loading = false;
      })
      .addCase(getPrivateLeaderboardData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPrivateLeaderboardData.fulfilled, (state, action) => {
        if (action.payload) {
          const user = action.payload.data.result?.user;
          const leaderboard = action.payload.data.result?.leaderboard;
          state.leaderboardUser = user || null;
          state.leaderboard = leaderboard;
          const isUserOnPage = leaderboard?.find(item => item.wallet === user.wallet);
          if (user && leaderboard && !isUserOnPage) {
            leaderboard.push({
              wallet: user.wallet,
              name: user.name,
              score: user.score,
              rank: user.position,
            });
            state.leaderboard = leaderboard;
          }
        }
        state.loading = false;
      });
  },
});

export default leaderboardSlice.reducer;

export const {} = leaderboardSlice.actions;
