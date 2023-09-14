import {ConnectButton} from "@rainbow-me/rainbowkit";
import {Button} from "@mui/material";


const CustomConnectButton = () => {
    return <ConnectButton.Custom>
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
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

            return (
                <div
                    {...(!ready && {
                        'aria-hidden': true,
                    })}
                >
                    {(() => {
                        if (!connected) {
                            return (
                                <Button variant="contained" onClick={openConnectModal} type="button">
                                    Connect Wallet
                                </Button>
                            );
                        }

                        if (chain.unsupported) {
                            return (
                                <Button  variant="contained" onClick={openChainModal} type="button">
                                    Wrong network
                                </Button>
                            );
                        }

                        return null
                    })()}
                </div>
            );
        }}
    </ConnectButton.Custom>;
};
export default CustomConnectButton;