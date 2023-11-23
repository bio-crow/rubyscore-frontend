import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';

const Section4 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', lg: '60%' },
          aspectRatio: '786/441',
          maxWidth: { xs: '1000px', lg: '786px' },
          position: 'relative',
          zIndex: 5,
        }}
      >
        <Image src='/asserts/landing/landing-section3-img.svg' alt='img' fill />
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '-50%',
            zIndex: '-1',
            width: '40vw',
            aspectRatio: '10/6',
            borderRadius: '60vw',
            background: '#92FD9D',
            filter: 'blur(15vw)',
          }}
        />
      </Box>
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
            maxWidth: '515px',
            textAlign: { xs: 'center', lg: 'left' },
            fontFamily: 'var(--font-lato)',
            color: theme.palette.powderWhite,
            fontSize: { xs: '24px', md: '32px', xlg: '48px' },
            fontStyle: 'normal',
            fontWeight: '900',
            lineHeight: { xs: '36px', md: '48px', xlg: '72px' },
          }}
        >
          Join us to stay updated on the rankings and achievements of other wallets!
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: { xs: 'center', lg: 'flex-start' },
            maxWidth: '515px',
            textAlign: { xs: 'center', lg: 'left' },
            fontFamily: 'var(--font-lato)',
            fontSize: { xs: '16px', md: '18px', xlg: '24px' },
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: { xs: '24px', md: '27px', xlg: '32px' },
            color: theme.palette.white50,
          }}
        >
          Our unique ranking system enables you to track wallets on our leaderboard and compare their progress
          within our project and beyond!
        </Box>
      </Box>
    </Box>
  );
};
export default Section4;
