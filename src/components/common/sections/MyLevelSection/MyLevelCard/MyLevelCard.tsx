import { Box } from '@mui/system';
import { DashboardTabIndexType, ILevelCard } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import pluralize from 'pluralize';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { claimLevel } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';
import { TooltipMyLevelCard } from '@/utils/tooltipsContent';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';

interface Props {
  data: ILevelCard;
  project: DashboardTabIndexType;
}

const MyLevelCard: FC<Props> = ({ data, project }) => {
  const theme = useCustomTheme();
  const levelLoading = useAppSelector(state => state.dashboardState.levelLoading);
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const claimCurrentLevel = () => {
    const params = {
      nftId: data.lvl.toString(),
      project: project,
      account: address,
    };
    dispatch(claimLevel(params));
  };
  const waitingPrefStyle = {
    color: `${theme.palette.powderWhite} !important`,
    cursor: 'pointer !important',
  };
  const claimedStyle = {
    background: `${theme.palette.lightGreen} !important`,
  };
  const style =
    (!data.isAvailable && data.isPefWaiting && waitingPrefStyle) || (data.isClaimed && claimedStyle) || {};
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        gap: '10px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.white10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          aspectRatio: '191/240',
          position: 'relative',
        }}
      >
        <Image src={data.icon} alt='icon' fill />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <Box color={theme.palette.powderWhite} className='Body-Lato-fw-700-fs-16' textAlign='center'>
          {`${data.lvl} Lvl`}
        </Box>
        <CustomTooltip title={!data.isAvailable && data.isPefWaiting ? <TooltipMyLevelCard /> : ''}>
          <Box>
            <PrimaryButton
              loading={levelLoading === data.lvl.toString()}
              variant='contained'
              size='small'
              sx={style}
              disabled={!data.isAvailable || data.isClaimed || data.isError || !data.isPefWaiting}
              onClick={claimCurrentLevel}
            >
              {data.isError ? (
                'Net err'
              ) : !data.isClaimed ? (
                'Claim'
              ) : (
                <Image src='/asserts/claimedIcon.svg' alt='icon' width={16} height={16} />
              )}
            </PrimaryButton>
          </Box>
        </CustomTooltip>
      </Box>
    </Box>
  );
};
export default MyLevelCard;
