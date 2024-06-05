import { ReactElement } from 'react';
import { IMultisendTransactionsHistoryResponse, IUserTransactionsDatesResponse } from '@/core/types';

export type ChartIndexType =
  | 'transactions'
  | 'contracts'
  | 'days'
  | 'weeks'
  | 'months'
  | 'gas'
  | 'volume'
  | 'balance';
export type InfoChartIndexType = 'activeUser' | 'transactions' | 'tvl' | 'transactionsBridge' | 'volume';
export type DashboardTabIndexType =
  | 'zk_era'
  | 'linea'
  | 'base'
  | 'zk_evm'
  | 'scroll'
  | 'rubyscore'
  | 'manta'
  | 'blast'
  | 'zora'
  | 'taiko'
  | 'mantle';
export interface IScoreNetwork {
  index: DashboardTabIndexType;
  title: string;
  icon: string;
  lvl: number;
  points: number;
  rank: string;
}
export interface ILevelCard {
  lvl: number;
  icon: string;
  isAvailable: boolean;
  isPefWaiting: boolean;
  isClaimed: boolean;
  isError: boolean;
}
export interface IReferral {
  wallet: string;
  name: string;
  score: number;
}
export interface IStreakDays {
  current: number;
  isClaimable: boolean;
}
export interface IAchievementCard {
  key: string;
  value: string;
  score: number;
  top: number;
  currency: string;
  label: ReactElement;
  ToolTip?: ReactElement;
}
export interface ILeaderboardData {
  wallet: string;
  name: string;
  score: number;
  rank?: number;
  level: number;
  activeReferrals: number;
  maxStreak: number;
  isPremium: boolean;
}
export interface ILeaderboardUser {
  profile: {
    wallet: string;
    name: string;
    isPremium: boolean;
    rank: {
      level: number;
      levelUp: number;
      score: number;
    };
  };
  additional: {
    activeReferrals: number;
    maxStreak: number;
  };
  position: {
    current: number;
    max: number;
  };
}
export interface IChartDot {
  name: string;
  shortName: string;
  uv: number;
  uvString?: string;
  cumulative?: string;
}
export interface ILevelInfo {
  level: number;
  levelUp: number;
  score: number;
  position: {
    current: number;
    max: number;
  };
  levelStatus: number[];
}
export interface IProjectStatistics {
  user_count: number;
  transaction_count: number;
  bridge_transaction_count: number;
  total_volume: number;
  first_transaction_time: number;
  last_transaction_time: number;
  total_value_locked: number;
}
export interface IScoreList {
  rubyscore: {
    score: number;
    level: number;
    rank: string;
  };
  linea: {
    score: number;
    level: number;
    rank: string;
  };
  zk_era: {
    score: number;
    level: number;
    rank: string;
  };
  zk_evm: {
    score: number;
    level: number;
    rank: string;
  };
  manta: {
    score: number;
    level: number;
    rank: string;
  };
  base: {
    score: number;
    level: number;
    rank: string;
  };
  scroll: {
    score: number;
    level: number;
    rank: string;
  };
  blast: {
    score: number;
    level: number;
    rank: string;
  };
  zora: {
    score: number;
    level: number;
    rank: string;
  };
  taiko: {
    score: number;
    level: number;
    rank: string;
  };
  mantle: {
    score: number;
    level: number;
    rank: string;
  };
}
export interface IUserGradation {
  address: string;
  chain_id: string;
  total_spent_gas: {
    value: string;
    score: number;
    top: number;
  };
  outgoing_txs_count: {
    value: string;
    score: number;
    top: number;
  };
  unique_contracts_count: {
    value: string;
    score: number;
    top: number;
  };
  unique_days_count: {
    value: string;
    score: number;
    top: number;
  };
  unique_weeks_count: {
    value: string;
    score: number;
    top: number;
  };
  unique_months_count: {
    value: string;
    score: number;
    top: number;
  };
  volume: {
    value: string;
    score: number;
    top: number;
  };
  total_balance_usd: {
    value: string;
    score: number;
    top: number;
  };
  total_score: string;
  leaderboard_position: {
    current: number;
    max: number;
  };
}
export interface ILevelsInfo {
  rubyscore: number[];
  linea: number[];
  zk_era: number[];
  zk_evm: number[];
  manta: number[];
  base: number[];
  scroll: number[];
  blast: number[];
  zora: number[];
  taiko: number[];
  mantle: number[];
}

export interface ITask {
  id: number;
  score: number;
  projects: DashboardTabIndexType[];
  description: string;
}
export interface IUserTransactionsDates {
  first_transaction_time: number;
  last_transaction_time: number;
}
export interface IDashboardTabsVoteInfo {
  zk_era: { count: number | null; is_ok: boolean };
  linea: { count: number | null; is_ok: boolean };
  base: { count: number | null; is_ok: boolean };
  zk_evm: { count: number | null; is_ok: boolean };
  manta: { count: number | null; is_ok: boolean };
  scroll: { count: number | null; is_ok: boolean };
  rubyscore: { count: number | null; is_ok: boolean };
  blast: { count: number | null; is_ok: boolean };
  zora: { count: number | null; is_ok: boolean };
  taiko: { count: number | null; is_ok: boolean };
  mantle: { count: number | null; is_ok: boolean };
}
export interface IAttestationData {
  attestationParams: {
    schemaId: string;
    expirationDate: string;
    subject: string;
    attestationData: string;
  } | null;
  signature: string | null;
}
export interface IMultisendBalanceData {
  project: DashboardTabIndexType;
  balance: string;
  balanceFormatted: string;
  balanceOnHold: string;
  balanceOnHoldFormatted: string;
}
export interface IMultisendTotalBalanceData {
  totalBalance: string;
  totalBalanceFormatted: string;
  totalBalanceOnHold: string;
  totalBalanceOnHoldFormatted: string;
}
export interface IMultisendTransactionsHistoryData {
  L1Gas: string;
  createdAt: string;
  id: number;
  project: {
    id: number;
    name: DashboardTabIndexType;
  };
  sendAt: string;
  status: string;
  to: any;
  txHash: string;
  txHashLink: string;
  type: string;
  value: string;
}
