import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChartDot, ILeaderboardData, ILeaderboardUser, ILevelInfo, IProjectStatistics } from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
import { AxiosResponse } from 'axios';
import { ILeaderBoardResponse } from '@/core/types';

interface IDashboardState {
  chartData: IChartDot[];
  loading: boolean;
  myLevelData: ILevelInfo | null;
  projectStatistics: IProjectStatistics | null;
  loadingProjectStatistics: boolean;
}

const initialState: IDashboardState = {
  chartData: [],
  loading: false,
  myLevelData: null,
  projectStatistics: null,
  loadingProjectStatistics: false,
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
    setProjectStatistics: (state, action: PayloadAction<IProjectStatistics | null>) => {
      state.projectStatistics = action.payload;
    },
    setProjectStatisticsLoading: (state, action: PayloadAction<boolean>) => {
      state.loadingProjectStatistics = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const { setChartData, setProjectStatistics, setProjectStatisticsLoading, setMyLevelData, setLoading } =
  dashboardSlice.actions;
