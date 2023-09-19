import { Box } from '@mui/system';
import LeaderboardTabInfo from '@/modules/Leaderboard/LeaderboardTabInfo/LeaderboardTabInfo';
import LeaderboardTabTable from '@/modules/Leaderboard/LeaderboardTabTable/LeaderboardTabTable';
import { FC } from 'react';

interface Props {
  title: string;
}

const LeaderboardTab: FC<Props> = () => {
  return (
    <>
      <LeaderboardTabInfo />
      <LeaderboardTabTable />
    </>
  );
};
export default LeaderboardTab;
