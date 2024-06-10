import { apiPrivateAxios, apiPrivateAxiosLimited, apiPublicAxios } from '@/core/api/axiosConfig';
import {
  IInfoChartActiveUserResponse,
  IMultisendBalanceResponse,
  IMultisendTransactionsHistoryResponse,
} from '@/core/types';
import { IUserTransaction } from '@/types/index';

export const fetchMultisendBalanceData = async () => {
  try {
    return await apiPrivateAxiosLimited.get<IMultisendBalanceResponse>('/multisend/balances');
  } catch (error) {
    //console.error(error);
  }
};
export const fetchMultisendTransactionsHistoryData = async ({ project }: { project: string }) => {
  try {
    const config: any = {
      params: {
        project,
        status: `completed,failed,cancelled`,
        type: 'scheduled',
      },
    };
    return await apiPrivateAxiosLimited.get<IMultisendTransactionsHistoryResponse>(
      '/multisend/transactions',
      config
    );
  } catch (error) {
    //console.error(error);
  }
};
export const fetchMultisendTransactionsInProgressData = async ({ project }: { project: string }) => {
  try {
    const config: any = {
      params: {
        project,
        status: `pending,scheduled`,
        type: 'scheduled',
      },
    };
    return await apiPrivateAxiosLimited.get<IMultisendTransactionsHistoryResponse>(
      '/multisend/transactions',
      config
    );
  } catch (error) {
    //console.error(error);
  }
};
export const fetchProjectTax = async ({ project, value }: { project: any; value: any }) => {
  try {
    const config: any = {
      params: {
        value,
      },
    };
    return await apiPrivateAxios.get<IMultisendTransactionsHistoryResponse>(
      `/multisend/${project}/tax`,
      config
    );
  } catch (error) {
    //console.error(error);
  }
};
export const sendUserTransactions = async (params: { transactions: IUserTransaction[] }) => {
  try {
    const config: any = { params };
    return await apiPrivateAxios.post<IInfoChartActiveUserResponse>(`/multisend/transactions`, null, config);
  } catch (error) {
    //console.error(error);
  }
};
