import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginPayload } from '@/core/types';
import { fetchLogin, fetchRefreshToken } from '@/core/api/auth.api';
import { disconnect } from '@wagmi/core';

export const login = createAsyncThunk('authSlice/fetchLogin', async (data: ILoginPayload) => {
  return await fetchLogin(data);
});
export const refreshToken = createAsyncThunk('authSlice/fetchRefresh', async () => {
  return await fetchRefreshToken();
});
export const logout = createAsyncThunk('authSlice/fetchLogout', async () => {
  return await disconnect();
});
