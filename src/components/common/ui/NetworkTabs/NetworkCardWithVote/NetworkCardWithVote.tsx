import Image from 'next/image';
import { FC } from 'react';
import { Box } from '@mui/system';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { networkStaticData } from '@/constants/index';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { TooltipVoteTab } from '@/utils/tooltipsContent';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { updateDashboardTabsVotesItem } from '@/core/thunk/dashboard.thunk';
import { DashboardTabIndexType } from '@/types/index';

interface Props {
  network: { label: string; index: DashboardTabIndexType };
  activeTab: { index: DashboardTabIndexType; label: string };
  setActiveTab: Function;
}

const NetworkCardWithVote: FC<Props> = ({ network, activeTab, setActiveTab }) => {
  const theme = useCustomTheme();
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const userLevelsInfo = useAppSelector(state => state.userState.userLevelsInfo);
  const dashboardTabsVoteInfo = useAppSelector(state => state.dashboardState.dashboardTabsVoteInfo);
  const dashboardTabsVoteInfoLoading = useAppSelector(
    state => state.dashboardState.dashboardTabsVoteInfoLoading
  );
  // 2 in case if levelStatus is undefined from mapMayLevelDataFromResult which using wagmiLevels connected to networks
  // levelStatus: levelStatus || [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  let isNetworkAvailable: boolean = false;
  if (dashboardTabsVoteInfo[network.index].is_ok) {
    // info loading case
    if (userLevelsInfo == null) {
      isNetworkAvailable = true;
    } else if (userLevelsInfo) {
      isNetworkAvailable = userLevelsInfo[network.index][0] !== 2;
    }
  }
  const dispatch = useAppDispatch();
  const vote = (e: any) => {
    e.stopPropagation();
    if (isAuth) {
      dispatch(
        updateDashboardTabsVotesItem({
          projectName: network.index,
          wallet: address,
        })
      );
    }
  };
  return (
    <CustomTooltip
      title={isAuth && !isNetworkAvailable && <TooltipVoteTab />}
      disableFocusListener={!isNetworkAvailable}
      disableHoverListener={!isNetworkAvailable}
      disableTouchListener={!isNetworkAvailable}
    >
      <Box
        sx={{
          borderRadius: '10px 30px 10px 10px',
          border: `1px solid ${
            network.index === activeTab.index
              ? !isNetworkAvailable
                ? theme.palette.red
                : theme.palette.lightGreen
              : theme.palette.white10
          }`,
          background: theme.palette.black,
          display: 'flex',
          gap: '6px',
          padding: '0 13px 6px 10px',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        onClick={() => setActiveTab(network)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 0px 10px 10px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='Body-Lato-fw-600-fs-24'
          >
            {network.label}
          </Box>
          <Box marginRight='-3px' height='40px' padding='0'>
            <Image src={networkStaticData[network.index].icon} alt='icon' width='40' height='40' />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            margin: '0px 10px 0px 10px',
            height: '1px',
            width: 'calc(100% - 20px)',
            background: theme.palette.gray,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '6px 10px 6px 10px',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <SecondaryButton
              variant='contained'
              size='small'
              loading={dashboardTabsVoteInfoLoading === network.index}
              disabled={!isNetworkAvailable}
              onClick={e => {
                isNetworkAvailable && vote(e);
                openConnectModal && openConnectModal();
              }}
            >
              Vote
            </SecondaryButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Image src='/asserts/progress.svg' alt='icon' width='17' height='16' />
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
              className='Body-Lato-fw-700-fs-14'
            >
              {dashboardTabsVoteInfo[network.index].count !== null
                ? dashboardTabsVoteInfo[network.index].count
                : '-'}
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomTooltip>
  );
};
export default NetworkCardWithVote;
