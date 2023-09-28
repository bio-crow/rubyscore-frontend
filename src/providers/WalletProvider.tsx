'use client';
import React, { FC, ReactNode } from 'react';
import merge from 'lodash.merge';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
  lightTheme,
  Theme,
} from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  trustWallet,
  walletConnectWallet,
  metaMaskWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { store } from '@/core/store';
import { Provider } from 'react-redux';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import * as process from 'process';

type Props = {
  children: ReactNode;
};
const { chains, publicClient, webSocketPublicClient } = configureChains([polygonMumbai], [publicProvider()]);

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || '';

const demoAppInfo = {
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

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
const customDarkTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#92fe9d',
  },
} as Theme);
const customLightTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#92fe9d',
  },
} as Theme);
const WalletProvider: FC<Props> = ({ children }) => {
  const theme = useCustomTheme();
  const currentTheme = theme.palette.mode === 'dark' ? customDarkTheme : customLightTheme;
  return (
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider appInfo={demoAppInfo} chains={chains} theme={currentTheme}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
};

export default WalletProvider;
