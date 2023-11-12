import { ReactElement } from 'react';

export type ChartIndexType =
  | 'transactions'
  | 'contracts'
  | 'days'
  | 'weeks'
  | 'months'
  | 'gas'
  | 'volume'
  | 'balance';
export type DashboardTabIndexType = 'zk_era' | 'linea' | 'base' | 'zora' | 'zk_evm' | 'scroll' | 'rubyscore';
export interface IScoreNetwork {
  index: DashboardTabIndexType;
  title: string;
  icon: string;
  lvl: number;
  points: number;
}
export interface ILevelCard {
  lvl: number;
  icon: string;
  isAvailable: boolean;
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
}
export interface ILevelInfo {
  level: number;
  levelUp: number;
  score: number;
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
  };
  linea: {
    score: number;
    level: number;
  };
  zk_era: {
    score: number;
    level: number;
  };
  zora: {
    score: number;
    level: number;
  };
  zk_evm: {
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
  rubyscore: [];
  linea: [];
  zk_era: [];
  zk_evm: [];
  base: [];
  scroll: [];
}

export interface ITask {
  id: number;
  score: number;
  projects: DashboardTabIndexType[];
  description: string;
}
