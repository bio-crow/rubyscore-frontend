import { createSlice } from '@reduxjs/toolkit';
import { getReferrals } from '@/core/thunk/user.thunk';

interface IAuthState {
  referrals: any[];
  referralLink: string | null;
  loading: boolean;
}

const initialState: IAuthState = {
  referrals: [],
  referralLink: null,
  loading: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getReferrals.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getReferrals.fulfilled, (state, action) => {
        if (action.payload) {
          state.referrals = action.payload.data.result.referrals;
          state.referralLink = action.payload.data.result.referralLink;
        }
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

export const {} = userSlice.actions;
