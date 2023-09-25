import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginPayload } from '@/core/types';
import { fetchLogin, fetchRefreshToken } from '@/core/api/auth.api';

export const login = createAsyncThunk('authSlice/fetchLogin', async (data: ILoginPayload) => {
  return await fetchLogin(data);
});
export const refreshToken = createAsyncThunk('authSlice/fetchRefresh', async () => {
  return await fetchRefreshToken();
});
