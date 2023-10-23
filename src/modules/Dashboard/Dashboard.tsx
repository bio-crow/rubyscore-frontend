import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { SyntheticEvent, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import DashboardTabs from '@/components/common/ui/DashboardTabs/DashboardTabs';
import { DashboardTabIndexType } from '@/types/index';

const panelTabs: { index: DashboardTabIndexType; label: string }[] = [
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
  {
    index: 'scroll',
    label: 'Scroll',
  },
];
const Dashboard = () => {
  const theme = useCustomTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(panelTabs[0]);
  const handleChange = (event: SyntheticEvent, newValue: DashboardTabIndexType) => {
    const tab = panelTabs.find(item => item.index === newValue);
    tab && setActiveTab(tab);
  };
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          width: '100%',
          padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
        }}
      >
        <DashboardTabs
          value={activeTab.index}
          onChange={handleChange}
          variant={isMd ? 'fullWidth' : 'scrollable'}
        >
          {panelTabs.map(item => (
            <Tab key={item.index} label={item.label} {...a11yProps(item.index)} value={item.index} />
          ))}
        </DashboardTabs>
        <DashboardTab activeTab={activeTab} />
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
