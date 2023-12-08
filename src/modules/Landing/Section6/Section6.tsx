import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import Image from 'next/image';
const Section6 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
        padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '720px',
          textAlign: 'center',
          fontFamily: 'var(--font-lato)',
          color: theme.palette.powderWhite,
          fontSize: { xs: '24px', md: '32px', xlg: '48px' },
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: { xs: '36px', md: '48px', xlg: '72px' },
        }}
      >
        Web3 Decentralized Principles
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          maxWidth: '720px',
          textAlign: 'center',
          fontFamily: 'var(--font-lato)',
          fontSize: { xs: '16px', md: '18px', xlg: '24px' },
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: { xs: '24px', md: '27px', xlg: '32px' },
          color: theme.palette.white50,
        }}
      >
        We are truly decentralized project, utilizing only your non-custodial wallet for authentication. We
        refrain from employing centralized profiles on platforms such as Twitter, Facebook, and others.
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          paddingTop: '30px',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            aspectRatio: '3/1',
            width: '100%',
            maxWidth: '1000px',
            position: 'relative',
          }}
        >
          <Image src='/asserts/landing/map.png' alt='map' fill />
        </Box>
        <Box
          sx={{
            aspectRatio: '3/1.2',
            width: '80%',
            top: '20%',
            left: '30%',
            background: '#92FD9D',
            borderRadius: '40%',
            filter: 'blur(150px)',
            position: 'absolute',
            opacity: '0.4',
            zIndex: '-1',
          }}
        />
        <Box
          sx={{
            aspectRatio: '3/1.2',
            width: '60%',
            top: '20%',
            left: '0',
            background: '#04CBFD',
            borderRadius: '40%',
            filter: 'blur(150px)',
            position: 'absolute',
            opacity: '0.4',
            zIndex: '-1',
          }}
        />
      </Box>
    </Box>
  );
};
export default Section6;
