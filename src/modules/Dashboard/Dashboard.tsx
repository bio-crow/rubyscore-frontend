'use client';
import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useEffect, useLayoutEffect, useState } from 'react';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import { DashboardTabIndexType } from '@/types/index';
import NetworkTabs from '@/components/common/ui/NetworkTabs/NetworkTabs';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getUserGradation, initDashboardTabsVotes } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';
import { dashboardPanelTabs } from '@/constants/index';
import { setUserGradation } from '@/core/state/dashboard.state';
import { useSearchParams, useRouter } from 'next/navigation';
import ShareModalWrapper from '@/components/common/ShareModal';
import { setShareModalState } from '@/core/state/shareModal.state';
const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const netTab = searchParams.get('net');
  const OGImage = searchParams.get('og_image');
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(
    dashboardPanelTabs[0]
  );
  const refCode = useAppSelector(state => state.userState.refCode);
  const shareModalConfig = useAppSelector(state => state.shareModalState);

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

  const handleClose = () => {
    dispatch(setShareModalState({ isOpen: false, type: null, social: null }));
  };
  return (
    <>
      {OGImage && (
        <>
          <meta
            property='og:image'
            content={`https://rubyscore.fra1.digitaloceanspaces.com/shares/${OGImage}.png`}
          />
          <meta
            property='og:url'
            content={`https://${window.location.origin}/dashboard?og_image=${OGImage}%26ref=${refCode}`}
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Rubyscore' />
          <meta property='og:description' content='Dashboard' />
          <meta
            property='og:image'
            content={`https://rubyscore.fra1.digitaloceanspaces.com/shares/${OGImage}.png`}
          />
          <meta name='twitter:card' content='summary_large_image' />
        </>
      )}
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
          {shareModalConfig.isOpen && (
            <ShareModalWrapper
              type={shareModalConfig.type}
              social={shareModalConfig.social}
              open={shareModalConfig.isOpen}
              onClose={handleClose}
              activeNetwork={activeTab.index}
            />
          )}
          <NetworkTabs
            networks={dashboardPanelTabs}
            activeTab={activeTab}
            setActiveTab={changeTab}
            withVote
            isTwoLine
          />
          <DashboardTab activeTab={activeTab} />
        </Box>
      </Layout>
    </>
  );
};
export default Dashboard;
