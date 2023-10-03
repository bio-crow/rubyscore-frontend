import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const Section2 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center',
        padding: { xs: '0px 15px 0px 15px', xl: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '760px',
          textAlign: 'center',
          fontFamily: 'var(--font-lato)',
          color: theme.palette.powderWhite,
          fontSize: { xs: '24px', md: '32px', xlg: '48px' },
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: { xs: '36px', md: '48px', xlg: '72px' },
        }}
      >
        Your ranking is your map to success
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '760px',
          textAlign: 'center',
          fontFamily: 'var(--font-lato)',
          fontSize: { xs: '16px', md: '18px', xlg: '24px' },
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: { xs: '24px', md: '27px', xlg: '32px' },
          color: theme.palette.white50,
        }}
      >
        Raise it by being active, and watch your SBT level rise with it! After all, the higher your ranking,
        the closer you are to your goals and new opportunities.
      </Box>
    </Box>
  );
};
export default Section2;
