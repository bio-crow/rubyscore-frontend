import { Box } from '@mui/system';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';
import Image from 'next/image';
import { networkStaticData } from '@/constants/index';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { TooltipVoteBtn } from '@/utils/tooltipsContent';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { updateDashboardTabsVotesItem } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';

interface Props {
  network: { label: string; index: DashboardTabIndexType };
  activeTab: { index: DashboardTabIndexType; label: string };
  setActiveTab: Function;
}

const NetworkCardWithVote: FC<Props> = ({ network, activeTab, setActiveTab }) => {
  const theme = useCustomTheme();
  const { address } = useAccount();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const dashboardTabsVoteInfo = useAppSelector(state => state.dashboardState.dashboardTabsVoteInfo);
  const dashboardTabsVoteInfoLoading = useAppSelector(
    state => state.dashboardState.dashboardTabsVoteInfoLoading
  );
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
    <Box
      sx={{
        borderRadius: '10px 30px 10px 10px',
        border: `1px solid ${
          network.index === activeTab.index ? theme.palette.lightGreen : theme.palette.white10
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
          <CustomTooltip
            title={<TooltipVoteBtn isAuth={isAuth} />}
            controlled={!isAuth}
            disableFocusListener={!isAuth}
            disableHoverListener={!isAuth}
            disableTouchListener={!isAuth}
          >
            <SecondaryButton
              variant='contained'
              size='small'
              loading={dashboardTabsVoteInfoLoading === network.index}
              onClick={vote}
            >
              Vote
            </SecondaryButton>
          </CustomTooltip>
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
            {dashboardTabsVoteInfo[network.index] !== null ? dashboardTabsVoteInfo[network.index] : '-'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default NetworkCardWithVote;
