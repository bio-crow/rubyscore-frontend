import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChartDot, ILeaderboardData, ILeaderboardUser, ILevelInfo } from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
import { AxiosResponse } from 'axios';
import { ILeaderBoardResponse } from '@/core/types';

interface ILeaderboardState {
  chartData: IChartDot[];
  loading: boolean;
  myLevelData: ILevelInfo | null;
}

const initialState: ILeaderboardState = {
  chartData: [],
  loading: false,
  myLevelData: null,
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
    setMyLevelData: (state, action: PayloadAction<ILevelInfo | null>) => {
      state.myLevelData = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const { setChartData, setMyLevelData, setLoading } = dashboardSlice.actions;
