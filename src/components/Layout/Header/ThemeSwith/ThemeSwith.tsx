'use client';
import { Box } from '@mui/system';
import DarkIcon from '@/components/Icons/DarkIcon';
import { useState } from 'react';
import LightIcon from '@/components/Icons/LightIcon';

const ThemeSwitch = () => {
  const [mode, setMode] = useState('dark');
  const switchMode = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };
  return (
    <Box onClick={() => switchMode()} style={{ cursor: 'pointer' }} height='24px'>
      {mode === 'dark' && <DarkIcon />}
      {mode === 'light' && <LightIcon />}
    </Box>
  );
};
export default ThemeSwitch;
