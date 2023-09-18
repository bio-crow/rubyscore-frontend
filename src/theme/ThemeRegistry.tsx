'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { PaletteMode } from '@mui/material';
import { getDesignTokens } from '@/theme/index';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<PaletteMode>(() => {
    if (typeof window !== 'undefined') {
      const themeMode = localStorage?.getItem('theme_mode');
      if (themeMode && themeMode === 'light') {
        return 'light';
      } else {
        return 'dark';
      }
    }
    return 'dark';
  });
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          localStorage.setItem('theme_mode', prevMode === 'light' ? 'dark' : 'light');
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
