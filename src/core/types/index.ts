export interface ILoginPayload {
  signature: string;
  message: string;
  wallet: string;
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
    referralLink: string;
  };
}
