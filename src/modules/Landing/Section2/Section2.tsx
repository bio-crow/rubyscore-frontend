import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';

const Section2 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center',
        padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
        position: 'relative',
        zIndex: 5,
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
        Your ranking is the roadmap to success
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
        Boost it by remaining active, and see your SBT level rise in unison! The higher your ranking, the
        nearer you are to reaching your goals and encountering new opportunities
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '-20vw',
          right: 'calc((100% - 100vw) / 2)',
          zIndex: '-1',
          width: '40vw',
          aspectRatio: '0.52',
        }}
      >
        <Image src='/asserts/landing/landing-section2-bg1.png' alt='bg' fill />
      </Box>
    </Box>
  );
};
export default Section2;
