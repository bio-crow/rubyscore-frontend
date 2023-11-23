import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { refreshToken } from '@/core/thunk/auth.thunk';

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
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setIsClaimed: (state, action: PayloadAction<boolean>) => {
      state.isClaimed = action.payload;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      if (action.payload) {
        state.token = action.payload.data.result.token;
      }
    });
  },
});

export default authSlice.reducer;

export const { setIsAuth, setToken, setIsClaimed, setAuthLoading } = authSlice.actions;
