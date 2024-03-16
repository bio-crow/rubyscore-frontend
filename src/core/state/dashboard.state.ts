import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IChartDot,
  IDashboardTabsVoteInfo,
  ILeaderboardData,
  ILeaderboardUser,
  ILevelInfo,
  IProjectStatistics,
  IUserGradation,
  IUserTransactionsDates,
} from '@/types/index';

interface IDashboardState {
  chartData: IChartDot[];
  infoChartData: IChartDot[];
  loading: boolean;
  infoChartLoading: boolean;
  myLevelData: ILevelInfo | null;
  myLevelDataLoading: boolean;
  projectStatistics: IProjectStatistics | null;
  loadingProjectStatistics: boolean;
  loadingUserGradation: boolean;
  userGradation: IUserGradation | null;
  levelLoading: string | null;
  userTransactionsDates: IUserTransactionsDates | null;
  dashboardTabsVoteInfo: IDashboardTabsVoteInfo;
  dashboardTabsVoteInfoLoading: string | null;
}

const initialState: IDashboardState = {
  chartData: [],
  infoChartData: [],
  loading: false,
  infoChartLoading: false,
  myLevelData: null,
  myLevelDataLoading: false,
  projectStatistics: null,
  loadingProjectStatistics: false,
  loadingUserGradation: false,
  userGradation: null,
  levelLoading: null,
  userTransactionsDates: null,
  dashboardTabsVoteInfo: {
    zk_era: null,
    linea: null,
    base: null,
    zk_evm: null,
    scroll: null,
    rubyscore: null,
    manta: null,
    blast: null,
    zora: null,
  },
  dashboardTabsVoteInfoLoading: null,
};

export const dashboardSlice = createSlice({
  initialState,
  name: 'dashboardSlice',
  reducers: {
    setChartData: (state, action: PayloadAction<IChartDot[]>) => {
      state.chartData = action.payload;
    },
    setInfoChartData: (state, action: PayloadAction<IChartDot[]>) => {
      state.infoChartData = action.payload;
    },
    setDashboardTabsVoteInfo: (state, action: PayloadAction<IDashboardTabsVoteInfo>) => {
      state.dashboardTabsVoteInfo = action.payload;
    },
    updateDashboardTabsVoteInfo: (state, action: PayloadAction<{ projectName: string; count: number }>) => {
      const { projectName, count } = action.payload;
      state.dashboardTabsVoteInfo = { ...state.dashboardTabsVoteInfo, [projectName]: count };
    },
    setDashboardTabsVoteInfoLoading: (state, action: PayloadAction<string | null>) => {
      state.dashboardTabsVoteInfoLoading = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setInfoChartLoading: (state, action: PayloadAction<boolean>) => {
      state.infoChartLoading = action.payload;
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
  setInfoChartData,
  setUserGradation,
  setMyLevelDataLoading,
  setUserGradationLoading,
  setProjectStatistics,
  setProjectStatisticsLoading,
  setMyLevelData,
  setLoading,
  setInfoChartLoading,
  setLevelLoading,
  setUserTransactionsDates,
  setDashboardTabsVoteInfo,
  updateDashboardTabsVoteInfo,
  setDashboardTabsVoteInfoLoading,
} = dashboardSlice.actions;
