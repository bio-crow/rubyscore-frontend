import { Box } from '@mui/system';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import RefreshIcon from '@/components/common/Icons/RefreshIcon';
import AchievementCard from '@/components/common/sections/AchievementsSection/AchievementCard/AchievementCard';
import {
  getUserGradation,
  getUserTransactionsDates,
  updateUserLevelInfo,
} from '@/core/thunk/dashboard.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { FC, useEffect, useState } from 'react';
import { DashboardTabIndexType, IAchievementCard } from '@/types/index';
import { prepareUserGradationToAchievementsCards } from '@/utils/helpers';
import { Button, CircularProgress } from '@mui/material';
import { loadUserProjectInfo } from '@/core/thunk/user.thunk';
import ShareModalWrapper from '../../ShareModal';
import { setShareModalState } from '@/core/state/shareModal.state';
import Image from 'next/image';

interface Props {
  wallet: any;
  onRefresh?: Function;
  activeTab: { index: DashboardTabIndexType; label: string };
}

const AchievementsSection: FC<Props> = ({ activeTab, wallet, onRefresh }) => {
  const dispatch = useAppDispatch();
  const userGradation = useAppSelector(state => state.dashboardState.userGradation);
  const loadingUserGradation = useAppSelector(state => state.dashboardState.loadingUserGradation);
  const shareModalConfig = useAppSelector(state => state.shareModalState);
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const refreshGradation = () => {
    if (wallet) {
      const data = {
        wallet: `${wallet}`,
        projectName: activeTab.index,
      };
      dispatch(getUserGradation(data));
      onRefresh && onRefresh();
    }
  };

  const handleClose = () => {
    dispatch(setShareModalState({ isOpen: false, type: null, social: null }));
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
            alignItems: 'center',
          }}
        >
          {userGradation && (
            <>
              <SecondaryButton
                startIcon={<RefreshIcon fill={theme.palette.powderWhite} />}
                variant='outlined'
                size='large'
                onClick={refreshGradation}
                fullWidth={!isSm}
              >
                Refresh
              </SecondaryButton>
              <Box color={theme.palette.powderWhite} className='Body-Inter-fw-700-fs-16'>
                Share my stats
              </Box>
              <Button
                onClick={() =>
                  dispatch(
                    setShareModalState({
                      isOpen: true,
                      type: 'achievements',
                      social: 'twitter',
                    })
                  )
                }
                sx={{
                  padding: '12px',
                  background: '#92FE9D',
                  borderRadius: '10px',
                  border: '1px solid var(--white-10, rgba(245, 247, 243, 0.10))',
                  minWidth: '0',
                }}
              >
                <Image src='/asserts/social/x.svg' width={24} height={24} alt='X' />
              </Button>
              <Button
                onClick={() =>
                  dispatch(
                    setShareModalState({
                      isOpen: true,
                      type: 'achievements',
                      social: 'telegram',
                    })
                  )
                }
                sx={{
                  padding: '12px',
                  background: '#92FE9D',
                  borderRadius: '10px',
                  border: '1px solid var(--white-10, rgba(245, 247, 243, 0.10))',
                  minWidth: '0',
                }}
              >
                <Image src='/asserts/social/telegram_outline.svg' width={24} height={24} alt='Telegram' />
              </Button>
            </>
          )}
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
          <>
            {userGradation ? (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                  gap: '20px',
                }}
              >
                {prepareUserGradationToAchievementsCards(userGradation).map(item => (
                  <AchievementCard key={item.key} data={item} />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  flex: '1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.powderWhite,
                }}
                className='Body-Lato-fw-600-fs-24'
              >
                No Data
              </Box>
            )}
          </>
        )}
      </>
      {shareModalConfig.isOpen && (
        <ShareModalWrapper
          type={shareModalConfig.type}
          social={shareModalConfig.social}
          open={shareModalConfig.isOpen}
          onClose={handleClose}
          activeNetwork={activeTab.index}
        />
      )}
    </Box>
  );
};
export default AchievementsSection;
