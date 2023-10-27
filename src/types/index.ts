import { getUserLevelInfo } from '@/core/thunk/dashboard.thunk';

export type ChartIndexType =
  | 'transactions'
  | 'contracts'
  | 'days'
  | 'weeks'
  | 'months'
  | 'gas'
  | 'volume'
  | 'balance';
export type NetworksType = 'zk_era' | 'linea' | 'base' | 'zora' | 'zk_evm' | 'scroll';
export type DashboardTabIndexType = 'zk_era' | 'linea' | 'base' | 'zora' | 'zk_evm' | 'scroll' | 'rubyscore';
export interface IQuestCard {
  net: {
    icon: string;
    title: string;
  };
  points: number;
  questTitle: string;
}
export interface IScoreNetwork {
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
}
export interface IDailyActivityCard {
  description: string;
  net: {
    title: string;
    icon: string;
  };
  badges: string[];
}
export interface IReferral {
  wallet: string;
  name: string;
  score: number;
}
export interface IAchievementCard {
  currency: string;
  amount: number;
  pointsAmount: number;
  maxAmount: number;
  maxPoints: number;
  description: string;
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
export interface INFTData {
  title: string;
  properties: {
    name: {
      description: string;
    };
    description: {
      description: string;
    };
    image: {
      description: string;
    };
  };
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
    score: 110;
    level: 2;
  };
  linea: {
    score: 0;
    level: 1;
  };
  zk_era: {
    score: 0;
    level: 1;
  };
  zora: {
    score: 0;
    level: 1;
  };
  zk_evm: {
    score: 0;
    level: 1;
  };
  base: {
    score: 0;
    level: 1;
  };
  scroll: {
    score: 0;
    level: 1;
  };
}
