import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { SyntheticEvent, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import DashboardTabs from '@/components/common/ui/DashboardTabs/DashboardTabs';
type TabIndexType = 0 | 1 | 2 | 3 | 4;
const panelTabs = [
  {
    index: 0,
    label: 'ZkSync',
  },
  {
    index: 1,
    label: 'Linea',
  },
  {
    index: 2,
    label: 'Base',
  },
  {
    index: 3,
    label: 'Zora',
  },
  {
    index: 4,
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
  const dashboardTabs = {
    0: <DashboardTab title='RubyScore' />,
    1: <DashboardTab title='ZkSync' />,
    2: <DashboardTab title='Linea' />,
    3: <DashboardTab title='Base' />,
    4: <DashboardTab title='Zora' />,
    5: <DashboardTab title='ZkEvm' />,
  };
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
        <DashboardTabs
          value={activeTabIndex}
          onChange={handleChange}
          variant={isMd ? 'fullWidth' : 'scrollable'}
        >
          {panelTabs.map(item => (
            <Tab key={item.label} label={item.label} {...a11yProps(item.index)} />
          ))}
        </DashboardTabs>
        {dashboardTabs[activeTabIndex]}
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
