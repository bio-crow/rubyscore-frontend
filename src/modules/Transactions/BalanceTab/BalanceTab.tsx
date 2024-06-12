import { Box } from '@mui/system';
import DepositSection from '@/modules/Transactions/BalanceTab/sections/DepositSection/DepositSection';
import BalanceSection from '@/modules/Transactions/BalanceTab/sections/BalanceSection/BalanceSection';
import SentSection from '@/modules/Transactions/BalanceTab/sections/SentSection/SentSection';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BalanceTab = () => {
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
      <SentSection />
    </Box>
  );
};
export default BalanceTab;
