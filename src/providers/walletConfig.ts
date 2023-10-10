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
const mumbaiChain: Chain = {
  id: 80001,
  name: 'Mumbai',
  network: 'Mumbai',
  nativeCurrency: {
    decimals: 18,
    name: 'Mumbai',
    symbol: 'MATIC',
  },
  rpcUrls: {
    public: {
      http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public'],
    },
    default: {
      http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Mumbai',
      url: 'https://mumbai.polygonscan.com/',
    },
  },
  testnet: false,
};
const { chains, publicClient, webSocketPublicClient } = configureChains([mumbaiChain], [publicProvider()]);

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
