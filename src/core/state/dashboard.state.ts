import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IChartDot,
  ILeaderboardData,
  ILeaderboardUser,
  ILevelInfo,
  IProjectStatistics,
  IUserGradation,
  IUserTransactionsDates,
} from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
import { AxiosResponse } from 'axios';
import { ILeaderBoardResponse } from '@/core/types';
import { getUserGradation } from '@/core/thunk/dashboard.thunk';

interface IDashboardState {
  chartData: IChartDot[];
  loading: boolean;
  myLevelData: ILevelInfo | null;
  myLevelDataLoading: boolean;
  projectStatistics: IProjectStatistics | null;
  loadingProjectStatistics: boolean;
  loadingUserGradation: boolean;
  userGradation: IUserGradation | null;
  levelLoading: string | null;
  userTransactionsDates: IUserTransactionsDates | null;
}

const initialState: IDashboardState = {
  chartData: [],
  loading: false,
  myLevelData: null,
  myLevelDataLoading: false,
  projectStatistics: null,
  loadingProjectStatistics: false,
  loadingUserGradation: false,
  userGradation: null,
  levelLoading: null,
  userTransactionsDates: null,
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
    setMyLevelDataLoading: (state, action: PayloadAction<boolean>) => {
      state.myLevelDataLoading = action.payload;
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
    setLevelLoading: (state, action: PayloadAction<string | null>) => {
      state.levelLoading = action.payload;
    },
    setUserTransactionsDates: (state, action: PayloadAction<IUserTransactionsDates | null>) => {
      state.userTransactionsDates = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const {
  setChartData,
  setUserGradation,
  setMyLevelDataLoading,
  setUserGradationLoading,
  setProjectStatistics,
  setProjectStatisticsLoading,
  setMyLevelData,
  setLoading,
  setLevelLoading,
  setUserTransactionsDates,
} = dashboardSlice.actions;
