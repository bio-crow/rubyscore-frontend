import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '@/types/index';
interface ITaskState {
  tasks: ITask[];
  completedTasks: ITask[];
  completedUserTasks: ITask[];
  tasksLoading: boolean;
  claimingTaskId: number | null;
}

const initialState: ITaskState = {
  tasks: [],
  completedTasks: [],
  completedUserTasks: [],
  tasksLoading: false,
  claimingTaskId: null,
};

export const taskSlice = createSlice({
  initialState,
  name: 'taskSlice',
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    setTasksLoading: (state, action: PayloadAction<boolean>) => {
      state.tasksLoading = action.payload;
    },
    setCompletedTasks: (state, action: PayloadAction<ITask[]>) => {
      state.completedTasks = action.payload;
    },
    setCompletedUserTasks: (state, action: PayloadAction<ITask[]>) => {
      state.completedUserTasks = action.payload;
    },
    setClaimingTaskId: (state, action: PayloadAction<number | null>) => {
      state.claimingTaskId = action.payload;
    },
  },
});

export default taskSlice.reducer;

export const { setTasks, setTasksLoading, setClaimingTaskId, setCompletedTasks, setCompletedUserTasks } =
  taskSlice.actions;
