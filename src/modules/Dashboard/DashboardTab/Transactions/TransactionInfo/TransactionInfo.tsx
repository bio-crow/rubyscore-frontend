import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { FC, useEffect } from 'react';
import { getUserTransactionsDates } from '@/core/thunk/dashboard.thunk';
import { DashboardTabIndexType } from '@/types/index';
interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}
const TransactionInfo: FC<Props> = ({ activeTab }) => {
  const theme = useCustomTheme();
  const userTransactionsDates = useAppSelector(state => state.dashboardState.userTransactionsDates);
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
          {userTransactionsDates
            ? new Date(userTransactionsDates.first_transaction_time * 1000).toISOString().substring(0, 10)
            : 'No transactions'}
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
          {userTransactionsDates
            ? new Date(userTransactionsDates.last_transaction_time * 1000).toISOString().substring(0, 10)
            : 'No transactions'}
        </Box>
        <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
          Last transaction date
        </Box>
      </Box>
    </Box>
  );
};
export default TransactionInfo;
