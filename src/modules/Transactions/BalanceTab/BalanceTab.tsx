import { Box } from '@mui/system';
import DepositSection from '@/modules/Transactions/BalanceTab/sections/DepositSection/DepositSection';
import BalanceSection from '@/modules/Transactions/BalanceTab/sections/BalanceSection/BalanceSection';
import SentSection from '@/modules/Transactions/BalanceTab/sections/SentSection/SentSection';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BalanceTab = () => {
  const [tableData, setTableData] = useState([
    {
      id: uuidv4(),
      address: 'test1',
      value: 'test2',
      commission: 'test3',
      network: 'test4',
      gas: 'test5',
      time: 'test6',
    },
  ]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
      }}
    >
      <DepositSection />
      <BalanceSection />
      <SentSection tableData={tableData} />
    </Box>
  );
};
export default BalanceTab;
