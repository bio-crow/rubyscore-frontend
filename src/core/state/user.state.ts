import { createSlice } from '@reduxjs/toolkit';
import { getReferrals } from '@/core/thunk/user.thunk';

interface IAuthState {
  referrals: any[];
  refCode: string | null;
  loading: boolean;
}

const initialState: IAuthState = {
  referrals: [],
  refCode: null,
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
          state.refCode = action.payload.data.result.refCode;
        }
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

export const {} = userSlice.actions;
