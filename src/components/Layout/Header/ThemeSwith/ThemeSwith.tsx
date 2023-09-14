'use client';
import { Box } from '@mui/system';
import DarkIcon from '@/components/Icons/DarkIcon';
import { useContext, useState } from 'react';
import LightIcon from '@/components/Icons/LightIcon';
import { ColorModeContext } from '@/theme/ThemeRegistry';
import { useCustomTheme } from '../../../../hooks/useCustomTheme';

const ThemeSwitch = () => {
  const theme = useCustomTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box onClick={colorMode.toggleColorMode} style={{ cursor: 'pointer' }} height='24px'>
      {theme.palette.mode === 'dark' ? (
        <DarkIcon fill={theme.palette.powderWhite} />
      ) : (
        <LightIcon fill={theme.palette.powderWhite} />
      )}
    </Box>
  );
};
export default ThemeSwitch;
