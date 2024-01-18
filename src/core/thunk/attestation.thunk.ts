import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAttestationData, fetchCheckAttestation } from '@/core/api/attestation.api';
import {
  setAttestationData,
  setAttestationPrice,
  setAttestationStatus,
  setClaimAttestationLoading,
} from '@/core/state/attestation.state';
import { wagmiAttestationPrice, wagmiClaimAttestation } from '@/core/api/contract/contract.attestation.api';
import { formatEther } from 'viem';
import { IClaimAttestationPayload, IClaimPayload } from '@/core/types';
export const getAttestationData = createAsyncThunk(
  'attestationSlice/getAttestationData',
  async (payload: { address: any; project: string }, { dispatch }) => {
    const { project, address } = payload;
    const res: any = await fetchCheckAttestation({ wallet: address, project: project });
    if (res.data?.result?.count > 0) {
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
