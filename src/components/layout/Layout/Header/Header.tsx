import { Box } from '@mui/system';
import UserAccount from '@/components/layout/Layout/Header/UserAccount/UserAccount';
import Image from 'next/image';
import ThemeSwitch from '@/components/layout/Layout/Header/ThemeSwith/ThemeSwith';
import { appRoutes } from '@/constants/routes';
import NavLink from '@/components/layout/Layout/Header/NavLink/NavLink';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/core/store';
import CustomConnectButton from '@/components/common/CustomConnectButton/CustomConnectButton';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { getNameByAddress, getReferrals } from '@/core/thunk/user.thunk';

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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLowerLg = useMediaQuery(theme.breakpoints.down('lg'));
  const loading = useAppSelector(state => state.authState.loading);
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const { address } = useAccount();
  const userName = useAppSelector(state => state.userState.userName);
  useEffect(() => {
    if (address && isAuth) {
      dispatch(getNameByAddress(address));
    }
  }, [address, isAuth]);
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
          <Box onClick={() => router.push(appRoutes.LANDING)} sx={{ cursor: 'pointer' }}>
            <Image
              width={!isLowerLg ? '260' : '32'}
              height={!isLowerLg ? '40' : '32'}
              src={!isLowerLg ? '/asserts/logo.svg' : '/asserts/logoIcon.svg'}
              alt='logo'
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            gap: '20px',
            alignItems: 'center',
          }}
        >
          {navLinks.map(item => (
            <NavLink key={item.route} route={item.route} label={item.label} />
          ))}
        </Box>
        <ThemeSwitch />
        {isAuth || isLowerLg ? (
          <UserAccount navLinks={navLinks} />
        ) : (
          <CustomConnectButton
            Trigger={
              <PrimaryButton variant='contained' size='medium' loading={loading}>
                Connect Wallet
              </PrimaryButton>
            }
          />
        )}
      </Box>
    </Box>
  );
};
export default Header;
//maxWidth='1392px' width='100%' display='flex' gap='20px' alignItems='center'
