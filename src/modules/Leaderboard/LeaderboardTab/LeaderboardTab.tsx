import { Box } from '@mui/system';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import LeaderboardTabTable from '@/modules/Leaderboard/LeaderboardTabTable/LeaderboardTabTable';
import { FC } from 'react';
import { ILeaderboardData } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useAppSelector } from '@/core/store';

interface Props {
  activeTab: any;
  tableData: ILeaderboardData[];
}

const LeaderboardTab: FC<Props> = ({ tableData, activeTab }) => {
  const theme = useCustomTheme();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  return (
    <>
      {isAuth && <UserInfoSection />}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Box color={theme.palette.powderWhite} className='H1-Lato-fw-700-fs-32'>
          {`Leaderboard - ${activeTab.label}`}
        </Box>
      </Box>
      <LeaderboardTabTable tableData={tableData} />
    </>
  );
};
export default LeaderboardTab;
