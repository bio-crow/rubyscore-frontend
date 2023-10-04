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
          The best analytics - only with us!
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
          <Box>
            We analyse millions of transactions, create segmentation on 10+ parameters, and track your wallet
            among millions of others in our rankings.
          </Box>
          <Box>We change the game!</Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', lg: '60%' },
          aspectRatio: '996/441',
          maxWidth: { xs: '1000px', lg: '786px' },
          position: 'relative',
        }}
      >
        <Image src='/asserts/landing/landing-section2-img.svg' alt='img' fill />
      </Box>
    </Box>
  );
};
export default Section3;
