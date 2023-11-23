import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { IAchievementCard } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomLinearProgress from '@/components/common/ui/CustomLinearProgress/CustomLinearProgress';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
interface Props {
  data: IAchievementCard;
}
const AchievementCard: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const [progress, setProgress] = useState(100 - data.top);
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
          minWidth: '210px',
        }}
      >
        <Box color={theme.palette.lightGreen} className='H1-Lato-fw-700-fs-32'>
          {`${data.value} ${data.currency}`}
        </Box>
        <Box
          sx={{
            color: theme.palette.powderWhite,
            display: 'flex',
            alignItems: 'center',
            minHeight: '32px',
          }}
          className='menu-Lato-fw-700-fs-12'
        >
          {data.label}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
            className='Body-Lato-fw-700-fs-18'
          >
            <Box
              sx={{
                color: theme.palette.lightGreen,
              }}
            >
              {data.top.toFixed(3)}%
            </Box>
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
            >
              TOP
            </Box>
          </Box>
          {data.ToolTip && (
            <CustomTooltip title={data.ToolTip}>
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
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <CustomLinearProgress variant='determinate' value={progress} />
        </Box>
      </Box>
    </Box>
  );
};
export default AchievementCard;
