import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import LeaderboardTab from '@/modules/Leaderboard/LeaderboardTab/LeaderboardTab';
import { SyntheticEvent, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import LeaderboardTabs from '@/components/common/ui/LeaderboardTabs/LeaderboardTabs';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getPrivateLeaderboardData, getPublicLeaderboardData } from '@/core/thunk/leaderboard.thunk';
type TabIndexType = 'rubyscore' | 'zk_era' | 'linea' | 'base' | 'zora' | 'zk_evm';
const panelTabs: { index: TabIndexType; label: string }[] = [
  {
    index: 'rubyscore',
    label: 'RubyScore',
  },
  {
    index: 'zk_era',
    label: 'ZkSync',
  },
  {
    index: 'linea',
    label: 'Linea',
  },
  {
    index: 'base',
    label: 'Base',
  },
  {
    index: 'zora',
    label: 'Zora',
  },
  {
    index: 'zk_evm',
    label: 'ZkEvm',
  },
];
const Dashboard = () => {
  const theme = useCustomTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<{ index: TabIndexType; label: string }>(panelTabs[0]);
  const shownLeaderBoard = useAppSelector(state => state.leaderboardState.shownLeaderBoard);
  const handleChange = (event: SyntheticEvent, newValue: TabIndexType) => {
    const tab = panelTabs.find(item => item.index === newValue);
    tab && setActiveTab(tab);
  };
  useEffect(() => {
    if (isAuth) {
      dispatch(getPrivateLeaderboardData(activeTab.index));
    } else {
      dispatch(getPublicLeaderboardData(activeTab.index));
    }
  }, [isAuth, activeTab]);
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          width: '100%',
        }}
      >
        <LeaderboardTabs
          value={activeTab.index}
          onChange={handleChange}
          variant={isMd ? 'fullWidth' : 'scrollable'}
        >
          {panelTabs.map(item => (
            <Tab key={item.index} label={item.label} {...a11yProps(item.index)} value={item.index} />
          ))}
        </LeaderboardTabs>
        <LeaderboardTab tableData={shownLeaderBoard} activeTab={activeTab} />
      </Box>
    </Layout>
  );
};
export default Dashboard;

function a11yProps(index: string) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
