'use client';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useCustomTheme } from '../../../hooks/useCustomTheme';
import CustomConnectButton from '@/components/common/CustomConnectButton/CustomConnectButton';

const AuthLayout = () => {
  const theme = useCustomTheme();
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    openConnectModal && openConnectModal();
  }, [openConnectModal]);
  return (
    <Box
      display='flex'
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      bgcolor={theme.palette.backgroundColor}
    >
      <CustomConnectButton />
    </Box>
  );
};
export default AuthLayout;
