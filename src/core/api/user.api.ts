import { apiPrivateAxios, apiPublicAxios } from '@/core/api/axiosConfig';
import { INFTListResponse, IReferralsResponse } from '@/core/types';

export const fetchReferrals = async () => {
  try {
    return await apiPrivateAxios.get<IReferralsResponse>('/profile/referral');
  } catch (error) {
    //console.error(error);
  }
};
export const fetchUserNftList = async (wallet: string) => {
  try {
    return await apiPublicAxios.get<INFTListResponse>(`/profile/${wallet}/nft`);
  } catch (error) {
    //console.error(error);
  }
};
