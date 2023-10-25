import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useAppSelector } from '@/core/store';

const TransactionInfo = () => {
  const theme = useCustomTheme();
  const projectStatistics = useAppSelector(state => state.dashboardState.projectStatistics);
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
          {projectStatistics &&
            new Date(projectStatistics.first_transaction_time * 1000).toISOString().substring(0, 10)}
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
          {projectStatistics &&
            new Date(projectStatistics.last_transaction_time * 1000).toISOString().substring(0, 10)}
        </Box>
        <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
          Last transaction date
        </Box>
      </Box>
    </Box>
  );
};
export default TransactionInfo;
