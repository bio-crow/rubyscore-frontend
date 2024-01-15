import { apiPrivateAxios } from '@/core/api/axiosConfig';
import { IAttestationDataResponse, ITasksResponse } from '@/core/types';

export const fetchAttestationData = async (params: { project: string }) => {
  try {
    return await apiPrivateAxios.post<IAttestationDataResponse>('/attestation/claim', null, { params });
  } catch (error) {
    //console.error(error);
  }
};
