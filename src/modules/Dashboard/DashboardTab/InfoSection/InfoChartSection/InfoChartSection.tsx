import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { InfoChartIndexType, DashboardTabIndexType, ChartIndexType } from '@/types/index';
import ChartTabs from '@/components/common/ui/ChartTabs/ChartTabs';
import { Tab } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDashboardChartData, getDashboardInfoChartData } from '@/core/thunk/dashboard.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import InfoChart from '@/modules/Dashboard/DashboardTab/InfoSection/InfoChartSection/InfoChart/InfoChart';
import { axisInfoChartLabelMap } from '@/constants/index';
const panelTabs: { index: InfoChartIndexType; label: string }[] = [
  {
    index: 'activeUser',
    label: 'Active users in the network',
  },
  {
    index: 'transactions',
    label: 'Transactions in the network',
  },
  {
    index: 'tvl',
    label: 'Total Value Locked',
  },
  {
    index: 'transactionsBridge',
    label: 'Total Users',
  },
  {
    index: 'volume',
    label: 'Transaction volume',
  },
];
interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}
const today = new Date();
const twoYearsAdo = new Date();
twoYearsAdo.setFullYear(twoYearsAdo.getFullYear() - 1);
const InfoChartSection: FC<Props> = ({ activeTab }) => {
  const theme = useCustomTheme();
  const isXLg = useMediaQuery(theme.breakpoints.up('xlg'));
  const infoChartLoading = useAppSelector(state => state.dashboardState.infoChartLoading);
  const infoChartData = useAppSelector(state => state.dashboardState.infoChartData);
  const [interval, setInterval] = useState([twoYearsAdo.getTime(), today.getTime()]);
  const dispatch = useAppDispatch();
  const [activeChartTab, setActiveChartTab] = useState<{ index: InfoChartIndexType; label: string }>(
    panelTabs[0]
  );
  const handleChange = (event: SyntheticEvent, newValue: InfoChartIndexType) => {
    const tab = panelTabs.find(item => item.index === newValue);
    tab && setActiveChartTab(tab);
  };
  useEffect(() => {
    dispatch(
      getDashboardInfoChartData({
        projectName: activeTab.index,
        type: activeChartTab.index,
        interval: interval,
      })
    );
  }, [activeTab, activeChartTab]);
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
          flexDirection: 'column',
          gap: '40px',
          padding: { xs: '0px', lg: '25px' },
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
        <InfoChart
          data={infoChartData}
          axisLabel={axisInfoChartLabelMap[activeChartTab.index]}
          loading={infoChartLoading}
        />
      </Box>
    </Box>
  );
};
export default InfoChartSection;
function a11yProps(index: string) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
