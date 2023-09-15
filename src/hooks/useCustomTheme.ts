import { ThemeOptions, useTheme } from '@mui/material/styles';
import { CustomTheme } from '@/theme/index';

export function useCustomTheme() {
  const theme: CustomTheme = useTheme();

  return theme;
}
