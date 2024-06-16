import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDepositAnotherPayload, IDepositSinglePayload, IUserTransactionPayload } from '@/core/types';
import {
  depositLoading,
  setBalanceData,
  setDeleteLoading,
  setHistoryData,
  setInProgressData,
  setNetworkOptions,
  setReferralLoadingId,
  setReferralsData,
  setSendTransactionsLoading,
  setTotalBalance,
} from '@/core/state/deposit.state';
import {
  wagmiDepositAnotherWallet,
  wagmiDepositSingleWallet,
  wagmiReferralClaimProfit,
} from '@/core/api/contract/contract.deposit.api';
import {
  fetchClaimReferrals,
  fetchDeleteTransactions,
  fetchMultisendBalanceData,
  fetchMultisendTransactionsHistoryData,
  fetchMultisendTransactionsInProgressData,
  fetchReferrals,
  sendUserTransactions,
} from '@/core/api/deposit.api';
import {
  DashboardTabIndexType,
  IMultisendTotalBalanceData,
  IMultisendTransactionsHistoryData,
  IReferralClaimData,
} from '@/types/index';
import { toast } from 'react-toastify';
import { networkStaticData } from '@/constants/index';

export const getMultisendBalance = createAsyncThunk(
  'depositSlice/getMultisendBalance',
  async (args, { dispatch }) => {
    const res: any = await fetchMultisendBalanceData();
    const data = res?.data;
    if (data?.is_ok) {
      const total: IMultisendTotalBalanceData = {
        totalBalance: data.totalBalance,
        totalBalanceFormatted: data.totalBalanceFormatted,
        totalBalanceOnHold: data.totalBalanceOnHold,
        totalBalanceOnHoldFormatted: data.totalBalanceOnHoldFormatted,
      };
      const networkOptions = data.result?.map((item: any) => {
        const project = item.project as DashboardTabIndexType;
        return {
          text: networkStaticData[project]?.label,
          icon: networkStaticData[project]?.icon,
          value: item.project,
          balance: item.balanceFormatted,
        };
      });
      dispatch(setBalanceData(data.result));
      dispatch(setTotalBalance(total));
      dispatch(setNetworkOptions(networkOptions));
    }
    return;
  }
);
export const getMultisendTransactionsHistory = createAsyncThunk(
  'depositSlice/getMultisendTransactionsHistory',
  async ({ project }: { project: string }, { dispatch }) => {
    const res: any = await fetchMultisendTransactionsHistoryData({ project });
    const data = res?.data;
    if (data?.is_ok) {
      dispatch(setHistoryData(data.result));
    }
    return;
  }
);
export const getMultisendTransactionsInProgress = createAsyncThunk(
  'depositSlice/getMultisendTransactionsInProgress',
  async ({ project }: { project: string }, { dispatch }) => {
    const res: any = await fetchMultisendTransactionsInProgressData({ project });
    const data = res?.data;
    if (data?.is_ok) {
      dispatch(setInProgressData(data.result));
    }
    return;
  }
);
export const depositSingle = createAsyncThunk(
  'depositSlice/depositSingle',
  async (data: IDepositSinglePayload, { dispatch }) => {
    dispatch(depositLoading(true));
    await wagmiDepositSingleWallet(data);
    dispatch(depositLoading(false));
    return;
  }
);

export const depositAnother = createAsyncThunk(
  'depositSlice/depositAnother',
  async (data: IDepositAnotherPayload, { dispatch }) => {
    dispatch(depositLoading(true));
    await wagmiDepositAnotherWallet(data);
    dispatch(depositLoading(false));
    return;
  }
);
export const setUserTransactions = createAsyncThunk(
  'depositSlice/setUserTransactions',
  async (params: IUserTransactionPayload, { dispatch }) => {
    dispatch(setSendTransactionsLoading(true));
    const res: any = await sendUserTransactions(params);
    if (res?.data?.is_ok) {
      toast(res?.data.message, { position: 'top-right' });
    }
    dispatch(setSendTransactionsLoading(false));
    return;
  }
);
export const deleteTransactions = createAsyncThunk(
  'depositSlice/deleteTransactions',
  async (params: { ids: number[] }, { dispatch }) => {
    dispatch(setDeleteLoading(true));
    const res: any = await fetchDeleteTransactions(params);
    if (res?.data?.is_ok) {
      dispatch(setInProgressData([]));
      toast(res?.data.message, { position: 'top-right' });
    }
    dispatch(setDeleteLoading(false));
    return;
  }
);
export const deleteTransactionById = createAsyncThunk(
  'depositSlice/deleteTransactionById',
  async (params: { id: number }, { dispatch, getState }) => {
    const { id } = params;
    const res: any = await fetchDeleteTransactions({ ids: [id] });
    if (res?.data?.is_ok) {
      const state: any = getState();
      const updatedInProcess = state.depositState.inProgressData.filter(
        (item: IMultisendTransactionsHistoryData) => item.id !== id
      );
      dispatch(setInProgressData(updatedInProcess));
      toast(res?.data.message, { position: 'top-right' });
    }
    return;
  }
);
export const getUserReferrals = createAsyncThunk(
  'depositSlice/getUserReferrals',
  async (args, { dispatch }) => {
    const res: any = await fetchReferrals();
    if (res?.data?.is_ok) {
      dispatch(setReferralsData(res.data.result));
    }
    return;
  }
);
export const claimReferrals = createAsyncThunk(
  'depositSlice/claimReferrals',
  async (params: { id: string; project: string; referralCode: string }, { dispatch }) => {
    const { id, project, referralCode } = params;
    dispatch(setReferralLoadingId(id));
    const res: any = await fetchClaimReferrals({
      project,
      referralCode,
    });
    const data = res?.data;
    if (data?.is_ok) {
      const referralClaimData: IReferralClaimData = data.result;
      await wagmiReferralClaimProfit({ ...referralClaimData, project });
    }
    dispatch(setReferralLoadingId(null));
    dispatch(getUserReferrals());
    return;
  }
);
