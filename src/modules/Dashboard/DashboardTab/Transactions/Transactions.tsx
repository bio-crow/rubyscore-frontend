import { Box } from '@mui/system';
import TransactionInfo from '@/modules/Dashboard/DashboardTab/Transactions/TransactionInfo/TransactionInfo';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import TransactionChart from '@/modules/Dashboard/DashboardTab/Transactions/TransactionChart/TransactionChart';
import { Tab } from '@mui/material';
import ChartTabs from '@/components/common/ui/ChartTabs/ChartTabs';
import { ChartIndexType, DashboardTabIndexType } from '@/types/index';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getDashboardChartData } from '@/core/thunk/dashboard.thunk';
const panelTabs: { index: ChartIndexType; label: string }[] = [
  {
    index: 'transactions',
    label: 'On-chain transactions',
  },
  {
    index: 'contracts',
    label: 'On-chain contracts',
  },
  {
    index: 'days',
    label: 'Days on chain',
  },
  {
    index: 'weeks',
    label: 'Weeks on chain',
  },
  {
    index: 'months',
    label: 'Month on chain',
  },
  {
    index: 'gas',
    label: 'Gas spent',
  },
  {
    index: 'volume',
    label: 'On-chain volume',
  },
  {
    index: 'balance',
    label: 'Balance',
  },
];
interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}
const Transactions: FC<Props> = ({ activeTab }) => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.dashboardState.loading);
  const chartData = useAppSelector(state => state.dashboardState.chartData);
  const isXLg = useMediaQuery(theme.breakpoints.up('xlg'));
  const [activeChartTab, setActiveChartTab] = useState<{ index: ChartIndexType; label: string }>(
    panelTabs[0]
  );
  const handleChange = (event: SyntheticEvent, newValue: ChartIndexType) => {
    const tab = panelTabs.find(item => item.index === newValue);
    tab && setActiveChartTab(tab);
  };
  useEffect(() => {
    dispatch(getDashboardChartData({ projectName: 'linea', type: activeChartTab.index }));
  }, [activeTab, activeChartTab]);
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
          value={activeChartTab.index}
          onChange={handleChange}
          variant={isXLg ? 'fullWidth' : 'scrollable'}
        >
          {panelTabs.map(item => (
            <Tab key={item.index} label={item.label} {...a11yProps(item.index)} value={item.index} />
          ))}
        </ChartTabs>
        <TransactionChart data={chartData} loading={loading} />
      </Box>
    </Box>
  );
};
export default Transactions;

function a11yProps(index: string) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
