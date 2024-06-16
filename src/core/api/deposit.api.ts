import { apiPrivateAxios, apiPrivateAxiosLimited, apiPublicAxios } from '@/core/api/axiosConfig';
import {
  IInfoChartActiveUserResponse,
  IMultisendBalanceResponse,
  IMultisendReferralsClaimResponse,
  IMultisendReferralsResponse,
  IMultisendTransactionsHistoryResponse,
} from '@/core/types';
import { IUserTransaction } from '@/types/index';
import { toast } from 'react-toastify';

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
export const sendUserTransactions = async (data: { transactions: IUserTransaction[] }) => {
  try {
    return await apiPrivateAxios.post<IInfoChartActiveUserResponse>(`/multisend/transactions`, data);
  } catch (error: any) {
    toast(error.response?.data?.message || 'Something went wrong', { position: 'top-right' });
    //console.error(error);
  }
};
export const fetchDeleteTransactions = async (data: { ids: number[] }) => {
  try {
    const config: any = { data };
    return await apiPrivateAxios.delete(`/multisend/transactions`, config);
  } catch (error: any) {
    toast(error.response?.data?.message || 'Something went wrong', { position: 'top-right' });
    //console.error(error);
  }
};
export const fetchReferrals = async () => {
  try {
    return await apiPrivateAxios.get<IMultisendReferralsResponse>(`/multisend/referral-link`);
  } catch (error: any) {
    toast(error.response?.data?.message || 'Something went wrong', { position: 'top-right' });
    //console.error(error);
  }
};
export const fetchClaimReferrals = async (data: { project: string; referralCode: string }) => {
  try {
    return await apiPrivateAxios.post<IMultisendReferralsClaimResponse>(`/multisend/referral-claim`, data);
  } catch (error: any) {
    toast(error.response?.data?.message || 'Something went wrong', { position: 'top-right' });
    //console.error(error);
  }
};
