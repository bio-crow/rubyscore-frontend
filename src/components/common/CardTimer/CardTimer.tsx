import { FC, useEffect } from 'react';
import { Box } from '@mui/system';
import { useTimer } from 'react-timer-hook';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const CardTimer = () => {
  const theme = useCustomTheme();
  const endOfDay = new Date();
  endOfDay.setUTCHours(23, 59, 59, 999);
  const expiryTimestamp = endOfDay.getTime();
  const config: any = {
    expiryTimestamp,
  };
  const { seconds, minutes, hours, start } = useTimer(config);
  useEffect(() => {
    start();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        borderRadius: '6px',
        background: theme.palette.backgroundColor,
        border: `1px solid ${theme.palette.white10}`,
        color: theme.palette.lightGreen,
      }}
      className='Body-Lato-fw-700-fs-14'
    >
      <Box>Ending in&nbsp;</Box>
      <Box>{hours < 10 ? '0' + hours : hours}</Box>
      <Box>:</Box>
      <Box>{minutes < 10 ? '0' + minutes : minutes}</Box>
      <Box>:</Box>
      <Box>{seconds < 10 ? '0' + seconds : seconds}</Box>
    </Box>
  );
};
export default CardTimer;
