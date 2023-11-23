import { Chain, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
  coinbaseWallet,
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { testChains } from '@/providers/testChains';
import { prodChains } from '@/providers/prodChains';
const appChains = process.env.NEXT_PUBLIC_IS_PROD === 'true' ? prodChains : testChains;
const { chains, publicClient, webSocketPublicClient } = configureChains(appChains, [publicProvider()]);

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
