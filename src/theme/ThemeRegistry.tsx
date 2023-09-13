'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const inter = Inter({ subsets: ['latin'] });

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: inter.style.fontFamily,
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
