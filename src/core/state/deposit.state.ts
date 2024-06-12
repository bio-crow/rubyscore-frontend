import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DashboardTabIndexType,
  IMultisendBalanceData,
  IMultisendTotalBalanceData,
  IMultisendTransactionsHistoryData,
  INetworkOption,
} from '@/types/index';

interface IDepositState {
  activeProject: DashboardTabIndexType;
  depositLoading: boolean;
  sendTransactionsLoading: boolean;
  deleteLoading: boolean;
  isSendInstant: boolean;
  networkOptions: INetworkOption[];
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
  isSendInstant: false,
  balanceData: [],
  networkOptions: [],
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
    setIsSendInstant: (state, action: PayloadAction<boolean>) => {
      state.isSendInstant = action.payload;
    },
    setNetworkOptions: (state, action: PayloadAction<INetworkOption[]>) => {
      state.networkOptions = action.payload;
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
  setIsSendInstant,
  setNetworkOptions,
} = depositSlice.actions;
