import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomStepper from '@/modules/Profile/StreakDays/CustomSteper/CustomStepper';

const daySteps = [
  {
    day: 5,
    points: 1,
  },
  {
    day: 10,
    points: 5,
  },
  {
    day: 15,
    points: 10,
  },
];
const StreakDays = () => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const currentDay = 7;
  const lastDay = 15;
  const currentStep = daySteps.find(step => step.day > currentDay);
  const nextDay = currentStep ? currentStep.day : null;
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
              color: theme.palette.powderWhite,
            }}
            className='H2-Lato-fw-700-fs-24'
          >
            Streak days
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-500-fs-18'
          >
            {nextDay
              ? `Till the next achievement: ${currentDay} of ${nextDay} days`
              : `Max level achieved. Claim it`}
          </Box>
        </Box>
        <SecondaryButton variant='contained' size='large' fullWidth={!isSm}>
          Claim all
        </SecondaryButton>
      </Box>

      <CustomStepper currentDay={currentDay} maxDay={lastDay} steps={daySteps} />
    </Box>
  );
};
export default StreakDays;
