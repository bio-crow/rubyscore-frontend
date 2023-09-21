import { Box } from '@mui/system';
import UserAccount from '@/components/layout/Layout/Header/UserAccount/UserAccount';
import Image from 'next/image';
import ThemeSwitch from '@/components/layout/Layout/Header/ThemeSwith/ThemeSwith';
import { appRoutes } from '@/constants/routes';
import NavLink from '@/components/layout/Layout/Header/NavLink/NavLink';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';

const navLinks = [
  {
    label: 'Dashboard',
    route: appRoutes.DASHBOARD,
  },
  {
    label: 'Leaderboard',
    route: appRoutes.LEADERBOARD,
  },
  {
    label: 'Profile',
    route: appRoutes.PROFILE,
  },
];

const Header = () => {
  const theme = useCustomTheme();
  const router = useRouter();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      width='100%'
      height='60px'
      display='flex'
      justifyContent='center'
      bgcolor={theme.palette.black}
      border={`1px solid ${theme.palette.white10}`}
      position='fixed'
      top='0'
      left='0'
      zIndex={1000}
    >
      <Box
        sx={{
          maxWidth: '1392px',
          width: '110%',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          padding: { xs: '0px 15px 0px 15px', xl: 0 },
        }}
      >
        <Box flex='1' display='flex' alignItems='center'>
          <Box onClick={() => router.push(appRoutes.DASHBOARD)} sx={{ cursor: 'pointer' }}>
            <Image
              width={isMd ? '260' : '32'}
              height={isMd ? '40' : '32'}
              src={isMd ? '/asserts/logo.svg' : '/asserts/logoIcon.svg'}
              alt='logo'
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', xl: 'flex' },
            gap: '20px',
            alignItems: 'center',
          }}
        >
          {navLinks.map(item => (
            <NavLink key={item.route} route={item.route} label={item.label} />
          ))}
        </Box>
        <ThemeSwitch />
        <UserAccount navLinks={navLinks} />
      </Box>
    </Box>
  );
};
export default Header;
//maxWidth='1392px' width='100%' display='flex' gap='20px' alignItems='center'
