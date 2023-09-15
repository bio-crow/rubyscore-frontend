import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@mui/material';
import PrimaryButton from '@/components/ui/PrimaryButton/PrimaryButton';
import { Box } from '@mui/system';

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <Box
            width='250px'
            {...(!ready && {
              'aria-hidden': true,
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <PrimaryButton
                    variant='contained'
                    size='large'
                    onClick={openConnectModal}
                    type='button'
                    fullWidth
                  >
                    Connect Wallet
                  </PrimaryButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <PrimaryButton
                    variant='contained'
                    size='large'
                    onClick={openChainModal}
                    type='button'
                    fullWidth
                  >
                    Wrong network
                  </PrimaryButton>
                );
              }

              return null;
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default CustomConnectButton;
