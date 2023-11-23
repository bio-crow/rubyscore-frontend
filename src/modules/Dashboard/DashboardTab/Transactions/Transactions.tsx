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
import { getDashboardChartData, getUserTransactionsDates } from '@/core/thunk/dashboard.thunk';
import { axisLabelMap } from '@/constants/index';
const panelTabs: { index: ChartIndexType; label: string }[] = [
  {
    index: 'transactions',
    label: 'Transactions',
  },
  {
    index: 'contracts',
    label: 'Unique contracts',
  },
  {
    index: 'days',
    label: 'Unique days',
  },
  {
    index: 'weeks',
    label: 'Unique weeks',
  },
  {
    index: 'months',
    label: 'Unique months',
  },
  {
    index: 'gas',
    label: 'Gas spent',
  },
  {
    index: 'volume',
    label: 'Volume',
  },
  {
    index: 'balance',
    label: 'Amount on balance',
  },
];
interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}
const Transactions: FC<Props> = ({ activeTab }) => {
  const theme = useCustomTheme();
  const userTransactionsDates = useAppSelector(state => state.dashboardState.userTransactionsDates);
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.dashboardState.loading);
  const chartData = useAppSelector(state => state.dashboardState.chartData);
  const isXLg = useMediaQuery(theme.breakpoints.up('xlg'));
  const [activeChartTab, setActiveChartTab] = useState<{ index: ChartIndexType; label: string }>(
    panelTabs[0]
  );
  const showTransactionsInfo =
    userTransactionsDates &&
    !!userTransactionsDates.first_transaction_time &&
    !!userTransactionsDates.last_transaction_time;
  const handleChange = (event: SyntheticEvent, newValue: ChartIndexType) => {
    const tab = panelTabs.find(item => item.index === newValue);
    tab && setActiveChartTab(tab);
  };
  useEffect(() => {
    dispatch(getDashboardChartData({ projectName: activeTab.index, type: activeChartTab.index }));
  }, [activeTab, activeChartTab]);
  useEffect(() => {
    if (isAuth) {
      const data = {
        projectName: activeTab.index,
      };
      dispatch(getUserTransactionsDates(data));
    }
  }, [isAuth, activeTab.index]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {isAuth && showTransactionsInfo && <TransactionInfo activeTab={activeTab} />}
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
        <TransactionChart data={chartData} loading={loading} axisLabel={axisLabelMap[activeChartTab.index]} />
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
