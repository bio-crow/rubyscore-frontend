import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomStepper from '@/modules/Profile/StreakDays/CustomSteper/CustomStepper';
import { claimStreakDays, getStreakDays } from '@/core/thunk/user.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';
import { getStreakDaysSteps } from '@/utils/helpers';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { TooltipMyReferral, TooltipStreakDays } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';

const StreakDays = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const streakDays = useAppSelector(state => state.userState.streakDays);
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const currentDay = streakDays.current || 0;
  const daySteps = getStreakDaysSteps(currentDay);
  const currentStep = daySteps.find(step => step.day > currentDay);
  const nextDay = currentStep ? currentStep.day : null;
  const claimStreak = () => {
    dispatch(claimStreakDays());
  };
  useEffect(() => {
    dispatch(getStreakDays());
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 32px',
        borderRadius: '10px',
        gap: { xs: '60px', md: '40px' },
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: { xs: 'unset', sm: 'flex-start' },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
              className='H2-Lato-fw-700-fs-24'
            >
              Streak days
            </Box>
            <CustomTooltip title={<TooltipStreakDays />}>
              <Box
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <InfoIcon fill={theme.palette.white50} />
              </Box>
            </CustomTooltip>
          </Box>

          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-500-fs-18'
          >
            {nextDay ? `Till the next achievement: ${currentDay} of ${nextDay} days` : ``}
          </Box>
        </Box>
        <SecondaryButton
          variant='contained'
          size='large'
          fullWidth={!isSm}
          onClick={claimStreak}
          disabled={!streakDays.isClaimable}
        >
          Get all
        </SecondaryButton>
      </Box>

      <CustomStepper currentDay={currentDay} steps={daySteps} />
    </Box>
  );
};
export default StreakDays;
