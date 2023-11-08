import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { claimProfile, getReferrals } from '@/core/thunk/user.thunk';
import { ILevelsInfo, IReferral, IScoreList } from '@/types/index';

interface IAuthState {
  referrals: IReferral[];
  refCode: string | null;
  loading: boolean;
  claimProfileLoading: boolean;
  userName: string | null;
  premiumStatus: boolean;
  premiumPrice: string;
  userNFTList: string[];
  userScoreList: IScoreList | null;
  userScoreListLoading: boolean;
  userLevelsInfo: ILevelsInfo | null;
}

const initialState: IAuthState = {
  referrals: [],
  refCode: null,
  loading: false,
  claimProfileLoading: false,
  userName: null,
  premiumStatus: false,
  premiumPrice: '0',
  userNFTList: [],
  userScoreList: null,
  userScoreListLoading: false,
  userLevelsInfo: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.userName = action.payload;
    },
    setUserNFTList: (state, action: PayloadAction<string[]>) => {
      state.userNFTList = action.payload;
    },
    setUserScoreList: (state, action: PayloadAction<IScoreList | null>) => {
      state.userScoreList = action.payload;
    },
    setUserScoreListLoading: (state, action: PayloadAction<boolean>) => {
      state.userScoreListLoading = action.payload;
    },
    setPremiumStatus: (state, action: PayloadAction<boolean>) => {
      state.premiumStatus = action.payload;
    },
    setPremiumPrice: (state, action: PayloadAction<string>) => {
      state.premiumPrice = action.payload;
    },
    setUserLevelsInfo: (state, action: PayloadAction<ILevelsInfo | null>) => {
      state.userLevelsInfo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getReferrals.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getReferrals.fulfilled, (state, action) => {
        if (action.payload) {
          state.referrals = action.payload.data.result.referrals;
          state.refCode = action.payload.data.result.refCode;
        }
        state.loading = false;
      })
      .addCase(claimProfile.pending, (state, action) => {
        state.claimProfileLoading = true;
      })
      .addCase(claimProfile.fulfilled, (state, action) => {
        state.claimProfileLoading = false;
      });
  },
});

export default userSlice.reducer;

export const {
  setUserName,
  setUserScoreListLoading,
  setUserNFTList,
  setUserScoreList,
  setPremiumStatus,
  setPremiumPrice,
  setUserLevelsInfo,
} = userSlice.actions;
