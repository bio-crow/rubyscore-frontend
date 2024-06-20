import { Box } from '@mui/system';
import HistoryTable from '@/modules/Transactions/HistoryTab/HistoryTable/HistoryTable';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';
import { getMultisendTransactionsHistory } from '@/core/thunk/deposit.thunk';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import DownloadIcon from '@/components/common/Icons/DownloadIcon';
import { downloadHistoryExcel } from '@/utils/helpers';

const HistoryTab = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const activeProject = useAppSelector(state => state.depositState.activeProject);
  const historyData = useAppSelector(state => state.depositState.historyData);
  useEffect(() => {
    dispatch(getMultisendTransactionsHistory({ project: activeProject }));
  }, [activeProject]);
  const exportHistory = () => {
    downloadHistoryExcel(historyData);
  };
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
          justifyContent: 'flex-end',
          gap: '20px',
        }}
      >
        <FourthButton
          className='green'
          startIcon={<DownloadIcon fill={theme.palette.lightGreen} />}
          variant='outlined'
          onClick={exportHistory}
          size='medium'
        >
          Export History
        </FourthButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          flex: '1',
        }}
      >
        <HistoryTable data={historyData} />
      </Box>
    </Box>
  );
};
export default HistoryTab;
