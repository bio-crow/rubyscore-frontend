import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DashboardTabIndexType,
  IMultisendBalanceData,
  IMultisendTotalBalanceData,
  IMultisendTransactionsHistoryData,
  INetworkOption,
  IReferralLink,
} from '@/types/index';

interface IDepositState {
  activeProject: DashboardTabIndexType | 'all';
  depositLoading: boolean;
  sendTransactionsLoading: boolean;
  deleteLoading: boolean;
  isSendInstant: boolean;
  referralLoadingId: string | null;
  networkOptions: INetworkOption[];
  balanceData: IMultisendBalanceData[];
  balanceDataLoading: boolean;
  totalBalance: IMultisendTotalBalanceData;
  historyData: IMultisendTransactionsHistoryData[];
  inProgressData: IMultisendTransactionsHistoryData[];
  inProgressDataLoading: boolean;
  referralsData: IReferralLink[];
}

const initialState: IDepositState = {
  activeProject: 'all',
  depositLoading: false,
  sendTransactionsLoading: false,
  deleteLoading: false,

  isSendInstant: false,
  balanceData: [],
  balanceDataLoading: false,
  networkOptions: [],
  totalBalance: {
    totalBalance: '',
    totalBalanceFormatted: '',
    totalBalanceOnHold: '',
    totalBalanceOnHoldFormatted: '',
  },
  historyData: [],
  inProgressData: [],
  inProgressDataLoading: false,
  referralsData: [],
  referralLoadingId: null,
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
    setReferralLoadingId: (state, action: PayloadAction<string | null>) => {
      state.referralLoadingId = action.payload;
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
    setBalanceDataLoading: (state, action: PayloadAction<boolean>) => {
      state.balanceDataLoading = action.payload;
    },
    setHistoryData: (state, action: PayloadAction<IMultisendTransactionsHistoryData[]>) => {
      state.historyData = action.payload;
    },
    setInProgressData: (state, action: PayloadAction<IMultisendTransactionsHistoryData[]>) => {
      state.inProgressData = action.payload;
    },
    setInProgressDataLoading: (state, action: PayloadAction<boolean>) => {
      state.inProgressDataLoading = action.payload;
    },
    setReferralsData: (state, action: PayloadAction<IReferralLink[]>) => {
      state.referralsData = action.payload;
    },
    setActiveProject: (state, action: PayloadAction<DashboardTabIndexType | 'all'>) => {
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
  setInProgressDataLoading,
  setSendTransactionsLoading,
  setDeleteLoading,
  setIsSendInstant,
  setNetworkOptions,
  setReferralsData,
  setReferralLoadingId,
  setBalanceDataLoading,
} = depositSlice.actions;
