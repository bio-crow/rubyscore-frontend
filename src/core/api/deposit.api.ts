import { apiPrivateAxiosLimited } from '@/core/api/axiosConfig';
import { IMultisendBalanceResponse, IMultisendTransactionsHistoryResponse } from '@/core/types';

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
