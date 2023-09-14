import {ThemeOptions, useTheme} from "@mui/material/styles";
interface CustomTheme  {
    palette: {
        mode: string,
        black: string,
        white10: string,
        white50: string,
        backgroundColor: string,
        lightGreen: string,
        powderWhite: string,
    }
}
export function useCustomTheme() {
    const theme:CustomTheme = useTheme();

    return theme;
}