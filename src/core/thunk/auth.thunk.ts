import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginPayload } from '@/core/types';
import { fetchLogin, fetchRefreshToken } from '@/core/api/auth.api';
import { disconnect } from '@wagmi/core';
import { setAuthLoading, setIsAuth, setIsClaimed, setToken } from '@/core/state/auth.state';
import { wagmiInitUserDataFromContract } from '@/core/api/contract/contract.achievements.api';
import {
  setPremiumPrice,
  setPremiumStatus,
  setUserLevelsInfo,
  setUserName,
  setUserProjectInfo,
} from '@/core/state/user.state';
import { formatEther } from 'viem';
import { searchUser } from '@/core/api/leaderboard.api';
import { getCompletedTasks } from '@/core/thunk/task.thunk';
import { track } from '@vercel/analytics';

export const login = createAsyncThunk('authSlice/fetchLogin', async (params: ILoginPayload, { dispatch }) => {
  dispatch(setAuthLoading(true));
  const loginData = await fetchLogin(params);
  if (loginData?.data?.result) {
    dispatch(getCompletedTasks(params.wallet));
    dispatch(setToken(loginData.data.result.token));
    dispatch(setIsClaimed(loginData.data.result.isClaimed));
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuth', 'true');
    }
    const wagmiProm = wagmiInitUserDataFromContract(params.wallet);
    const userProm = searchUser({
      project: 'rubyscore',
      wallet: params.wallet,
    });
    try {
      const values: any[] = await Promise.all([wagmiProm, userProm]);
      const wagmiData = values[0];
      const userData = values[1];
      dispatch(setUserName(wagmiData.userName));
      dispatch(setUserLevelsInfo(wagmiData.levelsInfo));
      dispatch(setPremiumStatus(wagmiData.userStatus));
      dispatch(setPremiumPrice(formatEther(wagmiData.premiumPrice)));
      if (userData?.data?.result) {
        dispatch(setUserProjectInfo(userData.data.result.user));
      }
      dispatch(setIsAuth(true));
    } catch (e) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('signature');
        localStorage.removeItem('isAuth');
      }
    }
  }
  dispatch(setAuthLoading(false));
  return;
});
export const refreshToken = createAsyncThunk('authSlice/fetchRefresh', async () => {
  return await fetchRefreshToken();
});
export const logout = createAsyncThunk('authSlice/fetchLogout', async (args, { dispatch }) => {
  localStorage.removeItem('isAuth');
  await disconnect();
  dispatch(setIsAuth(false));
  dispatch(setToken(null));
  dispatch(setIsClaimed(false));
  dispatch(setUserName(null));
  dispatch(setUserLevelsInfo(null));
  dispatch(setPremiumStatus(false));
  dispatch(setPremiumPrice('0'));
  dispatch(setUserProjectInfo(null));
  return;
});
