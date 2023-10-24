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
} from '@/core/api/dashboard.api';
import { setLoading, setChartData, setMyLevelData } from '@/core/state/dashboard.state';
import { ChartIndexType, DashboardTabIndexType, IChartDot } from '@/types/index';
import { setUserStatistics, setUserStatisticsLoading } from '@/core/state/leaderboard.state';
import { searchUser } from '@/core/api/leaderboard.api';

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
