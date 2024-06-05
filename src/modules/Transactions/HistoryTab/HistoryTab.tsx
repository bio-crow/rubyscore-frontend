import { Box } from '@mui/system';
import HistoryTable from '@/modules/Transactions/HistoryTab/HistoryTable/HistoryTable';
import { historyTableData } from '@/modules/Transactions/HistoryTab/HistoryTable/mokeHistoryData';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';
import { getMultisendTransactionsHistory } from '@/core/thunk/deposit.thunk';

const HistoryTab = () => {
  const dispatch = useAppDispatch();
  const historyData = useAppSelector(state => state.depositState.historyData);
  useEffect(() => {
    dispatch(getMultisendTransactionsHistory());
  }, []);
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
          maxWidth: '1100px',
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
