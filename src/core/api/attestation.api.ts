import { apiPrivateAxios, apiPrivateAxiosLimited } from '@/core/api/axiosConfig';
import { IAttestationDataResponse, ITasksResponse } from '@/core/types';

export const fetchAttestationData = async (params: { project: string }) => {
  try {
    return await apiPrivateAxiosLimited.post<IAttestationDataResponse>('/attestation/claim', null, {
      params,
    });
  } catch (error) {
    //console.error(error);
  }
};

export const fetchCheckAttestation = async (params: { project: string; wallet: any }) => {
  try {
    return await apiPrivateAxiosLimited.post<IAttestationDataResponse>('/attestation/check', null, {
      params,
    });
  } catch (error) {
    //console.error(error);
  }
};
