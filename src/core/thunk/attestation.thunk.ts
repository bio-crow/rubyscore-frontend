import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAttestationData } from '@/core/api/attestation.api';
import {
  setAttestationData,
  setAttestationPrice,
  setAttestationStatus,
  setClaimAttestationLoading,
} from '@/core/state/attestation.state';
import {
  wagmiAttestationPrice,
  wagmiClaimAttestation,
  wagmiGetAttestationStatus,
} from '@/core/api/contract/contract.attestation.api';
import { formatEther } from 'viem';
import { IClaimAttestationPayload, IClaimPayload } from '@/core/types';
import { wagmiClaimName } from '@/core/api/contract/contract.api';
import { initUserDataFromContract } from '@/core/thunk/user.thunk';

export const getAttestationData = createAsyncThunk(
  'attestationSlice/getAttestationData',
  async (payload: { address: any; project: string }, { dispatch }) => {
    const { project, address } = payload;
    const status = await wagmiGetAttestationStatus(payload);
    if (status) {
      dispatch(setAttestationStatus(true));
    } else {
      dispatch(setAttestationStatus(false));
      const data: any = await fetchAttestationData({ project });
      if (data?.data?.result) {
        dispatch(setAttestationData(data?.data?.result));
        const schemaId = data?.data?.result?.attestationParams.schemaId;
        if (schemaId) {
          const data: any = await wagmiAttestationPrice({ schemaId, project });
          dispatch(setAttestationPrice(formatEther(data)));
        }
      }
    }
    return;
  }
);
export const claimAttestation = createAsyncThunk(
  'attestationSlice/claimAttestation',
  async (data: IClaimAttestationPayload, { dispatch }) => {
    dispatch(setClaimAttestationLoading(true));
    const result = await wagmiClaimAttestation(data);
    if (result) {
      dispatch(setAttestationStatus(true));
    }
    dispatch(setClaimAttestationLoading(false));
    return result;
  }
);
