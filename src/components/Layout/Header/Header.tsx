import { Box } from '@mui/system';
import UserAccount from '@/components/Layout/Header/UserAccount/UserAccount';
import Image from 'next/image';
import ThemeSwitch from '@/components/Layout/Header/ThemeSwith/ThemeSwith';
import { appRoutes } from '../../../constants/routes';
import NavLink from '@/components/Layout/Header/NavLink/NavLink';
import {useCustomTheme} from "../../../hooks/useCustomTheme";

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
  return (
    <Box
      width='100%'
      height='60px'
      display='flex'
      justifyContent='center'
      bgcolor={theme.palette.black}
      border={`1px solid ${theme.palette.white10}`}
    >
      <Box maxWidth='1392px' width='100%' display='flex' gap='20px' alignItems='center'>
        <Box flex='1'>
          <Image width='260' height='40' src='/asserts/logo.svg' alt='logo' />
        </Box>
        <Box display='flex' gap='20px' alignItems='center'>
          {navLinks.map(item => (
            <NavLink key={item.route} route={item.route} label={item.label} />
          ))}
        </Box>
        <ThemeSwitch />
        <UserAccount />
      </Box>
    </Box>
  );
};
export default Header;
