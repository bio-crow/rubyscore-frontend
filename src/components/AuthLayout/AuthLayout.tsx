'use client';
import { Box } from '@mui/system';
import { FC, ReactNode, useEffect } from 'react';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';

const AuthLayout = () => {
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    openConnectModal && openConnectModal();
  }, [openConnectModal]);
  return (
    <Box
      display='flex'
      width='100%'
      alignItems='center'
      justifyContent='center'
      bgcolor={`var(--background, #121317)`}
    >
      <ConnectButton />
    </Box>
  );
};
export default AuthLayout;
