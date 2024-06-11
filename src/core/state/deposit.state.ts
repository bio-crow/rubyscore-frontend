import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DashboardTabIndexType,
  IAttestationData,
  IMultisendBalanceData,
  IMultisendTotalBalanceData,
  IMultisendTransactionsHistoryData,
} from '@/types/index';
import { fetchMultisendBalanceData } from '@/core/api/deposit.api';

interface IDepositState {
  activeProject: DashboardTabIndexType;
  depositLoading: boolean;
  sendTransactionsLoading: boolean;
  deleteLoading: boolean;
  balanceData: IMultisendBalanceData[];
  totalBalance: IMultisendTotalBalanceData;
  historyData: IMultisendTransactionsHistoryData[];
  inProgressData: IMultisendTransactionsHistoryData[];
}

const initialState: IDepositState = {
  activeProject: 'scroll',
  depositLoading: false,
  sendTransactionsLoading: false,
  deleteLoading: false,
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
    setDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.deleteLoading = action.payload;
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
    setActiveProject: (state, action: PayloadAction<DashboardTabIndexType>) => {
      state.activeProject = action.payload;
    },
    setSendTransactionsLoading: (state, action: PayloadAction<boolean>) => {
      state.sendTransactionsLoading = action.payload;
    },
  },
});

export default depositSlice.reducer;

export const {
  depositLoading,
  setTotalBalance,
  setActiveProject,
  setHistoryData,
  setBalanceData,
  setInProgressData,
  setSendTransactionsLoading,
  setDeleteLoading,
} = depositSlice.actions;
