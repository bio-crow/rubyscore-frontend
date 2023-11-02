import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IChartDot,
  ILeaderboardData,
  ILeaderboardUser,
  ILevelInfo,
  IProjectStatistics,
  IUserGradation,
} from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
import { AxiosResponse } from 'axios';
import { ILeaderBoardResponse } from '@/core/types';
import { getUserGradation } from '@/core/thunk/dashboard.thunk';

interface IDashboardState {
  chartData: IChartDot[];
  loading: boolean;
  myLevelData: ILevelInfo | null;
  projectStatistics: IProjectStatistics | null;
  loadingProjectStatistics: boolean;
  loadingUserGradation: boolean;
  userGradation: IUserGradation | null;
}

const initialState: IDashboardState = {
  chartData: [],
  loading: false,
  myLevelData: null,
  projectStatistics: null,
  loadingProjectStatistics: false,
  loadingUserGradation: false,
  userGradation: null,
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
    setUserGradationLoading: (state, action: PayloadAction<boolean>) => {
      state.loadingUserGradation = action.payload;
    },
    setUserGradation: (state, action: PayloadAction<IUserGradation | null>) => {
      state.userGradation = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const {
  setChartData,
  setUserGradation,
  setUserGradationLoading,
  setProjectStatistics,
  setProjectStatisticsLoading,
  setMyLevelData,
  setLoading,
} = dashboardSlice.actions;
