import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginPayload } from '@/core/types';
import { login } from '@/core/thunk/auth.thunk';

interface IAuthState {
  token: string | null;
  loading: boolean;
  isClaimed: boolean;
}

const initialState: IAuthState = {
  token: null,
  isClaimed: false,
  loading: false,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.data.result.token;
          state.isClaimed = action.payload.data.result.isClaimed;
        }
        state.loading = false;
      });
  },
});

export default authSlice.reducer;

export const {} = authSlice.actions;
