import { Box } from '@mui/system';
import HistoryTable from '@/modules/Transactions/HistoryTab/HistoryTable/HistoryTable';
import { historyTableData } from '@/modules/Transactions/HistoryTab/HistoryTable/mokeHistoryData';

const HistoryTab = () => {
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
        <HistoryTable data={historyTableData} />
      </Box>
    </Box>
  );
};
export default HistoryTab;
