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
  loading: false,
  currentPage: 1,
  onPage: 4,
  pageCount: 0,
  shownLeaderBoard: [],
};

export const leaderboardSlice = createSlice({
  initialState,
  name: 'leaderboardSlice',
  reducers: {
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
          item => item.wallet === state.leaderboardUser?.wallet
        );
        if (!isUserOnPage) {
          state.shownLeaderBoard = [
            ...state.shownLeaderBoard,
            {
              rank: state.leaderboardUser.position,
              wallet: state.leaderboardUser.wallet,
              name: state.leaderboardUser.name,
              score: state.leaderboardUser.score,
              level: state.leaderboardUser.level,
              activeReferrals: state.leaderboardUser.activeReferrals,
              maxStreak: state.leaderboardUser.maxStreak,
              isPremium: state.leaderboardUser.isPremium,
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
          const isUserOnPage = state.shownLeaderBoard.find(item => item.wallet === initUser.wallet);
          if (!isUserOnPage) {
            state.shownLeaderBoard = [
              ...state.shownLeaderBoard,
              {
                rank: initUser.position,
                wallet: initUser.wallet,
                name: initUser.name,
                score: initUser.score,
                level: initUser.level,
                activeReferrals: initUser.activeReferrals,
                maxStreak: initUser.maxStreak,
                isPremium: initUser.isPremium,
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

export const { setCurrentPage, setUserStatisticsLoading, initLeaderBoard, setUserStatistics } =
  leaderboardSlice.actions;
