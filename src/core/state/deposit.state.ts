import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAttestationData,
  IMultisendBalanceData,
  IMultisendTotalBalanceData,
  IMultisendTransactionsHistoryData,
} from '@/types/index';
import { fetchMultisendBalanceData } from '@/core/api/deposit.api';

interface IDepositState {
  depositLoading: boolean;
  balanceData: IMultisendBalanceData[];
  totalBalance: IMultisendTotalBalanceData;
  historyData: IMultisendTransactionsHistoryData[];
  inProgressData: IMultisendTransactionsHistoryData[];
}

const initialState: IDepositState = {
  depositLoading: false,
  balanceData: [],
  totalBalance: {
    totalBalance: '',
    totalBalanceFormatted: '',
    totalBalanceOnHold: '',
    totalBalanceOnHoldFormatted: '',
  },
  historyData: [],
  inProgressData: [],
};

export const depositSlice = createSlice({
  initialState,
  name: 'depositSlice',
  reducers: {
    depositLoading: (state, action: PayloadAction<boolean>) => {
      state.depositLoading = action.payload;
    },
    setTotalBalance: (state, action: PayloadAction<IMultisendTotalBalanceData>) => {
      state.totalBalance = action.payload;
    },
    setBalanceData: (state, action: PayloadAction<IMultisendBalanceData[]>) => {
      state.balanceData = action.payload;
    },
    setHistoryData: (state, action: PayloadAction<IMultisendTransactionsHistoryData[]>) => {
      state.historyData = action.payload;
    },
    setInProgressData: (state, action: PayloadAction<IMultisendTransactionsHistoryData[]>) => {
      state.inProgressData = action.payload;
    },
  },
});

export default depositSlice.reducer;

export const { depositLoading, setTotalBalance, setHistoryData, setBalanceData, setInProgressData } =
  depositSlice.actions;
