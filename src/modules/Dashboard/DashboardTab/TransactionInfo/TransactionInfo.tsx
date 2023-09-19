import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const TransactionInfo = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 20px 16px 20px',
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          flex: '1',
          background: theme.palette.black,
        }}
      >
        <Box color={theme.palette.powderWhite} className='Body-Lato-fw-700-fs-18'>
          21-04-2022
        </Box>
        <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
          First transaction date
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 20px 16px 20px',
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          flex: '1',
          background: theme.palette.black,
        }}
      >
        <Box color={theme.palette.powderWhite} className='Body-Lato-fw-700-fs-18'>
          16-05-2023
        </Box>
        <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
          Last transaction date
        </Box>
      </Box>
    </Box>
  );
};
export default TransactionInfo;
