import DailyActivityCard from '@/modules/Profile/DailyActivity/DailyActivityCard/DailyActivityCard';
import AchievementCard from '@/modules/Dashboard/DashboardTab/Achievements/AchievementCard/AchievementCard';
export type ChartIndexType =
  | 'transactions'
  | 'contracts'
  | 'days'
  | 'weeks'
  | 'months'
  | 'gas'
  | 'volume'
  | 'balance';
export type DashboardTabIndexType = 'zk_era' | 'linea' | 'base' | 'zora' | 'zk_evm';
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
  points: number;
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
}
export interface ILeaderboardUser {
  position: number;
  wallet: string;
  name: string;
  score: number;
  level: number;
  activeReferrals: number;
  maxStreak: number;
}
export interface INFTCard {
  image: string;
  net: {
    icon: string;
    title: string;
  };
  description: string;
}
export interface IChartDot {
  name: string;
  shortName: string;
  uv: number;
}
