import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';

const Section3 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        flexDirection: { xs: 'column', lg: 'row' },
        padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-start' },
            width: '100%',
            maxWidth: '520px',
            textAlign: { xs: 'center', lg: 'left' },
            fontFamily: 'var(--font-lato)',
            color: theme.palette.powderWhite,
            fontSize: { xs: '24px', md: '32px', xlg: '48px' },
            fontStyle: 'normal',
            fontWeight: '900',
            lineHeight: { xs: '36px', md: '48px', xlg: '72px' },
          }}
        >
          Top-notch analytics, available exclusively from us
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            alignItems: { xs: 'center', lg: 'flex-start' },
            maxWidth: '520px',
            textAlign: { xs: 'center', lg: 'left' },
            fontFamily: 'var(--font-lato)',
            fontSize: { xs: '16px', md: '18px', xlg: '24px' },
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: { xs: '24px', md: '27px', xlg: '32px' },
            color: theme.palette.white50,
          }}
        >
          {`Analyzing millions of transactions, creating segments based on more than 10 parameters, and
            monitoring your wallet among millions of others in our rankings. We're setting new standards!`}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', lg: '60%' },
          aspectRatio: '1.95',
          maxWidth: { xs: '1000px', lg: '786px' },
          position: 'relative',
        }}
      >
        <Image src='/asserts/landing/landing-section2-img.png' alt='img' fill />
      </Box>
    </Box>
  );
};
export default Section3;
