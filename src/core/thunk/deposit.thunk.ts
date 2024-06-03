import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDepositAnotherPayload, IDepositSinglePayload } from '@/core/types';
import { depositLoading } from '@/core/state/deposit.state';
import {
  wagmiDepositAnotherWallet,
  wagmiDepositSingleWallet,
} from '@/core/api/contract/contract.deposit.api';
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
