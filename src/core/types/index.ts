import { ILeaderboardData, ILeaderboardUser } from '@/types/index';
import {
  fetchDashboardBalance,
  fetchDashboardContracts,
  fetchDashboardDays,
  fetchDashboardGas,
  fetchDashboardMonths,
  fetchDashboardTransactions,
  fetchDashboardVolume,
  fetchDashboardWeeks,
} from '@/core/api/dashboard.api';

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

export interface IDashboardTransactionsResponse {
  result: {
    tx1: number;
    tx2_5: number;
    tx6_10: number;
    tx11_25: number;
    tx26_50: number;
    tx51_100: number;
    tx101_500: number;
    tx501_1000: number;
  };
}
export interface IDashboardContractsResponse {
  result: {
    contracts1: number;
    contracts2_5: number;
    contracts6_10: number;
    contracts11_25: number;
    contracts26_50: number;
    contracts51_100: number;
  };
}
export interface IDashboardDaysResponse {
  result: {
    days1: number;
    days2_5: number;
    days6_10: number;
    days11_25: number;
    days26_50: number;
    days51_100: number;
  };
}
export interface IDashboardWeeksResponse {
  result: {
    weeks1: number;
    weeks2: number;
    weeks3: number;
    weeks4_5: number;
    weeks6_7: number;
    weeks8_10: number;
    weeks11_15: number;
    weeks16_20: number;
  };
}
export interface IDashboardMonthsResponse {
  result: {
    months1: number;
    months2: number;
    months3: number;
    months4: number;
    months5: number;
    months6: number;
    months7: number;
    months8: number;
    months9: number;
    months10: number;
    months11: number;
    months12: number;
  };
}
export interface IDashboardGasResponse {
  result: {
    gas1: number;
    gas1_3: number;
    gas3_5: number;
    gas5_10: number;
    gas10_15: number;
    gas15_25: number;
    gas25_50: number;
    gas50_100: number;
    gas100_200: number;
  };
}
export interface IDashboardVolumeResponse {
  result: {
    volume1: number;
    volume1_5: number;
    volume6_10: number;
    volume10_50: number;
    volume50_100: number;
    volume100_1000: number;
    volume1000_10000: number;
    volume10000_100000: number;
  };
}
export interface IDashboardBalanceResponse {
  result: {
    balance1: number;
    balance1_5: number;
    balance6_10: number;
    balance10_50: number;
    balance50_100: number;
    balance100_1000: number;
    balance1000_10000: number;
    balance10000_100000: number;
  };
}
