import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { claimProfile, getNameByAddress, getPremiumStatus, getReferrals } from '@/core/thunk/user.thunk';
import { INFTData, IReferral, IScoreList } from '@/types/index';

interface IAuthState {
  referrals: IReferral[];
  refCode: string | null;
  loading: boolean;
  claimProfileLoading: boolean;
  userName: string | null;
  premiumStatus: boolean;
  premiumPrice: string;
  userNFTList: INFTData[];
  userScoreList: IScoreList | null;
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
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.userName = action.payload;
    },
    setUserNFTList: (state, action: PayloadAction<INFTData[]>) => {
      state.userNFTList = action.payload;
    },
    setUserScoreList: (state, action: PayloadAction<IScoreList | null>) => {
      state.userScoreList = action.payload;
    },
    setPremiumStatus: (state, action: PayloadAction<boolean>) => {
      state.premiumStatus = action.payload;
    },
    setPremiumPrice: (state, action: PayloadAction<string>) => {
      state.premiumPrice = action.payload;
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
      })
      .addCase(getNameByAddress.fulfilled, (state, action) => {
        if (action.payload) {
          state.userName = action.payload;
        }
      })
      .addCase(getPremiumStatus.fulfilled, (state, action) => {
        if (action.payload) {
          state.premiumStatus = action.payload;
        }
      });
  },
});

export default userSlice.reducer;

export const { setUserName, setUserNFTList, setUserScoreList, setPremiumStatus, setPremiumPrice } =
  userSlice.actions;
