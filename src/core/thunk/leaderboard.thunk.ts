import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrivateLeaderboard, fetchPublicLeaderboard, searchUser } from '@/core/api/leaderboard.api';
import {
  initLeaderBoard,
  setFilteredUser,
  setFilteredUserLoading,
  setLoading,
  setUserNotFound,
  setUserStatistics,
  setUserStatisticsLoading,
} from '@/core/state/leaderboard.state';
import fa from '@walletconnect/legacy-modal/dist/cjs/browser/languages/fa';

export const getPublicLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPublicLeaderBoardData',
  async (projectName: string, { dispatch }) => {
    dispatch(setLoading(true));
    const data = await fetchPublicLeaderboard(projectName);
    dispatch(initLeaderBoard(data));
    dispatch(setLoading(false));
    return;
  }
);
export const getPrivateLeaderboardData = createAsyncThunk(
  'leaderboardSlice/getPrivateLeaderBoardData',
  async (projectName: string, { dispatch }) => {
    dispatch(setLoading(true));
    const data = await fetchPrivateLeaderboard(projectName);
    dispatch(initLeaderBoard(data));
    dispatch(setLoading(false));
    return;
  }
);

export const getUserStatistics = createAsyncThunk(
  'leaderboardSlice/getUserStatistics',
  async (
    params: {
      wallet: string;
      project: string;
      withLoad: boolean;
    },
    { dispatch }
  ) => {
    params.withLoad && dispatch(setUserStatisticsLoading(true));
    dispatch(setUserNotFound(false));
    const data: any = await searchUser(params);
    if (data?.data?.result) {
      dispatch(setUserStatistics(data.data.result.user));
    } else {
      dispatch(setUserStatistics(null));
      dispatch(setUserNotFound(true));
    }
    params.withLoad && dispatch(setUserStatisticsLoading(false));
    return;
  }
);
export const getFilteredUser = createAsyncThunk(
  'leaderboardSlice/getFilteredUser',
  async (
    params: {
      wallet: string;
      project: string;
    },
    { dispatch }
  ) => {
    dispatch(setFilteredUserLoading(true));
    const data: any = await searchUser(params);
    const user = data?.data?.result?.user;
    if (user) {
      dispatch(
        setFilteredUser({
          wallet: user.profile.wallet,
          name: user.profile.name,
          score: user.profile.rank.score,
          level: user.profile.rank.level,
          isPremium: user.profile.isPremium,
          rank: user.position.current,
          activeReferrals: user.additional.activeReferrals,
          maxStreak: user.additional.maxStreak,
        })
      );
    } else {
      dispatch(setFilteredUser(null));
    }
    dispatch(setFilteredUserLoading(false));
    return;
  }
);
