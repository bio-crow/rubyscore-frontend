import { Box } from '@mui/system';
import { ILevelCard } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import pluralize from 'pluralize';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';

interface Props {
  data: ILevelCard;
}

const MyLevelCard: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        justifyContent: 'space-between',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.white10,
      }}
    >
      <Image src={data.icon} alt='icon' width={81} height={84} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Box color={theme.palette.powderWhite} className='Body-Lato-fw-700-fs-16'>
          {`${data.lvl} Lvl`}
        </Box>
        <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
          {`${data.points} ${pluralize('Point', data.points)}`}
        </Box>
        <PrimaryButton variant='contained' size='small' disabled={!data.isAvailable || data.isClaimed}>
          {!data.isClaimed ? (
            'Claim'
          ) : (
            <Image src='/asserts/claimedIcon.svg' alt='icon' width={16} height={16} />
          )}
        </PrimaryButton>
      </Box>
    </Box>
  );
};
export default MyLevelCard;
