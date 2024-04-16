import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from '@/core/state/auth.state';
import userReducer from '@/core/state/user.state';
import leaderboardReducer from '@/core/state/leaderboard.state';
import dashboardReducer from '@/core/state/dashboard.state';
import taskReducer from '@/core/state/task.state';
import attestationReducer from '@/core/state/attestation.state';
import shareModalReducer from '@/core/state/shareModal.state';
export const store = configureStore({
  reducer: {
    authState: authReducer,
    userState: userReducer,
    leaderboardState: leaderboardReducer,
    dashboardState: dashboardReducer,
    taskState: taskReducer,
    attestationState: attestationReducer,
    shareModalState: shareModalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
