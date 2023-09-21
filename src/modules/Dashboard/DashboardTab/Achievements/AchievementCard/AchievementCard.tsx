import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { IAchievementCard } from '@/types/index';
import pluralize from 'pluralize';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomLinearProgress from '@/components/common/ui/CustomLinearProgress/CustomLinearProgress';
interface Props {
  data: IAchievementCard;
}
const AchievementCard: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const [progress, setProgress] = useState(Math.round((data.amount / data.maxAmount) * 100));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'unset', sm: 'center' },
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
          flexDirection: 'column',
          padding: '10px 20px 10px 20px',
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          background: theme.palette.backgroundColor,
          minWidth: '190px',
        }}
      >
        <Box color={theme.palette.lightGreen} className='H1-Lato-fw-700-fs-32'>
          {`${data.amount} ${data.currency}`}
        </Box>
        <Box color={theme.palette.powderWhite} className='menu-Lato-fw-700-fs-12'>
          {data.description}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          flex: '1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box color={theme.palette.powderWhite} className='menu-Lato-fw-500-fs-14'>
            {`${data.amount} ${data.currency}`}
          </Box>
          <Box color={theme.palette.powderWhite} className='menu-Lato-fw-500-fs-14'>
            {`${data.maxAmount} ${data.currency}`}
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <CustomLinearProgress variant='determinate' value={progress} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box color={theme.palette.white50} className='menu-Lato-fw-500-fs-14'>
            {`${data.pointsAmount} ${pluralize('Point', data.pointsAmount)}`}
          </Box>
          <Box color={theme.palette.white50} className='menu-Lato-fw-500-fs-14'>
            {`${data.maxPoints} ${pluralize('Point', data.maxPoints)}`}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AchievementCard;
