import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';

export const ReferralUserCell = (params: GridRenderCellParams<any>) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Image src='/asserts/emptyUserIcon.svg' alt='icon' width='32' height='32' />
      <Box>{params.row.userName}</Box>
      <Box
        sx={{
          cursor: 'pointer',
          height: '24px',
        }}
      >
        <CopyIcon fill={theme.palette.white50} />
      </Box>
    </Box>
  );
};
