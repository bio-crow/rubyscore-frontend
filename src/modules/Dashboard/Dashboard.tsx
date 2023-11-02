import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useEffect, useState } from 'react';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import { DashboardTabIndexType } from '@/types/index';
import NetworkTabs from '@/components/common/ui/NetworkTabs/NetworkTabs';
import { useAppDispatch } from '@/core/store';
import { getUserGradation } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';

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
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(panelTabs[0]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (address) {
      const data = {
        wallet: `${address}`,
        projectName: activeTab.index,
      };
      dispatch(getUserGradation(data));
    }
  }, [activeTab.index, address]);
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
        <NetworkTabs networks={panelTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <DashboardTab activeTab={activeTab} />
      </Box>
    </Layout>
  );
};
export default Dashboard;
