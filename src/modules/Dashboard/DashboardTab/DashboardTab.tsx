import { Box } from '@mui/system';
import { FC, useEffect } from 'react';
import MyLevelSection from '@/components/common/sections/MyLevelSection/MyLevelSection';
import MainInfo from '@/modules/Dashboard/DashboardTab/MainInfo/MainInfo';
import AchievementsSection from '@/components/common/sections/AchievementsSection/AchievementsSection';
import Transactions from '@/modules/Dashboard/DashboardTab/Transactions/Transactions';
import { DashboardTabIndexType } from '@/types/index';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getProjectStatistics } from '@/core/thunk/dashboard.thunk';
import { CircularProgress } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useAccount } from 'wagmi';

interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}

const DashboardTab: FC<Props> = ({ activeTab }) => {
  const theme = useCustomTheme();
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const loadingProjectStatistics = useAppSelector(state => state.dashboardState.loadingProjectStatistics);
  const isAuth = useAppSelector(state => state.authState.isAuth);
  useEffect(() => {
    dispatch(getProjectStatistics(activeTab.index));
  }, [activeTab.index]);
  return (
    <>
      {loadingProjectStatistics ? (
        <Box display='flex' width='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
          }}
        >
          {isAuth && <MyLevelSection project={activeTab.index} />}
          <MainInfo />
          <Transactions activeTab={activeTab} />
          <AchievementsSection activeTab={activeTab} wallet={address} />
        </Box>
      )}
    </>
  );
};
export default DashboardTab;
