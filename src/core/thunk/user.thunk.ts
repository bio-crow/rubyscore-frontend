import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReferrals } from '@/core/api/user.api';

export const getReferrals = createAsyncThunk('userSlice/fetchReferrals', async () => {
  return await fetchReferrals();
});
