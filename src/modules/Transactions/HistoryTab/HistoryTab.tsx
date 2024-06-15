import { Box } from '@mui/system';
import HistoryTable from '@/modules/Transactions/HistoryTab/HistoryTable/HistoryTable';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';
import { getMultisendTransactionsHistory } from '@/core/thunk/deposit.thunk';

const HistoryTab = () => {
  const dispatch = useAppDispatch();
  const activeProject = useAppSelector(state => state.depositState.activeProject);
  const historyData = useAppSelector(state => state.depositState.historyData);
  useEffect(() => {
    dispatch(getMultisendTransactionsHistory({ project: activeProject }));
  }, [activeProject]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}
      >
        <HistoryTable data={historyData} />
      </Box>
    </Box>
  );
};
export default HistoryTab;
