import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDepositAnotherPayload, IDepositSinglePayload } from '@/core/types';
import {
  depositLoading,
  setBalanceData,
  setHistoryData,
  setInProgressData,
  setTotalBalance,
} from '@/core/state/deposit.state';
import {
  wagmiDepositAnotherWallet,
  wagmiDepositSingleWallet,
} from '@/core/api/contract/contract.deposit.api';
import {
  fetchMultisendBalanceData,
  fetchMultisendTransactionsHistoryData,
  fetchMultisendTransactionsInProgressData,
} from '@/core/api/deposit.api';
import { IMultisendTotalBalanceData } from '@/types/index';
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
      dispatch(setBalanceData(data.result));
      dispatch(setTotalBalance(total));
    }
    return;
  }
);
export const getMultisendTransactionsHistory = createAsyncThunk(
  'depositSlice/getMultisendTransactionsHistory',
  async (args, { dispatch }) => {
    const res: any = await fetchMultisendTransactionsHistoryData();
    const data = res?.data;
    if (data?.is_ok) {
      dispatch(setHistoryData(data.result));
    }
    return;
  }
);
export const getMultisendTransactionsInProgress = createAsyncThunk(
  'depositSlice/getMultisendTransactionsInProgress',
  async (args, { dispatch }) => {
    const res: any = await fetchMultisendTransactionsInProgressData();
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
