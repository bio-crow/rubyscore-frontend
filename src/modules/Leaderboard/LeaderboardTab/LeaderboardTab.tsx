import { Box } from '@mui/system';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import LeaderboardTabTable from '@/modules/Leaderboard/LeaderboardTabTable/LeaderboardTabTable';
import { FC } from 'react';

interface Props {
  title: string;
}

const LeaderboardTab: FC<Props> = () => {
  return (
    <>
      <UserInfoSection />
      <LeaderboardTabTable />
    </>
  );
};
export default LeaderboardTab;
