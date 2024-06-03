import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAttestationData } from '@/types/index';

interface IDepositState {
  depositLoading: boolean;
}

const initialState: IDepositState = {
  depositLoading: false,
};

export const depositSlice = createSlice({
  initialState,
  name: 'depositSlice',
  reducers: {
    depositLoading: (state, action: PayloadAction<boolean>) => {
      state.depositLoading = action.payload;
    },
  },
});

export default depositSlice.reducer;

export const { depositLoading } = depositSlice.actions;
