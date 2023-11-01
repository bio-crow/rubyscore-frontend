import { Box } from '@mui/system';
import { FC } from 'react';
import { IDailyActivityCard } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import Image from 'next/image';

interface Props {
  activity: IDailyActivityCard;
}

const DailyActivityCard: FC<Props> = ({ activity }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flewWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            borderRadius: '20px',
            padding: '0px 10px 0px 10px',
            border: `1px solid ${theme.palette.white10}`,
            background: theme.palette.white10,
          }}
        >
          <Image src={activity.net.icon} alt='icon' width='16' height='16' />
          <Box className='Body-Lato-fw-500-fs-12-h-24' color={theme.palette.powderWhite}>
            {activity.net.title}
          </Box>
        </Box>
        {activity.badges.map(item => (
          <Box
            key={item}
            sx={{
              color: theme.palette.lightGreen,
              borderRadius: '16px',
              border: `1px solid ${theme.palette.lightGreen}`,
              padding: '4px 12px 4px 12px',
            }}
            className='Body-Lato-fw-500-fs-10'
          >
            {item}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          color: theme.palette.powderWhite,
        }}
        className='Body-Lato-fw-600-fs-24'
      >
        {activity.description}
      </Box>
      <PrimaryButton variant='contained' size='large' fullWidth>
        Get
      </PrimaryButton>
    </Box>
  );
};
export default DailyActivityCard;
