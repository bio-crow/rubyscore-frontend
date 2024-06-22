import Layout from '@/components/layout/Layout/Layout';
import { Box, Tab } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import LeaderboardTab from '@/modules/Leaderboard/LeaderboardTab/LeaderboardTab';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/core/store';
import {
  getFilteredUser,
  getPrivateLeaderboardData,
  getPublicLeaderboardData,
} from '@/core/thunk/leaderboard.thunk';
import NetworkTabs from '@/components/common/ui/NetworkTabs/NetworkTabs';
import { DashboardTabIndexType } from '@/types/index';
import { setFilteredUser } from '@/core/state/leaderboard.state';
import { dashboardPanelTabs } from '@/constants/index';
import { useRouter, useSearchParams } from 'next/navigation';
import { initDashboardTabsVotes } from '@/core/thunk/dashboard.thunk';
const Dashboard = () => {
  const theme = useCustomTheme();
  const searchParams = useSearchParams();
  const router = useRouter();
  const netTab = searchParams.get('net');
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(
    dashboardPanelTabs.find(item => item.index === netTab) || dashboardPanelTabs[0]
  );
  const shownLeaderBoard = useAppSelector(state => state.leaderboardState.shownLeaderBoard);
  const filteredUser = useAppSelector(state => state.leaderboardState.filteredUser);
  useEffect(() => {
    if (isAuth) {
      dispatch(getPrivateLeaderboardData(activeTab.index));
    } else {
      dispatch(getPublicLeaderboardData(activeTab.index));
    }
    if (filteredUser) {
      const data = {
        wallet: filteredUser.wallet,
        project: activeTab.index,
      };
      dispatch(getFilteredUser(data));
    }
    return () => {
      dispatch(setFilteredUser(null));
    };
  }, [isAuth, activeTab]);
  const changeTab = (tab: any) => {
    router.push(`?net=${tab.index}`);
    setActiveTab(tab);
  };
  useEffect(() => {
    if (netTab) {
      const tab = dashboardPanelTabs.find(item => item.index === netTab);
      tab && setActiveTab(tab);
    }
  }, [netTab]);
  useEffect(() => {
    dispatch(initDashboardTabsVotes());
  }, []);
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
        <NetworkTabs
          networks={dashboardPanelTabs}
          activeTab={activeTab}
          setActiveTab={changeTab}
          withVote
          isTwoLine
        />
        <LeaderboardTab tableData={filteredUser ? [filteredUser] : shownLeaderBoard} activeTab={activeTab} />
      </Box>
    </Layout>
  );
};
export default Dashboard;
