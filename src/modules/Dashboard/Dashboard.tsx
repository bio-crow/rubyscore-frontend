'use client';
import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
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
  const refCode = searchParams.get('ref');
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<{ index: DashboardTabIndexType; label: string }>(
    dashboardPanelTabs[0]
  );
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
      {OGImage && refCode && (
        <>
          <meta key='og:type' property='og:type' content='website' />
          <meta key='og:description' property='og:description' content='Rubyscore' />
          <meta key='og:title' property='og:title' content='Rubyscore' />
          <meta
            key='og:image'
            property='og:image'
            content={`https://rubyscore.fra1.digitaloceanspaces.com/shares/${OGImage}.png`}
          />
          <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
          <meta key='twitter:description' property='twitter:description' content='Rubyscore' />
          <meta key='twitter:title' property='twitter:title' content='Rubyscore' />
          <meta
            key='twitter:image'
            name='twitter:image'
            content={`https://rubyscore.fra1.digitaloceanspaces.com/shares/${OGImage}.png`}
          />
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
