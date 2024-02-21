'use client';
import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useEffect, useLayoutEffect, useState } from 'react';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import { DashboardTabIndexType } from '@/types/index';
import NetworkTabs from '@/components/common/ui/NetworkTabs/NetworkTabs';
import { useAppDispatch } from '@/core/store';
import { getUserGradation, initDashboardTabsVotes } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';
import { dashboardPanelTabs } from '@/constants/index';
import { setUserGradation } from '@/core/state/dashboard.state';
import { useSearchParams, useRouter } from 'next/navigation';
const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const netTab = searchParams.get('net');
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(
    dashboardPanelTabs[0]
  );
  const changeTab = (tab: any) => {
    router.push(`?net=${tab.index}`);
    setActiveTab(tab);
  };
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    if (address) {
      const data = {
        wallet: `${address}`,
        projectName: activeTab.index,
      };
      dispatch(getUserGradation(data));
    } else {
      dispatch(setUserGradation(null));
    }
  }, [activeTab.index, address]);
  useEffect(() => {
    dispatch(initDashboardTabsVotes());
  }, []);
  useEffect(() => {
    if (netTab) {
      const tab = dashboardPanelTabs.find(item => item.index === netTab);
      tab && setActiveTab(tab);
    }
  }, [netTab]);
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
        <NetworkTabs networks={dashboardPanelTabs} activeTab={activeTab} setActiveTab={changeTab} withVote />
        <DashboardTab activeTab={activeTab} />
      </Box>
    </Layout>
  );
};
export default Dashboard;
