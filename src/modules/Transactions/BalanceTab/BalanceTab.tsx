import { Box } from '@mui/system';
import DepositSection from '@/modules/Transactions/BalanceTab/sections/DepositSection/DepositSection';
import BalanceSection from '@/modules/Transactions/BalanceTab/sections/BalanceSection/BalanceSection';
import SentSection from '@/modules/Transactions/BalanceTab/sections/SentSection/SentSection';
import { useState } from 'react';

const BalanceTab = () => {
  const [tableData, setTableData] = useState([]);
  const addToTable = data => {
    const newData = [...tableData];
    newData.push(data);
    setTableData(newData);
  };
  const removeFromTable = params => {
    const newData = [...tableData].filter(item => item.id !== params.row.id);
    setTableData(newData);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
      }}
    >
      <DepositSection addToTable={addToTable} />
      <BalanceSection />
      <SentSection tableData={tableData} removeFromTable={removeFromTable} />
    </Box>
  );
};
export default BalanceTab;
