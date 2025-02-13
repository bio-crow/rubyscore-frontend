import { apiPrivateAxios, apiPublicAxios } from '@/core/api/axiosConfig';
import {
  IClaimCurrentStreakDays,
  IGetCurrentStreakDays,
  INFTListResponse,
  IReferralsResponse,
  IScoreListResponse,
} from '@/core/types';

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
export const fetchUserScoreList = async ({ wallet, net }: any) => {
  try {
    const config: any = {
      headers: {
        'Cache-Control': 'max-age=300',
      },
    };
    if (net) {
      return await apiPublicAxios.get<IScoreListResponse>(
        `/profile/${wallet}/score?attestation=${net}`,
        config
      );
    }
    return await apiPublicAxios.get<IScoreListResponse>(`/profile/${wallet}/score`, config);
  } catch (error) {
    //console.error(error);
  }
};
export const fetchGetCurrentStreakDays = async () => {
  try {
    return await apiPrivateAxios.get<IGetCurrentStreakDays>('/profile/streak');
  } catch (error) {
    //console.error(error);
  }
};
export const fetchClaimCurrentStreakDays = async () => {
  try {
    return await apiPrivateAxios.get<IClaimCurrentStreakDays>('/task/streak');
  } catch (error) {
    //console.error(error);
  }
};
