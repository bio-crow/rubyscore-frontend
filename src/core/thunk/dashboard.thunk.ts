import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  transformApiBalanceResponse,
  transformApiContractsResponse,
  transformApiDaysResponse,
  transformApiGasResponse,
  transformApiMonthsResponse,
  transformApiTransactionResponse,
  transformApiVolumeResponse,
  transformApiWeeksResponse,
} from '@/utils/helpers';
import {
  fetchDashboardBalance,
  fetchDashboardContracts,
  fetchDashboardDays,
  fetchDashboardGas,
  fetchDashboardMonths,
  fetchDashboardTransactions,
  fetchDashboardVolume,
  fetchDashboardWeeks,
  fetchProjectStatistics,
  fetchUserGradation,
} from '@/core/api/dashboard.api';
import {
  setLoading,
  setChartData,
  setMyLevelData,
  setProjectStatistics,
  setProjectStatisticsLoading,
  setUserGradationLoading,
  setUserGradation,
} from '@/core/state/dashboard.state';
import { ChartIndexType, DashboardTabIndexType, IChartDot } from '@/types/index';
import { setUserStatistics, setUserStatisticsLoading } from '@/core/state/leaderboard.state';
import { searchUser } from '@/core/api/leaderboard.api';
import { IClaimLevelPayload, IUserGradationPayload } from '@/core/types';
import {
  fetchClaimLevelSignature,
  wagmiClaimLevel,
  wagmiLevels,
  wagmiOptimismLevels,
} from '@/core/api/contract.achievements.api';

export const getDashboardChartData = createAsyncThunk(
  'dashboardSlice/getDashboardTransactionsData',
  async (payload: { projectName: DashboardTabIndexType; type: ChartIndexType }, { dispatch }) => {
    dispatch(setLoading(true));
    dispatch(setChartData([]));
    let preparedData: IChartDot[] = [];
    let result;
    switch (payload.type) {
      case 'transactions':
        result = await fetchDashboardTransactions(payload.projectName);
        if (result?.data) {
          preparedData = transformApiTransactionResponse(result.data);
        }
        break;
      case 'contracts':
        result = await fetchDashboardContracts(payload.projectName);
        if (result?.data) {
          preparedData = transformApiContractsResponse(result.data);
        }
        break;
      case 'days':
        result = await fetchDashboardDays(payload.projectName);
        if (result?.data) {
          preparedData = transformApiDaysResponse(result.data);
        }
        break;
      case 'weeks':
        result = await fetchDashboardWeeks(payload.projectName);
        if (result?.data) {
          preparedData = transformApiWeeksResponse(result.data);
        }
        break;
      case 'months':
        result = await fetchDashboardMonths(payload.projectName);
        if (result?.data) {
          preparedData = transformApiMonthsResponse(result.data);
        }
        break;
      case 'gas':
        result = await fetchDashboardGas(payload.projectName);
        if (result?.data) {
          preparedData = transformApiGasResponse(result.data);
        }
        break;
      case 'volume':
        result = await fetchDashboardVolume(payload.projectName);
        if (result?.data) {
          preparedData = transformApiVolumeResponse(result.data);
        }
        break;
      case 'balance':
        result = await fetchDashboardBalance(payload.projectName);
        if (result?.data) {
          preparedData = transformApiBalanceResponse(result.data);
        }
        break;
    }

    dispatch(setChartData(preparedData));
    dispatch(setLoading(false));
  }
);
export const getUserLevelInfo = createAsyncThunk(
  'dashboardSlice/getUserLevelInfo',
  async (
    params: {
      wallet: string;
      project: string;
    },
    { dispatch }
  ) => {
    const data: any = await searchUser(params);
    const result: any = await wagmiLevels(params)
    if (data.data.result) {
      const levelData = {
        level: data.data.result.user.profile.rank.level,
        levelUp: data.data.result.user.profile.rank.levelUp,
        score: data.data.result.user.profile.rank.score,
        levelStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      };
      dispatch(setMyLevelData(levelData));
    } else {
      dispatch(setMyLevelData(null));
    }
    return;
  }
);
export const claimLevel = createAsyncThunk(
  'dashboardSlice/claimLevel',
  async (
    params: {
      nftId: string;
      project: string;
      account: string;
    },
    { dispatch }
  ) => {
    const data: any = await fetchClaimLevelSignature(params);
    if (data?.data?.result?.mintParams && data?.data?.result?.signature) {
      console.log(data.data.result)
      const claimParams:IClaimLevelPayload = {
        signature: data?.data?.result?.signature,
        mintParams: data?.data?.result?.mintParams,
        account: params.account,
        project: params.project,
      }
      const result = await  wagmiClaimLevel(claimParams)
      console.log(result)
    }
    return;
  }
);
export const getProjectStatistics = createAsyncThunk(
  'dashboardSlice/getProjectStatistics',
  async (projectName: string, { dispatch }) => {
    dispatch(setProjectStatisticsLoading(true));
    const data: any = await fetchProjectStatistics(projectName);
    if (data.data.result) {
      dispatch(setProjectStatistics(data.data.result));
    } else {
      dispatch(setProjectStatistics(null));
    }
    dispatch(setProjectStatisticsLoading(false));
    return;
  }
);
export const getUserGradation = createAsyncThunk(
  'dashboardSlice/getUserGradation',
  async (params: IUserGradationPayload, { dispatch }) => {
    dispatch(setUserGradationLoading(true));
    const data: any = await fetchUserGradation(params);
    if (data.data.result) {
      dispatch(setUserGradation(data.data.result));
    } else {
      dispatch(setUserGradation(null));
    }
    dispatch(setUserGradationLoading(false));
    return;
  }
);
