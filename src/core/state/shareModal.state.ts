import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ShareModalType = 'achievements' | 'stats' | null;
type ShareModalSocial = 'twitter' | 'telegram' | null;

interface IShareModalState {
  isOpen: boolean;
  type: ShareModalType;
  social: ShareModalSocial;
}

const initialState: IShareModalState = {
  isOpen: false,
  type: null,
  social: null,
};

export const shareModalSlice = createSlice({
  initialState,
  name: 'shareModalSlice',
  reducers: {
    setShareModalState: (state, action: PayloadAction<IShareModalState>) => {
      state.isOpen = action.payload.isOpen;
      state.type = action.payload.type;
      state.social = action.payload.social;
    },
  },
});

export default shareModalSlice.reducer;

export const { setShareModalState } = shareModalSlice.actions;
