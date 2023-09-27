'use client';
import { Box } from '@mui/system';
import { useState, MouseEvent, FC } from 'react';
import { MenuItem } from '@mui/material';
import { Menu } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@/components/common/Icons/MenuIcon';
import { useAccount, useDisconnect } from 'wagmi';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/core/store';
import CustomConnectButton from '@/components/common/CustomConnectButton/CustomConnectButton';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';

interface Props {
  navLinks: { label: string; route: string }[];
}

const UserAccount: FC<Props> = ({ navLinks }) => {
  const theme = useCustomTheme();
  const isLowerLg = useMediaQuery(theme.breakpoints.down('lg'));
  const loading = useAppSelector(state => state.authState.loading);
  const router = useRouter();
  const { address } = useAccount();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { disconnect } = useDisconnect();
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    setAnchorEl(null);
    disconnect();
  };
  const maskedAddress = address && address.slice(0, 6) + '...' + address.slice(-6);
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const userName = useAppSelector(state => state.userState.userName);
  return (
    <Box
      sx={{
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.backgroundColor,
        padding: '0px 16px 0px  16px',
        height: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        width: { xs: 'unset', sm: '226px' },
      }}
    >
      <Box display='flex' alignItems='center' gap='5px'>
        <Image src='/asserts/emptyUserIcon.svg' alt='icon' width='32' height='32' />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
          }}
        >
          <Box className='menu-Lato-fw-700-fs-12' color={theme.palette.powderWhite}>
            {userName || maskedAddress}
          </Box>
          <Box className='menu-Lato-fw-700-fs-12' color={theme.palette.white50}>
            0 Points
          </Box>
        </Box>
      </Box>
      <Box
        id='basic-button'
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup='true'
        height='24px'
        style={{ cursor: 'pointer' }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fill={theme.palette.powderWhite} />
      </Box>
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isAuth ? (
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              padding: '6px 16px',
            }}
          >
            <Box className='menu-Lato-fw-700-fs-12' color={theme.palette.powderWhite}>
              {maskedAddress}
            </Box>
            <Box className='menu-Lato-fw-700-fs-12' color={theme.palette.white50}>
              0 Points
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              padding: '6px 16px',
            }}
          >
            <CustomConnectButton
              Trigger={
                <PrimaryButton variant='contained' size='small' loading={loading}>
                  Connect Wallet
                </PrimaryButton>
              }
            />{' '}
          </Box>
        )}
        {isLowerLg &&
          navLinks.map((item: any) => (
            <MenuItem key={item.label} onClick={() => router.push(item.route)}>
              {item.label}
            </MenuItem>
          ))}
        {isAuth && <MenuItem onClick={logout}>Logout</MenuItem>}
      </Menu>
    </Box>
  );
};
export default UserAccount;
