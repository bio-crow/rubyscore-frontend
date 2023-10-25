import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import MainInfoCard from '@/modules/Dashboard/DashboardTab/MainInfo/MainInfoCard/MainInfoCard';
import 'swiper/css';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getProjectStatistics } from '@/core/thunk/dashboard.thunk';
import { CircularProgress } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { formatCash } from '@/utils/helpers';

const MainInfo = () => {
  const projectStatistics = useAppSelector(state => state.dashboardState.projectStatistics);
  const data = projectStatistics
    ? [
        {
          value: projectStatistics.user_count.toLocaleString(),
          description: 'Users in the network',
        },
        {
          value: projectStatistics.transaction_count.toLocaleString(),
          description: 'Transactions in the network',
        },
        {
          value: formatCash(projectStatistics.total_value_locked),
          description: 'Total Value Locked',
        },
        {
          value: projectStatistics.bridge_transaction_count.toLocaleString(),
          description: 'Transactions through ether bridge',
        },
        {
          value: formatCash(projectStatistics.total_volume),
          description: 'Transaction volume',
        },
      ]
    : [];
  return (
    <Box>
      <Swiper
        slidesPerView={5}
        loop={false}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1392: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((data: any) => (
          <SwiperSlide key={uuidv4()}>
            <MainInfoCard info={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default MainInfo;
