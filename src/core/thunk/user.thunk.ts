import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReferrals, fetchUserNftList } from '@/core/api/user.api';
import {
  wagmiClaimName,
  wagmiGetNameByOwner,
  wagmiGetPremiumPrice,
  wagmiGetPremiumStatus,
} from '@/core/api/contract.api';
import { IClaimPayload } from '@/core/types';
import { formatEther } from 'viem';
import { setPremiumPrice, setUserNFTList } from '@/core/state/user.state';
export const getReferrals = createAsyncThunk('userSlice/fetchReferrals', async () => {
  return await fetchReferrals();
});
export const getUserNFTList = createAsyncThunk(
  'userSlice/getUserNFTList',
  async (wallet: string, { dispatch }) => {
    const data: any = await fetchUserNftList(wallet);
    if (data.data.result) {
      console.log(data.data.result);
      dispatch(setUserNFTList(data.data.result));
    } else {
      dispatch(setUserNFTList([]));
    }
    return;
  }
);
export const claimProfile = createAsyncThunk(
  'userSlice/claimProfile',
  async (data: IClaimPayload, { dispatch }) => {
    const result = await wagmiClaimName(data);
    dispatch(getNameByAddress(data.account));
    dispatch(getPremiumStatus(data.account));
    return result;
  }
);
export const getNameByAddress = createAsyncThunk('userSlice/getNameByAddress', async (address: any) => {
  return await wagmiGetNameByOwner(address);
});
export const getPremiumStatus = createAsyncThunk('userSlice/getPremiumStatus', async (address: any) => {
  return await wagmiGetPremiumStatus(address);
});
export const getPremiumSPrice = createAsyncThunk('userSlice/getPremiumPrice', async (arg, { dispatch }) => {
  const result = await wagmiGetPremiumPrice();
  dispatch(setPremiumPrice(formatEther(result)));
});
