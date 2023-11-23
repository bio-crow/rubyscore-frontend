'use client';
import React, { FC, ReactNode } from 'react';
import merge from 'lodash.merge';
import { RainbowKitProvider, darkTheme, lightTheme, Theme } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { store } from '@/core/store';
import { Provider } from 'react-redux';
import { useCustomTheme } from '@/hooks/useCustomTheme';
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
