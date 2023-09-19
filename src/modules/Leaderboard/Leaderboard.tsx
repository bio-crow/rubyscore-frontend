import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import LeaderboardTab from '@/modules/Leaderboard/LeaderboardTab/LeaderboardTab';
import { SyntheticEvent, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import LeaderboardTabs from '@/components/common/ui/LeaderboardTabs/LeaderboardTabs';
type TabIndexType = 0 | 1 | 2 | 3 | 4 | 5;
const panelTabs = [
  {
    index: 0,
    label: 'RubyScore',
  },
  {
    index: 1,
    label: 'ZkSync',
  },
  {
    index: 2,
    label: 'Linea',
  },
  {
    index: 3,
    label: 'Base',
  },
  {
    index: 4,
    label: 'Zora',
  },
  {
    index: 5,
    label: 'ZkEvm',
  },
];
const Dashboard = () => {
  const theme = useCustomTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [activeTabIndex, setActiveTabIndex] = useState<TabIndexType>(0);
  const handleChange = (event: SyntheticEvent, newValue: TabIndexType) => {
    setActiveTabIndex(newValue);
  };
  const leaderboardTabs = {
    0: <LeaderboardTab title='RubyScore' />,
    1: <LeaderboardTab title='ZkSync' />,
    2: <LeaderboardTab title='Linea' />,
    3: <LeaderboardTab title='Base' />,
    4: <LeaderboardTab title='Zora' />,
    5: <LeaderboardTab title='ZkEvm' />,
  };
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
        }}
      >
        <LeaderboardTabs
          value={activeTabIndex}
          onChange={handleChange}
          variant={isMd ? 'fullWidth' : 'scrollable'}
        >
          {panelTabs.map(item => (
            <Tab key={item.label} label={item.label} {...a11yProps(item.index)} />
          ))}
        </LeaderboardTabs>
        {leaderboardTabs[activeTabIndex]}
      </Box>
    </Layout>
  );
};
export default Dashboard;

function a11yProps(index: number) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
