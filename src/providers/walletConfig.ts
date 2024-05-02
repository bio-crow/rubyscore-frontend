import { Chain, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import * as allDefaultChains from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
  coinbaseWallet,
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { networkChains } from '@/providers/networkChains';
const defaultNets = Object.values(allDefaultChains);
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [...defaultNets, ...networkChains],
  [publicProvider()]
);

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || '';

export const appInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      coinbaseWallet({ appName: 'RubyScore', chains }),
    ],
  },
]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
export { chains };
