import { Box } from '@mui/system';
import { FC } from 'react';
import CustomLinearProgress from '@/components/common/ui/CustomLinearProgress/CustomLinearProgress';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';

interface Props {
  steps: { day: number; points: number; percent: number }[];
  currentDay: number;
}

const CustomStepper: FC<Props> = ({ currentDay, steps }) => {
  const theme = useCustomTheme();
  let progress;
  if (currentDay < 15) {
    progress = Math.round((currentDay / steps[2].day) * 100);
  } else {
    progress = Math.round(33 + ((10 - (steps[2].day - currentDay)) / 10) * 67);
  }
  return (
    <Box
      sx={{
        width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 50px)' },
        position: 'relative',
      }}
    >
      <CustomLinearProgress variant='determinate' value={progress} />
      {steps.map((step, index) => (
        <Box
          key={step.day + step.points}
          sx={{
            width: '20px',
            height: '20px',
            border: `4px solid ${currentDay >= step.day ? theme.palette.lightBlue : theme.palette.gray}`,
            background: theme.palette.black,
            borderRadius: '6px',
            position: 'absolute',
            top: '-6px',
            left: `calc(${step.percent}% - 10px)`,
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
              position: 'absolute',
              top: '-30px',
              left: '-50px',
              textAlign: 'center',
              width: { xs: '80px', sm: '120px' },
              fontFamily: 'var(--font-lato)',
              fontWeight: '700',
              fontSize: { xs: '10px', sm: '14px', lg: '16px' },
            }}
          >
            {`${step.day} Days Streak`}
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
              position: 'absolute',
              textAlign: 'center',
              top: '20px',
              left: '-40px',
              fontWeight: '700',
              fontFamily: 'var(--font-lato)',
              width: { xs: '80px', md: '100px' },
              fontSize: { xs: '12px', sm: '14px' },
            }}
          >
            {`${step.points} ${pluralize('Point', step.points)}`}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default CustomStepper;
