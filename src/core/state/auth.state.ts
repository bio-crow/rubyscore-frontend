import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, refreshToken } from '@/core/thunk/auth.thunk';

interface IAuthState {
  token: string | null;
  loading: boolean;
  isClaimed: boolean;
  isAuth: boolean;
}

const initialState: IAuthState = {
  token: null,
  isClaimed: false,
  loading: false,
  isAuth: false,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.data.result.token;
          state.isClaimed = action.payload.data.result.isClaimed;
          state.isAuth = true;
        }
        state.loading = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.data.result.token;
        }
      });
  },
});

export default authSlice.reducer;

export const { setIsAuth, setAuthLoading } = authSlice.actions;
