import { Box } from '@mui/system';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import LeaderboardTabTable from '@/modules/Leaderboard/LeaderboardTabTable/LeaderboardTabTable';
import { FC } from 'react';
import { ILeaderboardData } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useAppSelector } from '@/core/store';
import LeaderBoardSearch from '@/modules/Leaderboard/LeaderBoardSearch/LeaderBoardSearch';
import { CircularProgress } from '@mui/material';

interface Props {
  activeTab: any;
  tableData: ILeaderboardData[];
}

const LeaderboardTab: FC<Props> = ({ tableData, activeTab }) => {
  const theme = useCustomTheme();
  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  const loading = useAppSelector(state => state.leaderboardState.loading);
  const isAuth = useAppSelector(state => state.authState.isAuth);
  return (
    <>
      {' '}
      {loading ? (
        <Box display='flex' width='100%' height='50%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <>
          {isAuth && <UserInfoSection user={leaderboardUser} />}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '20px',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: { xs: 'unset', md: 'center' },
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box flex='1' color={theme.palette.powderWhite} className='H1-Lato-fw-700-fs-32'>
                  {`Leaderboard - ${activeTab.label}`}
                </Box>
                <Box minWidth='250px'>
                  <LeaderBoardSearch activeTab={activeTab} />
                </Box>
              </Box>
            </Box>
            <LeaderboardTabTable tableData={tableData} activeTab={activeTab} />
          </Box>
        </>
      )}
    </>
  );
};
export default LeaderboardTab;
