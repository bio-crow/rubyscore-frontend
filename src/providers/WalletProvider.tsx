'use client';
import React, { FC, ReactNode } from 'react';
import merge from 'lodash.merge';
import {
  RainbowKitProvider,
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
import { appInfo, chains, wagmiConfig } from '@/providers/walletConfig';

type Props = {
  children: ReactNode;
};

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
        <RainbowKitProvider appInfo={appInfo} chains={chains} theme={currentTheme}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
};

export default WalletProvider;
