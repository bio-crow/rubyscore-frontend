import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useEffect, useLayoutEffect, useState } from 'react';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import { DashboardTabIndexType } from '@/types/index';
import NetworkTabs from '@/components/common/ui/NetworkTabs/NetworkTabs';
import { useAppDispatch } from '@/core/store';
import { getUserGradation } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';
import { dashboardPanelTabs } from '@/constants/index';

const Dashboard = () => {
  const theme = useCustomTheme();
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(
    dashboardPanelTabs[0]
  );
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
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
        <NetworkTabs networks={dashboardPanelTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <DashboardTab activeTab={activeTab} />
      </Box>
    </Layout>
  );
};
export default Dashboard;
