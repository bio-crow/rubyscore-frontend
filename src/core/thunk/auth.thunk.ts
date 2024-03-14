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

export const login = createAsyncThunk('authSlice/fetchLogin', async (params: ILoginPayload, { dispatch }) => {
  dispatch(setAuthLoading(true));
  let token: string | null | undefined;
  let isClaimed = false;

  try {
    if (sessionStorage.getItem('sessionData')) {
      const sessionDataString = sessionStorage.getItem('sessionData') || '';
      const sessionData = JSON.parse(sessionDataString);

      if (sessionData.exp > new Date().getTime()) {
        token = sessionData.token;
      } else {
        throw new Error('Session data expired');
      }
    } else {
      throw new Error('Session data not found');
    }
  } catch (error) {
    const loginData = await fetchLogin(params);
    token = loginData?.data?.result?.token;
    isClaimed = loginData?.data?.result?.isClaimed ?? false;
  }
  if (token) {
    dispatch(getCompletedTasks(params.wallet));
    dispatch(setToken(token));
    dispatch(setIsClaimed(isClaimed));
    if (typeof window !== 'undefined') {
      // If the user has not visited the site for more than a day and has not closed the browser, he should log in again using fetchLogin
      // Otherwise, let's update expiration of token and keep him logged in
      sessionStorage.setItem(
        'sessionData',
        JSON.stringify({ exp: new Date().getTime() + 86_400_000, token })
      );
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
        sessionStorage.removeItem('sessionData');
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
