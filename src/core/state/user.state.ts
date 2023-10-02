import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { claimProfile, getNameByAddress, getPremiumStatus, getReferrals } from '@/core/thunk/user.thunk';
import { IReferral } from '@/types/index';

interface IAuthState {
  referrals: IReferral[];
  refCode: string | null;
  loading: boolean;
  claimProfileLoading: boolean;
  userName: string | null;
  premiumStatus: boolean;
}

const initialState: IAuthState = {
  referrals: [],
  refCode: null,
  loading: false,
  claimProfileLoading: false,
  userName: null,
  premiumStatus: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.userName = action.payload;
    },
    setPremiumStatus: (state, action: PayloadAction<boolean>) => {
      state.premiumStatus = action.payload;
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

export const { setUserName, setPremiumStatus } = userSlice.actions;
