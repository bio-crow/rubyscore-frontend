import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';
import { copyToClickBoard } from '@/utils/helpers';
import { useAppSelector } from '@/core/store';

export const ReferralUserCell = (params: GridRenderCellParams<any>) => {
  const theme = useCustomTheme();
  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  const copyValue = params.row.name || params.row.wallet;
  const maskedWallet =
    params.row.wallet && params.row.wallet.slice(0, 6) + '...' + params.row.wallet.slice(-6);
  const isYou = leaderboardUser && leaderboardUser.wallet === params.row.wallet;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Image src='/asserts/emptyUserIcon.svg' alt='icon' width='32' height='32' />
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
