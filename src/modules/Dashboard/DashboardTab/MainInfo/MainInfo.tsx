import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import MainInfoCard from '@/modules/Dashboard/DashboardTab/MainInfo/MainInfoCard/MainInfoCard';
import 'swiper/css';
const mainInfoData = [
  {
    value: '1 600 000',
    description: 'Users in the network',
  },
  {
    value: '5 456 345',
    description: 'Transactions in the network',
  },
  {
    value: '$119,09 m',
    description: 'Total Value Locked',
  },
  {
    value: '550 000',
    description: 'Transactions through ether bridge',
  },
  {
    value: '$245.3 m',
    description: 'Transaction volume',
  },
];
const MainInfo = () => {
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
        {mainInfoData.map((data: any) => (
          <SwiperSlide key={uuidv4()}>
            <MainInfoCard info={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default MainInfo;
