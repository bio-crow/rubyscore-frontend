import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCompletedTasks, fetchTasks, loadClaimTask } from '@/core/api/task.api';
import {
  setClaimingTaskId,
  setCompletedTasks,
  setCompletedUserTasks,
  setTasks,
  setTasksLoading,
} from '@/core/state/task.state';
import { toast } from 'react-toastify';
import { updateUserLevelInfo } from '@/core/thunk/dashboard.thunk';
import { loadUserProjectInfo } from '@/core/thunk/user.thunk';

export const getTasks = createAsyncThunk('taskSlice/getTasks', async (args, { dispatch }) => {
  dispatch(setTasksLoading(true));
  const data = await fetchTasks();
  if (data?.data?.result?.tasks) {
    dispatch(setTasks(data?.data?.result.tasks));
  } else {
    dispatch(setTasks([]));
  }
  dispatch(setTasksLoading(false));
  return;
});
export const getCompletedTasks = createAsyncThunk(
  'taskSlice/getCompletedTasks',
  async (wallet: any, { dispatch }) => {
    const data = await fetchCompletedTasks(wallet);
    if (data?.data?.result?.tasks) {
      dispatch(setCompletedTasks(data?.data?.result.tasks));
    } else {
      dispatch(setCompletedTasks([]));
    }
    return;
  }
);
export const getCompletedUserTasks = createAsyncThunk(
  'taskSlice/getCompletedTasks',
  async (wallet: any, { dispatch }) => {
    const data = await fetchCompletedTasks(wallet);
    if (data?.data?.result?.tasks) {
      dispatch(setCompletedUserTasks(data?.data?.result.tasks));
    } else {
      dispatch(setCompletedUserTasks([]));
    }
    return;
  }
);
export const claimTask = createAsyncThunk(
  'taskSlice/claimTask',
  async (params: { taskId: number; wallet: any; project: string }, { dispatch }) => {
    dispatch(setClaimingTaskId(params.taskId));
    const data = await loadClaimTask(params.taskId);
    if (data?.data?.result) {
      dispatch(getCompletedTasks(params.wallet));
      const res = await fetchTasks();
      if (res?.data?.result) {
        dispatch(setTasks(res?.data?.result.tasks));
      }
      dispatch(
        updateUserLevelInfo({
          wallet: params.wallet,
          project: params.project,
        })
      );
      dispatch(loadUserProjectInfo(params.wallet));
      toast('Task completed successfully', { position: 'top-right' });
    } else {
      toast('The condition is not met to complete the task', { position: 'top-right' });
    }
    dispatch(setClaimingTaskId(null));
    return;
  }
);
