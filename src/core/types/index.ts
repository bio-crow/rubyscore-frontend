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
    leaderboard: {
      wallet: string;
      name: string;
      score: number;
    }[];
    user: {
      wallet: string;
      name: string;
      score: number;
    };
  };
}
