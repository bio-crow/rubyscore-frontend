import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import DepositTable from '@/modules/Transactions/DepositTab/DepositTable/DepositTable';
import { useEffect } from 'react';
import { getDepositsHistory } from '@/core/thunk/deposit.thunk';

const DepositTab = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const activeProject = useAppSelector(state => state.depositState.activeProject);
  useEffect(() => {
    dispatch(getDepositsHistory({ project: activeProject }));
  }, [activeProject]);
  const historyData = useAppSelector(state => state.depositState.depositsHistoryData);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flex: '1',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          flex: '1',
        }}
      >
        <DepositTable data={historyData} />
      </Box>
    </Box>
  );
};
export default DepositTab;
