'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeOptions, ThemeProvider} from '@mui/material/styles';
import {Inter} from 'next/font/google';
import {NextAppDirEmotionCacheProvider} from './EmotionCache';
import {PaletteMode} from '@mui/material';
import {getDesignTokens} from "@/theme/index";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});
const inter = Inter({subsets: ['latin']});

export default function ThemeRegistry({children}: { children: React.ReactNode }) {
    const [mode, setMode] = React.useState<PaletteMode>('dark');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    {children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </NextAppDirEmotionCacheProvider>
    );
}
