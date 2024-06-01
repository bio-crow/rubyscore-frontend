import {
  DashboardTabIndexType,
  IAttestationData,
  ILeaderboardData,
  ILeaderboardUser,
  IStreakDays,
  ITask,
  IUserGradation,
  IUserTransactionsDates,
} from '@/types/index';
import {
  fetchDashboardBalance,
  fetchDashboardContracts,
  fetchDashboardDays,
  fetchDashboardGas,
  fetchDashboardMonths,
  fetchDashboardTransactions,
  fetchDashboardVolume,
  fetchDashboardWeeks,
  fetchUserGradation,
} from '@/core/api/dashboard.api';
import { fetchClaimLevelSignature } from '@/core/api/contract/contract.achievements.api';
import { transformApiTransactionResponse } from '@/utils/helpers';

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
    exp: number;
  };
}

export interface IReferralsResponse {
  result: {
    referrals: any[];
    refCode: string;
  };
}

export interface INFTListResponse {
  result: any;
}

export interface IScoreListResponse {
  result: {
    rubyscore: {
      score: number;
      level: number;
    };
    linea: {
      score: number;
      level: number;
    };
    zk_era: {
      score: number;
      level: number;
    };
    zk_evm: {
      score: number;
      level: number;
    };
    manta: {
      score: number;
      level: number;
    };
    base: {
      score: number;
      level: number;
    };
    scroll: {
      score: number;
      level: number;
    };
    blast: {
      score: number;
      level: number;
    };
    zora: {
      score: number;
      level: number;
    };
    // taiko: {
    //   score: number;
    //   level: number;
    // };
    mantle: {
      score: number;
      level: number;
    };
  };
}

export interface ILoginResponse {
  result: {
    token: string;
    isClaimed: boolean;
    exp: number;
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
export interface IClaimAttestationPayload {
  project: string;
  price: string;
  account: any;
  attestationData: IAttestationData;
}
export interface IVotePayload {
  account: any;
  project: string;
}
export interface IDepositSinglePayload {
  project: string;
  value: string;
}
export interface IDepositAnotherPayload {
  project: string;
  value: string;
  address: string;
}
export interface IDashboardTransactionsResponse {
  result: {
    tx1: number;
    tx2_5: number;
    tx6_10: number;
    tx11_20: number;
    tx21_30: number;
    tx31_50: number;
    tx51_100: number;
    tx101_200: number;
    tx201_500: number;
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
    weeks21_30: number;
    weeks31_50: number;
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
    volume5_10: number;
    volume10_20: number;
    volume20_50: number;
    volume50_100: number;
    volume100_500: number;
    volume500_1000: number;
    volume1000_10000: number;
    volume10000_100000: number;
    volume100000_1000000: number;
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

export interface IProjectStatisticsResponse {
  result: {
    user_count: number;
    transaction_count: number;
    bridge_transaction_count: number;
    total_volume: number;
    first_transaction_time: number;
    last_transaction_time: number;
    total_value_locked: number;
  };
}

export interface IUserGradationPayload {
  projectName: string;
  wallet: string;
}
export interface IProjectVotesPayload {
  projectName: string;
}
export interface IUserTransactionsDatesPayload {
  projectName: string;
}
export interface IUserGradationResponse {
  result: IUserGradation;
}
export interface IProjectVotesResponse {
  is_ok: boolean;
  result: {
    count: number;
  };
}
export interface IUserTransactionsDatesResponse {
  result: IUserTransactionsDates;
}
export interface IClaimLevelSignaturePayload {
  project: string;
  nftId: string;
}

export interface IClaimLevelSignatureResponse {
  result: {
    mintParams: {
      userAddress: string;
      userNonce: string;
      nftIds: string[];
    };
    signature: string;
  };
}

export interface IClaimLevelPayload {
  project: string;
  account: any;
  mintParams: {
    userAddress: string;
    userNonce: string;
    nftIds: string[];
  };
  signature: string;
}

export interface IGetCurrentStreakDays {
  result: IStreakDays;
}

export interface IClaimCurrentStreakDays {
  result: boolean;
}

export interface ITasksResponse {
  result: {
    tasks: ITask[];
  };
}

export interface ITasksCompletedResponse {
  result: {
    tasks: ITask[];
  };
}
export interface IInfoChartActiveUserResponse {
  result: {
    chart: {
      date: number;
      count: number;
    }[];
  };
}
export interface IInfoChartTransactionsResponse {
  result: {
    chart: {
      date: number;
      count: number;
    }[];
  };
}
export interface IInfoChartTVLResponse {
  result: {
    chart: {
      date: number;
      tvl: number;
    }[];
  };
}
export interface IInfoChartTransactionsBridgeResponse {
  result: {
    chart: {
      date: number;
      count: number;
    }[];
  };
}
export interface IInfoChartVolumeResponse {
  result: {
    chart: {
      date: number;
      volume: number;
    }[];
  };
}
export interface IAttestationDataResponse {
  result: IAttestationData;
}
