import { Box } from '@mui/system';
import TransactionInfo from '@/modules/Dashboard/DashboardTab/Transactions/TransactionInfo/TransactionInfo';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SyntheticEvent, useState } from 'react';
import TransactionChart from '@/modules/Dashboard/DashboardTab/Transactions/TransactionChart/TransactionChart';
import { Tab } from '@mui/material';
import ChartTabs from '@/components/common/ui/ChartTabs/ChartTabs';
type TabIndexType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
const panelTabs = [
  {
    index: 0,
    label: 'On-chain transactions',
  },
  {
    index: 1,
    label: 'On-chain contracts',
  },
  {
    index: 2,
    label: 'Days on chain',
  },
  {
    index: 3,
    label: 'Weeks on chain',
  },
  {
    index: 4,
    label: 'Month on chain',
  },
  {
    index: 5,
    label: 'Balance',
  },
  {
    index: 6,
    label: 'Gas spent',
  },
  {
    index: 7,
    label: 'On-chain volume',
  },
];
const Transactions = () => {
  const theme = useCustomTheme();
  const isXLg = useMediaQuery(theme.breakpoints.up('xlg'));
  const [activeTabIndex, setActiveTabIndex] = useState<TabIndexType>(0);
  const handleChange = (event: SyntheticEvent, newValue: TabIndexType) => {
    setActiveTabIndex(newValue);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <TransactionInfo />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          padding: { xs: '0px', lg: '20px' },
          borderRadius: { xs: 'unset', lg: '10px' },
          border: { xs: 'none', lg: `1px solid ${theme.palette.white10}` },
          background: { xs: 'transparent', lg: theme.palette.black },
        }}
      >
        <ChartTabs
          value={activeTabIndex}
          onChange={handleChange}
          variant={isXLg ? 'fullWidth' : 'scrollable'}
        >
          {panelTabs.map(item => (
            <Tab key={item.label} label={item.label} {...a11yProps(item.index)} />
          ))}
        </ChartTabs>
        <TransactionChart index={activeTabIndex} />
      </Box>
    </Box>
  );
};
export default Transactions;

function a11yProps(index: number) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
