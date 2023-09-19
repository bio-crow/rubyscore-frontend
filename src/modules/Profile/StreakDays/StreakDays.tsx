import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const StreakDays = () => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 32px',
        borderRadius: '10px',
        gap: '40px',
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
            Till the next achievement: 6 of 10 days
          </Box>
        </Box>
        <SecondaryButton variant='contained' size='large' fullWidth={!isSm}>
          Claim all
        </SecondaryButton>
      </Box>

      <Box bgcolor='pink'>steps</Box>
    </Box>
  );
};
export default StreakDays;
