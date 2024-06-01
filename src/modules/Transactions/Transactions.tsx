import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { SyntheticEvent, useState } from 'react';
import { ChartIndexType } from '@/types/index';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChartTabs from '@/components/common/ui/ChartTabs/ChartTabs';

import BalanceTab from '@/modules/Transactions/BalanceTab/BalanceTab';
import InProgressTab from '@/modules/Transactions/InProgressTab/InProgressTab';
import HistoryTab from '@/modules/Transactions/HistoryTab/HistoryTab';
import RefferalsTab from '@/modules/Transactions/RefferalsTab/RefferalsTab';
import { useAppSelector } from '@/core/store';
import PrivatePageLayout from '@/components/layout/PrivatePageLayout/PrivatePageLayout';
type TransactionsTabType = 'balance' | 'inProgress' | 'history' | 'refferals';
const panelTabs: { index: TransactionsTabType; label: string }[] = [
  {
    index: 'balance',
    label: 'Balance and Sent',
  },
  {
    index: 'inProgress',
    label: 'In Progress',
  },
  {
    index: 'history',
    label: 'History',
  },
  {
    index: 'refferals',
    label: 'Refferals',
  },
];
const Transactions = () => {
  const theme = useCustomTheme();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const isXLg = useMediaQuery(theme.breakpoints.up('xlg'));
  const [activeTab, setActiveTab] = useState<{ index: TransactionsTabType; label: string }>(panelTabs[0]);
  const handleChange = (event: SyntheticEvent, newValue: ChartIndexType) => {
    const tab = panelTabs.find(item => item.index === newValue);
    tab && setActiveTab(tab);
  };
  const transactionTabs = {
    balance: <BalanceTab />,
    inProgress: <InProgressTab />,
    history: <HistoryTab />,
    refferals: <RefferalsTab />,
  };
  return (
    <Layout>
      {isAuth ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            width: '100%',
            padding: '20px 32px 40px 32px',
            borderRadius: '10px',
            border: `1px solid ${theme.palette.white10}`,
            background: theme.palette.black,
          }}
        >
          <ChartTabs
            value={activeTab.index}
            onChange={handleChange}
            variant={isXLg ? 'fullWidth' : 'scrollable'}
          >
            {panelTabs.map(item => (
              <Tab key={item.index} label={item.label} {...a11yProps(item.index)} value={item.index} />
            ))}
          </ChartTabs>
          {transactionTabs[activeTab.index]}
        </Box>
      ) : (
        <PrivatePageLayout />
      )}
    </Layout>
  );
};

export default Transactions;

function a11yProps(index: string) {
  return {
    id: `transactions-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
