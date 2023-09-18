import DailyActivityCard from '@/modules/Profile/DailyActivity/DailyActivityCard/DailyActivityCard';

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
