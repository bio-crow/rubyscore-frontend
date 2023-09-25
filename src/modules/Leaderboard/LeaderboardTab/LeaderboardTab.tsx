import { Box } from '@mui/system';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import LeaderboardTabTable from '@/modules/Leaderboard/LeaderboardTabTable/LeaderboardTabTable';
import { FC } from 'react';
import { ILeaderboardData } from '@/types/index';

interface Props {
  title: string;
  tableData: ILeaderboardData[];
}

const LeaderboardTab: FC<Props> = ({ tableData }) => {
  return (
    <>
      <UserInfoSection />
      <LeaderboardTabTable tableData={tableData} />
    </>
  );
};
export default LeaderboardTab;
