import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

const Section6 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '70px',
        alignItems: 'center',
        padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'var(--font-lato)',
          color: theme.palette.powderWhite,
          fontSize: { xs: '24px', md: '32px', xlg: '48px' },
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: { xs: '36px', md: '48px', xlg: '72px' },
        }}
      >
        Join our community
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '20px', md: '60px' },
        }}
      >
        <CustomSocialLink icon='/asserts/social/discord.svg' url='https://www.linkedin.com' />
        <CustomSocialLink icon='/asserts/social/twitter.svg' url='https://www.linkedin.com' />
        <CustomSocialLink icon='/asserts/social/linkedin.svg' url='https://www.linkedin.com' />
        <CustomSocialLink icon='/asserts/social/medium.svg' url='https://www.linkedin.com' />
      </Box>
    </Box>
  );
};
export default Section6;

const CustomSocialLink = ({ icon, url }: { icon: string; url: string }) => {
  const theme = useCustomTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Link
      href={url}
      target='_blank'
      style={{
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '10px', md: '20px' },
          borderRadius: '10px',
          background: theme.palette.white10,
        }}
      >
        <Image src={icon} alt='logo' width={isMd ? 48 : 24} height={isMd ? 48 : 24} />
      </Box>
    </Link>
  );
};
