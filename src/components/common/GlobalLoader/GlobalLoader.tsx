'use client';
import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { CircularProgress } from '@mui/material';

const GlobalLoader = () => {
  const theme = useCustomTheme();
  return (
    <Box
      display='flex'
      width='100%'
      alignItems='center'
      justifyContent='center'
      bgcolor={theme.palette.backgroundColor}
    >
      <CircularProgress
        sx={{
          color: theme.palette.lightGreen,
        }}
      />
    </Box>
  );
};
export default GlobalLoader;
