import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILeaderboardData, ILeaderboardUser } from '@/types/index';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
import { AxiosResponse } from 'axios';
import { ILeaderBoardResponse } from '@/core/types';

interface ILeaderboardState {
  leaderboard: ILeaderboardData[];
  leaderboardUser: ILeaderboardUser | null;
  userStatistics: ILeaderboardUser | null;
  userStatisticsLoading: boolean;
  refCode: string | null;
  loading: boolean;
  currentPage: number;
  onPage: number;
  pageCount: number;
  shownLeaderBoard: ILeaderboardData[];
}

const initialState: ILeaderboardState = {
  leaderboard: [],
  leaderboardUser: null,
  userStatisticsLoading: false,
  userStatistics: null,
  refCode: null,
  loading: true,
  currentPage: 1,
  onPage: 4,
  pageCount: 0,
  shownLeaderBoard: [],
};

export const leaderboardSlice = createSlice({
  initialState,
  name: 'leaderboardSlice',
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUserStatistics: (state, action: PayloadAction<ILeaderboardUser | null>) => {
      state.userStatistics = action.payload;
    },
    setUserStatisticsLoading: (state, action: PayloadAction<boolean>) => {
      state.userStatisticsLoading = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      const lastIndex = state.currentPage * state.onPage;
      const firstIndex = state.currentPage * state.onPage - state.onPage;
      if (lastIndex < state.leaderboard.length) {
        state.shownLeaderBoard = state.leaderboard.slice(firstIndex, lastIndex);
      } else {
        state.shownLeaderBoard = state.leaderboard.slice(firstIndex, state.leaderboard.length);
      }
      if (state.leaderboardUser) {
        const isUserOnPage = state.shownLeaderBoard.find(
          item => item.wallet === state.leaderboardUser?.profile.wallet
        );
        if (!isUserOnPage) {
          state.shownLeaderBoard = [
            ...state.shownLeaderBoard,
            {
              wallet: state.leaderboardUser.profile.wallet,
              name: state.leaderboardUser.profile.name,
              score: state.leaderboardUser.profile.rank.score,
              level: state.leaderboardUser.profile.rank.level,
              isPremium: state.leaderboardUser.profile.isPremium,
              rank: state.leaderboardUser.position.current,
              activeReferrals: state.leaderboardUser.additional.activeReferrals,
              maxStreak: state.leaderboardUser.additional.maxStreak,
            },
          ];
        }
      }
    },
    initLeaderBoard: (state, action: PayloadAction<AxiosResponse<ILeaderBoardResponse, any> | undefined>) => {
      if (action.payload) {
        const initLeaderBoard = action.payload.data.result?.leaderboard?.map((item, index) => {
          return { ...item, rank: index + 1 };
        });
        const initUser = action.payload.data.result?.user;
        if (initLeaderBoard) {
          state.leaderboard = initLeaderBoard;
        } else {
          state.leaderboard = [];
        }
        state.currentPage = 1;
        state.pageCount = Math.ceil(state.leaderboard.length / state.onPage);
        const firstIndex = state.currentPage * state.onPage - state.onPage;
        const lastIndex = state.currentPage * state.onPage;
        if (lastIndex < state.leaderboard.length) {
          state.shownLeaderBoard = state.leaderboard.slice(firstIndex, lastIndex);
        } else {
          state.shownLeaderBoard = state.leaderboard.slice(firstIndex, state.leaderboard.length);
        }
        if (initUser) {
          state.leaderboardUser = initUser;
          const isUserOnPage = state.shownLeaderBoard.find(item => item.wallet === initUser.profile.wallet);
          if (!isUserOnPage) {
            state.shownLeaderBoard = [
              ...state.shownLeaderBoard,
              {
                wallet: state.leaderboardUser.profile.wallet,
                name: state.leaderboardUser.profile.name,
                score: state.leaderboardUser.profile.rank.score,
                level: state.leaderboardUser.profile.rank.level,
                isPremium: state.leaderboardUser.profile.isPremium,
                rank: state.leaderboardUser.position.current,
                activeReferrals: state.leaderboardUser.additional.activeReferrals,
                maxStreak: state.leaderboardUser.additional.maxStreak,
              },
            ];
          }
        } else {
          state.leaderboardUser = null;
        }
      }
      state.loading = false;
    },
  },
});

export default leaderboardSlice.reducer;

export const { setCurrentPage, setUserStatisticsLoading, setLoading, initLeaderBoard, setUserStatistics } =
  leaderboardSlice.actions;
