import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  mapMayLevelDataFromResult,
  transformApiBalanceResponse,
  transformApiChartInfoResponse,
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
  fetchInfoChartActiveUser,
  fetchInfoChartTransactions,
  fetchInfoChartTransactionsBridge,
  fetchInfoChartTVL,
  fetchInfoChartVolume,
  fetchProjectStatistics,
  fetchProjectVotes,
  fetchUserGradation,
  fetchUserTransactionsDates,
} from '@/core/api/dashboard.api';
import {
  setLoading,
  setChartData,
  setMyLevelData,
  setProjectStatistics,
  setProjectStatisticsLoading,
  setUserGradationLoading,
  setUserGradation,
  setLevelLoading,
  setMyLevelDataLoading,
  setUserTransactionsDates,
  setDashboardTabsVoteInfo,
  updateDashboardTabsVoteInfo,
  setDashboardTabsVoteInfoLoading,
  setInfoChartLoading,
  setInfoChartData,
} from '@/core/state/dashboard.state';
import {
  ChartIndexType,
  DashboardTabIndexType,
  IChartDot,
  IDashboardTabsVoteInfo,
  InfoChartIndexType,
} from '@/types/index';
import { searchUser } from '@/core/api/leaderboard.api';
import { IClaimLevelPayload, IUserGradationPayload, IUserTransactionsDatesPayload } from '@/core/types';
import {
  fetchClaimLevelSignature,
  wagmiClaimLevel,
  wagmiLevels,
} from '@/core/api/contract/contract.achievements.api';
import { initUserDataFromContract } from '@/core/thunk/user.thunk';
import { wagmiVote } from '@/core/api/contract/contract.vote.api';

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
    return;
  }
);
export const getDashboardInfoChartData = createAsyncThunk(
  'dashboardSlice/getDashboardInfoChartData',
  async (
    payload: { projectName: DashboardTabIndexType; type: InfoChartIndexType; interval: number[] },
    { dispatch }
  ) => {
    dispatch(setInfoChartLoading(true));
    dispatch(setInfoChartData([]));
    let preparedData: IChartDot[] = [];
    let result;
    switch (payload.type) {
      case 'activeUser':
        result = await fetchInfoChartActiveUser(payload);
        break;
      case 'transactions':
        result = await fetchInfoChartTransactions(payload);
        break;
      case 'tvl':
        result = await fetchInfoChartTVL(payload);
        break;
      case 'transactionsBridge':
        result = await fetchInfoChartTransactionsBridge(payload);
        break;
      case 'volume':
        result = await fetchInfoChartVolume(payload);
        break;
    }
    if (result?.data) {
      preparedData = transformApiChartInfoResponse(result.data);
    }
    dispatch(setInfoChartData(preparedData));
    dispatch(setInfoChartLoading(false));
    return;
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
    dispatch(setLevelLoading(null));
    dispatch(setMyLevelDataLoading(true));
    const data: any = await searchUser(params);
    const levelStatus: any = await wagmiLevels(params);
    if (data.data.result) {
      const levelData = mapMayLevelDataFromResult(data.data.result, levelStatus);
      dispatch(setMyLevelData(levelData));
    } else {
      dispatch(setMyLevelData(null));
    }
    dispatch(setMyLevelDataLoading(false));
    return;
  }
);
export const updateUserLevelInfo = createAsyncThunk(
  'dashboardSlice/updateUserLevelInfo',
  async (
    params: {
      wallet: string;
      project: string;
    },
    { dispatch }
  ) => {
    const data: any = await searchUser(params);
    const levelStatus: any = await wagmiLevels(params);
    if (data.data.result) {
      const levelData = mapMayLevelDataFromResult(data.data.result, levelStatus);
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
      account: any;
    },
    { dispatch }
  ) => {
    dispatch(setLevelLoading(params.nftId));
    const data: any = await fetchClaimLevelSignature(params);
    if (data?.data?.result?.mintParams && data?.data?.result?.signature) {
      const claimParams: IClaimLevelPayload = {
        signature: data?.data?.result?.signature,
        mintParams: data?.data?.result?.mintParams,
        account: params.account,
        project: params.project,
      };
      const result = await wagmiClaimLevel(claimParams);
      if (result) {
        dispatch(
          getUserLevelInfo({
            wallet: params.account,
            project: params.project,
          })
        );
        dispatch(initUserDataFromContract(params.account));
      }
    }
    dispatch(setLevelLoading(null));
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
export const getUserTransactionsDates = createAsyncThunk(
  'dashboardSlice/getUserTransactionsDates',
  async (params: IUserTransactionsDatesPayload, { dispatch }) => {
    const data: any = await fetchUserTransactionsDates(params);
    if (data.data.result) {
      dispatch(setUserTransactionsDates(data.data.result));
    } else {
      dispatch(setUserTransactionsDates(null));
    }
    return;
  }
);
export const initDashboardTabsVotes = createAsyncThunk(
  'dashboardSlice/initDashboardTabsVotes',
  async (args, { dispatch }) => {
    const projects: DashboardTabIndexType[] = [
      'zk_era',
      'linea',
      'base',
      'zk_evm',
      'scroll',
      'manta',
      'blast',
      'zora',
      // 'taiko',
      'mantle',
    ];
    const initValue: IDashboardTabsVoteInfo = {
      zk_era: { count: null, is_ok: true },
      linea: { count: null, is_ok: true },
      base: { count: null, is_ok: true },
      zk_evm: { count: null, is_ok: true },
      scroll: { count: null, is_ok: true },
      rubyscore: { count: null, is_ok: true },
      manta: { count: null, is_ok: true },
      blast: { count: null, is_ok: true },
      zora: { count: null, is_ok: true },
      // taiko: { count: null, is_ok: true },
      mantle: { count: null, is_ok: true },
    };
    const promises = projects.map(project =>
      fetchProjectVotes({
        projectName: project,
      })
    );
    const values = await Promise.all(promises);
    values.forEach((data, index) => {
      const count = data?.data?.result?.count ?? null;
      if (data?.data?.result) {
        initValue[projects[index]].count = count;
      }
    });
    dispatch(setDashboardTabsVoteInfo(initValue));
    return;
  }
);
export const updateDashboardTabsVotesItem = createAsyncThunk(
  'dashboardSlice/updateDashboardTabsVotesItem',
  async (payload: { projectName: string; wallet: any }, { dispatch }) => {
    const { projectName, wallet } = payload;
    dispatch(setDashboardTabsVoteInfoLoading(projectName));
    try {
      await wagmiVote({
        project: projectName,
        account: wallet,
      });
    } catch (e) {
      //console.error(error);
    }
    const data = await fetchProjectVotes({ projectName });
    if (data?.data?.result) {
      const response = data?.data;
      dispatch(
        updateDashboardTabsVoteInfo({ projectName, count: response?.result?.count, is_ok: response?.is_ok })
      );
    }
    dispatch(setDashboardTabsVoteInfoLoading(null));
    return;
  }
);
