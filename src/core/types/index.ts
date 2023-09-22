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
