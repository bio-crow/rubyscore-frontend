import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IDailyActivityCard, IScoreNetwork } from '@/types/index';
import { v4 as uuidv4 } from 'uuid';
import DailyActivityCard from '@/modules/Profile/DailyActivity/DailyActivityCard/DailyActivityCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
import RefreshIcon from '@/components/common/Icons/RefreshIcon';
const activities: IDailyActivityCard[] = [
  {
    description: 'Welcome Base Mainnet & Onchain Summer',
    net: {
      title: 'zkSync',
      icon: '/asserts/net/zkSync.svg',
    },
    badges: ['5-25 Points', 'NFT'],
  },
  {
    description: 'Welcome Base Mainnet & Onchain Summer',
    net: {
      title: 'zkSync',
      icon: '/asserts/net/zkSync.svg',
    },
    badges: ['5-25 Points', 'NFT'],
  },
  {
    description: 'Welcome Base Mainnet & Onchain Summer',
    net: {
      title: 'zkSync',
      icon: '/asserts/net/zkSync.svg',
    },
    badges: ['5-25 Points', 'NFT'],
  },
];
const DailyActivity = () => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
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
        >
          Refresh
        </SecondaryButton>
      </Box>
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
        >
          {activities.map((data: IDailyActivityCard) => (
            <SwiperSlide key={uuidv4()}>
              <DailyActivityCard activity={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
export default DailyActivity;
