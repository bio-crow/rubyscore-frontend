import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCompletedTasks, fetchTasks, loadClaimTask } from '@/core/api/task.api';
import { setClaimingTaskId, setCompletedTasks, setTasks, setTasksLoading } from '@/core/state/task.state';
import { toast } from 'react-toastify';

export const getTasks = createAsyncThunk('taskSlice/getTasks', async (args, { dispatch }) => {
  dispatch(setTasksLoading(true));
  const data = await fetchTasks();
  if (data?.data?.result) {
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
    if (data?.data?.result) {
      dispatch(setCompletedTasks(data?.data?.result.tasks));
    } else {
      dispatch(setCompletedTasks([]));
    }
    return;
  }
);
export const claimTask = createAsyncThunk(
  'taskSlice/claimTask',
  async (params: { taskId: number; wallet: any }, { dispatch }) => {
    dispatch(setClaimingTaskId(params.taskId));
    const data = await loadClaimTask(params.taskId);
    if (data?.data?.result) {
      dispatch(getCompletedTasks(params.wallet));
      const res = await fetchTasks();
      if (res?.data?.result) {
        dispatch(setTasks(res?.data?.result.tasks));
      }
      toast('Task completed successfully', { position: 'top-right' });
    } else {
      toast('The condition is not met to complete the task', { position: 'top-right' });
    }
    dispatch(setClaimingTaskId(null));
    return;
  }
);
