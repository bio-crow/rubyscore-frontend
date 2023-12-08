import { Box } from '@mui/system';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import { appRoutes } from '@/constants/routes';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Section1 = () => {
  const theme = useCustomTheme();
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '20px', md: '40px' },
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
          maxWidth: '750px',
          textAlign: 'center',
          color: theme.palette.powderWhite,
          fontFamily: 'var(--font-lato)',
          fontSize: { xs: '32px', md: '48px', xlg: '64px' },
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: { xs: '48px', md: '72px', xlg: '72px' },
        }}
      >
        Your ranking and score in popular Web3 projects
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '729px',
          textAlign: 'center',
          color: theme.palette.white50,
          fontFamily: 'var(--font-lato)',
          fontSize: { xs: '16px', md: '18px', xlg: '24px' },
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: { xs: '24px', md: '27px', xlg: '32px' },
        }}
      >
        Track your progress in your favorite projects and rise to the top by actively participating
      </Box>
      <Box>
        <PrimaryButton variant='contained' size='large' onClick={() => router.push(appRoutes.DASHBOARD)}>
          Get Started!
        </PrimaryButton>
      </Box>
      <Box
        sx={{
          width: '100%',
          aspectRatio: '2/1.05',
          maxWidth: '1000px',
          position: 'relative',
        }}
      >
        <Image src='/asserts/landing/landing-section1-img.png' alt='img' fill loading='eager' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50px',
          left: 'calc((100% - 100vw) / 2)',
          zIndex: '-1',
          width: '20vw',
          aspectRatio: '1/2',
        }}
      >
        <Image src='/asserts/landing/landing-section1-bg1.png' alt='bg' fill loading='eager' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '15vw',
          right: '-30vw',
          zIndex: '-1',
          width: '60vw',
          aspectRatio: '10/6',
          borderRadius: '60vw',
          background: '#92FD9D',
          filter: 'blur(15vw)',
        }}
      />
    </Box>
  );
};
export default Section1;
