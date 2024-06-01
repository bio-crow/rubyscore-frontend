import { GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';
import { copyToClickBoard } from '@/utils/helpers';
import { useAppSelector } from '@/core/store';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { GasHeaderTooltip, TimeHeaderTooltip } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import { networkStaticData } from '@/constants/index';

export const ReferralUserCell = (params: GridRenderCellParams<any>) => {
  const theme = useCustomTheme();
  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  const copyValue = params.row.wallet;
  const maskedWallet =
    params.row.wallet && params.row.wallet.slice(0, 6) + '...' + params.row.wallet.slice(-6);
  const isYou = leaderboardUser && leaderboardUser.profile.wallet === params.row.wallet;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Image
        src={params.row.isPremium ? '/asserts/PremiumAvatar.svg' : '/asserts/FreeAvatar.svg'}
        alt='icon'
        width='32'
        height='32'
        style={{
          borderRadius: '5px',
        }}
      />
      {isYou ? (
        <Box>You</Box>
      ) : (
        <>
          <Box>{params.row.name || maskedWallet}</Box>
          <Box
            sx={{
              cursor: 'pointer',
              height: '24px',
            }}
          >
            <Box
              height='24px'
              onClick={e => {
                e.stopPropagation();
                copyToClickBoard(copyValue);
              }}
            >
              <CopyIcon fill={theme.palette.white50} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
export const NetworkCell = (params: GridRenderCellParams<any>) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <Image src={networkStaticData['zk_evm'].icon} alt='icon' width='24' height='24' />
      <Box>{params.row.network}</Box>
    </Box>
  );
};

export const TimeHeader = (params: GridColumnHeaderParams) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: theme.palette.white50,
      }}
    >
      <Box>Time</Box>
      <CustomTooltip title={<TimeHeaderTooltip />}>
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InfoIcon fill={theme.palette.white50} />
        </Box>
      </CustomTooltip>
    </Box>
  );
};

export const GasHeader = (params: GridColumnHeaderParams) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: theme.palette.white50,
      }}
    >
      <Box>Gas l1 (ETH)</Box>
      <CustomTooltip title={<GasHeaderTooltip />}>
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InfoIcon fill={theme.palette.white50} />
        </Box>
      </CustomTooltip>
    </Box>
  );
};

export const InputTableCell = (params: GridRenderCellParams<any>) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CustomInput value={params.value} sx={{ flex: 1 }} size='medium' variant='outlined' />
    </Box>
  );
};
