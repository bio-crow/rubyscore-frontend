import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITask } from '@/types/index';
import { v4 as uuidv4 } from 'uuid';
import DailyActivityCard from '@/modules/Profile/DailyActivity/DailyActivityCard/DailyActivityCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
import RefreshIcon from '@/components/common/Icons/RefreshIcon';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { CircularProgress } from '@mui/material';
import { getTasks } from '@/core/thunk/task.thunk';
const DailyActivity = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const tasksLoading = useAppSelector(state => state.taskState.tasksLoading);
  const tasks = useAppSelector(state => state.taskState.tasks);
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const refresh = () => {
    dispatch(getTasks());
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'unset', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Box className='H1-Lato-fw-700-fs-32' color={theme.palette.powderWhite}>
          Daily activity
        </Box>
        <SecondaryButton
          startIcon={<RefreshIcon fill={theme.palette.powderWhite} />}
          variant='outlined'
          size='large'
          fullWidth={!isSm}
          loading={tasksLoading}
          onClick={refresh}
        >
          Refresh
        </SecondaryButton>
      </Box>
      {tasksLoading ? (
        <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <Box>
          <Swiper
            slidesPerView={3}
            loop={false}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1392: {
                slidesPerView: 3,
              },
            }}
            style={{ overflowY: 'visible', overflowX: 'clip' }}
          >
            {tasks.map((data: ITask) => (
              <SwiperSlide key={uuidv4()}>
                <DailyActivityCard task={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};
export default DailyActivity;
