import {
  IDashboardBalanceResponse,
  IDashboardContractsResponse,
  IDashboardDaysResponse,
  IDashboardGasResponse,
  IDashboardMonthsResponse,
  IDashboardTransactionsResponse,
  IDashboardVolumeResponse,
  IDashboardWeeksResponse,
  IProjectStatisticsResponse,
  IProjectVotesPayload,
  IProjectVotesResponse,
  IUserGradationPayload,
  IUserGradationResponse,
  IUserTransactionsDatesPayload,
  IUserTransactionsDatesResponse,
} from '@/core/types';
import { apiPrivateAxios, apiPublicAxios } from '@/core/api/axiosConfig';
export const fetchDashboardTransactions = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardTransactionsResponse>(`/dashboard/${projectName}/transactions`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardContracts = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardContractsResponse>(`/dashboard/${projectName}/contracts`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardDays = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardDaysResponse>(`/dashboard/${projectName}/days`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardWeeks = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardWeeksResponse>(`/dashboard/${projectName}/weeks`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardMonths = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardMonthsResponse>(`/dashboard/${projectName}/months`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardGas = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardGasResponse>(`/dashboard/${projectName}/gas`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardVolume = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardVolumeResponse>(`/dashboard/${projectName}/volume`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchDashboardBalance = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IDashboardBalanceResponse>(`/dashboard/${projectName}/balance`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchProjectStatistics = async (projectName: string) => {
  try {
    return await apiPublicAxios.get<IProjectStatisticsResponse>(`/dashboard/${projectName}/overview`);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchUserGradation = async (params: IUserGradationPayload) => {
  const { projectName, wallet } = params;
  try {
    const config: any = {
      headers: {
        'Cache-Control': 'max-age=300',
      },
    };
    return await apiPublicAxios.get<IUserGradationResponse>(`/dashboard/${projectName}/${wallet}`, config);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchUserTransactionsDates = async (params: IUserTransactionsDatesPayload) => {
  const { projectName } = params;
  try {
    return await apiPrivateAxios.get<IUserTransactionsDatesResponse>(
      `/dashboard/${projectName}/user-transactions`
    );
  } catch (error) {
    //console.error(error);
  }
};
export const fetchProjectVotes = async (params: IProjectVotesPayload) => {
  const { projectName } = params;
  try {
    return await apiPublicAxios.get<IProjectVotesResponse>(`/dashboard/${projectName}/vote`);
  } catch (error) {
    //console.error(error);
  }
};
