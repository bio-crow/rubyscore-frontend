import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@mui/system';
import { cloneElement, FC, ReactNode } from 'react';
import { useAppSelector } from '@/core/store';
interface Props {
  Trigger: any;
}
const CustomConnectButton: FC<Props> = ({ Trigger }) => {
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
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
        const ConnectBtn = cloneElement(Trigger, { onClick: openConnectModal }, Trigger.props.children);
        const WrongBtn = cloneElement(Trigger, { onClick: openChainModal }, Trigger.props.children);
        return (
          <Box
            {...(!ready && {
              'aria-hidden': true,
            })}
          >
            {(() => {
              if (!connected) {
                return <>{ConnectBtn}</>;
              }

              if (chain.unsupported) {
                return <>{WrongBtn}</>;
              }

              return <>{ConnectBtn}</>;
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default CustomConnectButton;
