import DailyActivityCard from '@/modules/Profile/DailyActivity/DailyActivityCard/DailyActivityCard';
import AchievementCard from '@/modules/Dashboard/DashboardTab/Achievements/AchievementCard/AchievementCard';

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
export interface IDailyActivityCard {
  description: string;
  net: {
    title: string;
    icon: string;
  };
  badges: string[];
}
export interface IReferralTableData {
  rank: number;
  userName: string;
  userIcon: string;
  points: number;
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
  rank: number;
  userName: string;
  userIcon: string;
  points: number;
  lvl: number;
  activeReferrals: number;
  maxSteak: number;
}
