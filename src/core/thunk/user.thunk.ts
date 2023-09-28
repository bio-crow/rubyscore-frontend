import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReferrals } from '@/core/api/user.api';
import { wagmiClaimName, wagmiGetNameByOwner } from '@/core/api/contract.api';
import { IClaimPayload } from '@/core/types';
import { disconnect } from '@wagmi/core';
export const getReferrals = createAsyncThunk('userSlice/fetchReferrals', async () => {
  return await fetchReferrals();
});
export const claimProfile = createAsyncThunk(
  'userSlice/claimProfile',
  async (data: IClaimPayload, { dispatch }) => {
    const result = await wagmiClaimName(data);
    dispatch(getNameByAddress(data.account));
    return result;
  }
);
export const getNameByAddress = createAsyncThunk(
  'userSlice/getNameByAddress',
  async (address: any, { dispatch }) => {
    return await wagmiGetNameByOwner(address);
  }
);
