import { ThemeOptions, useTheme } from '@mui/material/styles';
interface CustomTheme {
  palette: {
    mode: string;
    black: string;
    white10: string;
    white50: string;
    backgroundColor: string;
    lightGreen: string;
    powderWhite: string;
  };
  breakpoints: {
    values: {
      xs: number,
      sm:  number,
      md:  number,
      lg:  number,
      xl:  number,
    },
    up: Function,
    down: Function
  },

}
export function useCustomTheme() {
  const theme: CustomTheme = useTheme();

  return theme;
}
