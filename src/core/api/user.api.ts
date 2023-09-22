import { apiPrivateAxios } from '@/core/api/axiosConfig';
import { IReferralsResponse } from '@/core/types';

export const fetchReferrals = async () => {
  try {
    return await apiPrivateAxios.get<IReferralsResponse>('/profile/referral');
  } catch (error) {
    //console.error(error);
  }
};
