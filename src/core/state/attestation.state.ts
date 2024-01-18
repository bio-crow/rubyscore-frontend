import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAttestationData } from '@/types/index';

interface IAttestationState {
  attestationData: IAttestationData;
  attestationPrice: null | string;
  attestationPoints: string | null;
  attestationStatus: boolean;
  claimAttestationLoading: boolean;
}

const initialState: IAttestationState = {
  attestationData: {
    attestationParams: null,
    signature: null,
  },
  attestationPrice: null,
  attestationPoints: null,
  attestationStatus: false,
  claimAttestationLoading: false,
};

export const attestationSlice = createSlice({
  initialState,
  name: 'attestationSlice',
  reducers: {
    setAttestationData: (state, action: PayloadAction<IAttestationData>) => {
      state.attestationData = action.payload;
    },
    setAttestationPrice: (state, action: PayloadAction<string | null>) => {
      state.attestationPrice = action.payload;
    },
    setAttestationStatus: (state, action: PayloadAction<boolean>) => {
      state.attestationStatus = action.payload;
    },
    setClaimAttestationLoading: (state, action: PayloadAction<boolean>) => {
      state.claimAttestationLoading = action.payload;
    },
  },
});

export default attestationSlice.reducer;

export const { setAttestationData, setAttestationPrice, setClaimAttestationLoading, setAttestationStatus } =
  attestationSlice.actions;
