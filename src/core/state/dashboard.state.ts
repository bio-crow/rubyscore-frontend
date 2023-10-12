import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChartDot, ILeaderboardData, ILeaderboardUser } from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
import { AxiosResponse } from 'axios';
import { ILeaderBoardResponse } from '@/core/types';

interface ILeaderboardState {
  chartData: IChartDot[];
  loading: boolean;
}

const initialState: ILeaderboardState = {
  chartData: [],
  loading: false,
};

export const dashboardSlice = createSlice({
  initialState,
  name: 'dashboardSlice',
  reducers: {
    setChartData: (state, action: PayloadAction<IChartDot[]>) => {
      state.chartData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const { setChartData, setLoading } = dashboardSlice.actions;
