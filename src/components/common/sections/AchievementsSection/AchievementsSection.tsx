import { Box } from '@mui/system';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import RefreshIcon from '@/components/common/Icons/RefreshIcon';
import { mokeAchievements } from '@/modules/Dashboard/DashboardTab/mokeAchievements';
import AchievementCard from '@/components/common/sections/AchievementsSection/AchievementCard/AchievementCard';
import { getUserGradation } from '@/core/thunk/dashboard.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { FC, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { DashboardTabIndexType, IAchievementCard } from '@/types/index';
import { prepareUserGradationToAchievementsCards } from '@/utils/helpers';
import { CircularProgress } from '@mui/material';
interface Props {
  wallet: any;
  activeTab: { index: DashboardTabIndexType; label: string };
}
const AchievementsSection: FC<Props> = ({ activeTab, wallet }) => {
  const dispatch = useAppDispatch();
  const userGradation = useAppSelector(state => state.dashboardState.userGradation);
  const loadingUserGradation = useAppSelector(state => state.dashboardState.loadingUserGradation);
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const refreshGradation = () => {
    if (wallet) {
      const data = {
        wallet: `${wallet}`,
        projectName: activeTab.index,
      };
      dispatch(getUserGradation(data));
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'unset', md: 'center' },
          gap: '20px',
          justifyContent: 'space-between',
        }}
      >
        <Box className='H1-Lato-fw-700-fs-32' color={theme.palette.powderWhite}>
          Achievements
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '20px',
          }}
        >
          <SecondaryButton
            startIcon={<RefreshIcon fill={theme.palette.powderWhite} />}
            variant='outlined'
            size='large'
            onClick={refreshGradation}
            fullWidth={!isSm}
          >
            Refresh
          </SecondaryButton>
        </Box>
      </Box>
      <>
        {loadingUserGradation ? (
          <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
            <CircularProgress
              sx={{
                color: theme.palette.lightGreen,
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: '20px',
            }}
          >
            {userGradation &&
              prepareUserGradationToAchievementsCards(userGradation).map(item => (
                <AchievementCard key={item.label} data={item} />
              ))}
          </Box>
        )}
      </>
    </Box>
  );
};
export default AchievementsSection;
