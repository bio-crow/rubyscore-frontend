'use client';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomConnectButton from '@/components/common/CustomConnectButton/CustomConnectButton';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import { useAppSelector } from '@/core/store';

const PrivatePageLayout = () => {
  const theme = useCustomTheme();
  const loading = useAppSelector(state => state.authState.loading);
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    openConnectModal && openConnectModal();
  }, [openConnectModal]);
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='40px'
      width='100%'
      flex='1'
      alignItems='center'
      justifyContent='center'
      bgcolor={theme.palette.backgroundColor}
    >
      <Box
        sx={{
          textAlign: 'center',
          color: theme.palette.white50,
          maxWidth: '300px',
        }}
        className='Body-Lato-fw-500-fs-24'
      >
        You need connect Wallet to access this page.
      </Box>
      <CustomConnectButton
        Trigger={
          <PrimaryButton variant='contained' size='large' loading={loading}>
            Connect Wallet
          </PrimaryButton>
        }
      />
    </Box>
  );
};
export default PrivatePageLayout;
