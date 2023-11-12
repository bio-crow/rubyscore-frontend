import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReferrals, fetchUserNftList, fetchUserScoreList } from '@/core/api/user.api';
import { wagmiClaimName } from '@/core/api/contract.api';
import { IClaimPayload } from '@/core/types';
import { formatEther } from 'viem';
import {
  setActiveUserLevelsInfo,
  setPremiumPrice,
  setPremiumStatus,
  setUserLevelsInfo,
  setUserName,
  setUserNFTList,
  setUserScoreList,
  setUserScoreListLoading,
} from '@/core/state/user.state';
import { wagmiInitUserDataFromContract } from '@/core/api/contract.achievements.api';
export const getReferrals = createAsyncThunk('userSlice/fetchReferrals', async () => {
  return await fetchReferrals();
});
export const getUserNFTList = createAsyncThunk(
  'userSlice/getUserNFTList',
  async (wallet: string, { dispatch }) => {
    const data: any = await fetchUserNftList(wallet);
    if (data?.data?.result) {
      dispatch(setUserNFTList(data.data.result.map((item: any) => item.properties.image.description)));
    } else {
      dispatch(setUserNFTList([]));
    }
    return;
  }
);
export const getUserScoreList = createAsyncThunk(
  'userSlice/getUserScoreList',
  async (wallet: string, { dispatch }) => {
    dispatch(setUserScoreListLoading(true));
    const data: any = await fetchUserScoreList(wallet);
    if (data.data.result) {
      dispatch(setUserScoreList(data.data.result));
    } else {
      dispatch(setUserScoreList(null));
    }
    dispatch(setUserScoreListLoading(false));
    return;
  }
);
export const claimProfile = createAsyncThunk(
  'userSlice/claimProfile',
  async (data: IClaimPayload, { dispatch }) => {
    const result = await wagmiClaimName(data);
    dispatch(initUserDataFromContract(data.account));
    return result;
  }
);

export const initUserDataFromContract = createAsyncThunk(
  'userSlice/initUserDataFromContract',
  async (address: any, { dispatch }) => {
    const result = await wagmiInitUserDataFromContract(address);
    dispatch(setUserName(result.userName));
    dispatch(setUserLevelsInfo(result.levelsInfo));
    dispatch(setPremiumStatus(result.userStatus));
    dispatch(setPremiumPrice(formatEther(result.premiumPrice)));
  }
);
export const activeUserDataFromContract = createAsyncThunk(
  'userSlice/activeUserDataFromContract',
  async (address: any, { dispatch }) => {
    const result = await wagmiInitUserDataFromContract(address);
    dispatch(setActiveUserLevelsInfo(result.levelsInfo));
  }
);