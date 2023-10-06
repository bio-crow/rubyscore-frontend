import { ILeaderboardData, ILeaderboardUser } from '@/types/index';

export interface ILoginPayload {
  signature: string;
  message: string;
  wallet: string;
  referralCode?: string;
}
export interface ILoginResponse {
  result: {
    token: string;
    isClaimed: boolean;
  };
}
export interface IReferralsResponse {
  result: {
    referrals: any[];
    refCode: string;
  };
}
export interface ILoginResponse {
  result: {
    token: string;
    isClaimed: boolean;
  };
}
export interface IRefreshResponse {
  result: {
    token: string;
  };
}
export interface ILeaderBoardResponse {
  result: {
    leaderboard: ILeaderboardData[];
    user: ILeaderboardUser;
  };
}
export interface ISearchUserPayload {
  project: string;
  wallet: string;
}
export interface ISearchUserResponse {
  result: {
    user: ILeaderboardUser;
  };
}
export interface IClaimPayload {
  account: any;
  name?: string;
  price: string;
  payable?: boolean;
}
