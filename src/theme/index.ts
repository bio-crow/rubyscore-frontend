import {PaletteMode} from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode: mode,
        ...(mode === 'dark'
            ? {
                black: '#1c1e25',
                white10: '#f5f7f31a',
                white50: '#f5f7f380',
                backgroundColor: '#121317',
                lightGreen: '#92fe9d',
                powderWhite: '#f5f7f3',
            }
            : {
                black: '#FFFFFF',
                white10: '#333333',
                white50: '#333333',
                backgroundColor: '#FFFFFF',
                lightGreen: '#92fe9d',
                powderWhite: '#333333',
            }),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 767,
            lg: 992,
            xl: 1392,
        },
    },
});
