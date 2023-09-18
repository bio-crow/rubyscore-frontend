import { PaletteMode } from '@mui/material';

export interface CustomTheme {
  palette: {
    mode: string;
    black: string;
    gray: string;
    white10: string;
    white50: string;
    backgroundColor: string;
    lightGreen: string;
    powderWhite: string;
    benefitsGradient: string;
    benefitsGradient2: string;
    btnPrimaryDefault: string;
    btnPrimaryHover: string;
    btnPrimaryFocus: string;
    btnPrimaryDisabled: string;
    btnSecondaryDefault: string;
    btnSecondaryHover: string;
    btnSecondaryFocus: string;
    btnSecondaryDisabled: string;
    btnSecondaryOutlineDefault: string;
    btnSecondaryOutlineDefaultBorder: string;
    btnSecondaryOutlineHover: string;
    btnSecondaryOutlineHoverBorder: string;
    btnSecondaryOutlineFocus: string;
    btnSecondaryOutlineFocusBorder: string;
    btnSecondaryOutlineDisabled: string;
    btnThirdlyDefault: string;
    btnThirdlyHover: string;
    btnThirdlyFocus: string;
    btnThirdlyDisabled: string;
  };
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    up: Function;
    down: Function;
  };
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode: mode,
    ...(mode === 'dark'
      ? {
          black: '#1c1e25',
          gray: '#484C5B',
          white10: '#f5f7f31a',
          white50: '#f5f7f380',
          backgroundColor: '#121317',
          lightGreen: '#92fe9d',
          powderWhite: '#f5f7f3',
          benefitsGradient: 'linear-gradient(90deg, #1C1E25 0%, #0A0C0E 47.61%, #0A0C0E 100%)',
          benefitsGradient2:
            'linear-gradient(0deg, rgba(245, 247, 243, 0.10) 0%, rgba(245, 247, 243, 0.10) 100%)',
          btnPrimaryDefault: 'linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%, #00C9FF 100%)',
          btnPrimaryHover: '#04CBFD',
          btnPrimaryFocus: '#02A2CA',
          btnPrimaryDisabled: '#484C5B',
          btnSecondaryDefault: '#92FE9D',
          btnSecondaryHover: '#72FE80',
          btnSecondaryFocus: '#34FE48',
          btnSecondaryDisabled: '#484C5B',
          btnSecondaryOutlineDefault: '#F5F7F31A',
          btnSecondaryOutlineDefaultBorder: '#F5F7F31A',
          btnSecondaryOutlineHover: '#484C5B',
          btnSecondaryOutlineHoverBorder: '#F5F7F31A',
          btnSecondaryOutlineFocus: '#484C5B',
          btnSecondaryOutlineFocusBorder: '#92FE9D',
          btnSecondaryOutlineDisabled: '#484C5B',
          btnThirdlyDefault: 'linear-gradient(94deg, #F24236 0%, #F2BD36 100%)',
          btnThirdlyHover: '#F2BD36',
          btnThirdlyFocus: '#F24236',
          btnThirdlyDisabled: '#484C5B',
        }
      : {
          black: '#FFFFFF',
          gray: '#484C5B',
          white10: '#333333',
          white50: '#333333',
          backgroundColor: '#FFFFFF',
          lightGreen: '#92fe9d',
          powderWhite: '#333333',
          benefitsGradient: 'linear-gradient(90deg, #1C1E25 0%, #0A0C0E 47.61%, #0A0C0E 100%)',
          benefitsGradient2:
            'linear-gradient(0deg, rgba(245, 247, 243, 0.10) 0%, rgba(245, 247, 243, 0.10) 100%)',
          btnPrimaryDefault: 'linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%, #00C9FF 100%)',
          btnPrimaryHover: '#04CBFD',
          btnPrimaryFocus: '#02A2CA',
          btnPrimaryDisabled: '#484C5B',
          btnSecondaryDefault: '#92FE9D',
          btnSecondaryHover: '#72FE80',
          btnSecondaryFocus: '#34FE48',
          btnSecondaryDisabled: '#484C5B',
          btnSecondaryOutlineDefault: '#F5F7F31A',
          btnSecondaryOutlineDefaultBorder: '#F5F7F31A',
          btnSecondaryOutlineHover: '#484C5B',
          btnSecondaryOutlineHoverBorder: '#F5F7F31A',
          btnSecondaryOutlineFocus: '#484C5B',
          btnSecondaryOutlineFocusBorder: '#92FE9D',
          btnSecondaryOutlineDisabled: '#484C5B',
          btnThirdlyDefault: 'linear-gradient(94deg, #F24236 0%, #F2BD36 100%)',
          btnThirdlyHover: '#F2BD36',
          btnThirdlyFocus: '#F24236',
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
