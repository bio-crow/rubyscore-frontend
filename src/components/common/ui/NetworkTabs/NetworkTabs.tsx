import { FC, useEffect, useState } from 'react';
import 'swiper/css';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import PrevIcon from '@/components/common/Icons/PrevIcon';
import NextIcon from '@/components/common/Icons/NextIcon';
import NetworkCardWithVote from '@/components/common/ui/NetworkTabs/NetworkCardWithVote/NetworkCardWithVote';
import NetworkCard from '@/components/common/ui/NetworkTabs/NetworkCard/NetworkCard';
import { useSearchParams } from 'next/navigation';
import { getTwoLinesNetworksData } from '@/utils/helpers';
import TwoNetworkCard from '@/components/common/ui/NetworkTabs/TwoNetworkCard/TwoNetworkCard';
const bpConfig = {
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
  1200: {
    slidesPerView: 3,
  },
  1392: {
    slidesPerView: 5,
  },
};
interface btnProps {
  hasNext?: boolean;
  onClick: Function;
}

interface Props {
  networks: { label: string; index: DashboardTabIndexType }[];
  activeTab: { index: DashboardTabIndexType; label: string };
  setActiveTab: Function;
  withVote?: boolean;
  isTwoLine?:boolean;
}
const NetworkTabs: FC<Props> = ({ networks, activeTab, withVote = false,isTwoLine=false, setActiveTab }) => {
  const theme = useCustomTheme();
  const searchParams = useSearchParams();
  const netTab = searchParams.get('net');
  const [swiperRef, setSwiperRef] = useState<any>();
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const handlePrevious = () => {
    swiperRef?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.slideNext();
  };
  const onSwiper = (value: any) => {
    setSwiperRef(value);
    setHasNext(!value.isEnd);
    setHasPrev(!value.isBeginning);
  };
  const onResize = (value: any) => {
    setSwiperRef(value);
    setHasNext(!value.isEnd);
    setHasPrev(!value.isBeginning);
  };
  const onSlideChange = (value: any) => {
    setSwiperRef(value);
    setHasNext(!value.isEnd);
    setHasPrev(!value.isBeginning);
  };
  const preparedNetworks = getTwoLinesNetworksData(networks, swiperRef?.params?.slidesPerView)
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Box sx={{
          color: theme.palette.powderWhite
        }} className='H2-Lato-fw-700-fs-24'>
          Networks
        </Box>
        <Box sx={{
          color: theme.palette.lightGreen
        }} className='H2-Lato-fw-700-fs-24'>
          {networks.length}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
        }}
      >
        {/*<PrevButton onClick={handlePrevious} hasNext={hasPrev} />*/}
        <Box flex='1' overflow='hidden'>
          <Swiper
            onSwiper={onSwiper}
            onResize={onResize}
            initialSlide={networks.findIndex(item => item.index === netTab)}
            onSlideChange={onSlideChange}
            slidesPerView={4}
            loop={false}
            spaceBetween={20}
            breakpoints={bpConfig}
          >
            {!isTwoLine && networks?.map((data: { label: string; index: DashboardTabIndexType }) => (
              <SwiperSlide key={uuidv4()}>
                {withVote ? (
                  <NetworkCardWithVote network={data} activeTab={activeTab} setActiveTab={setActiveTab} />
                ) : (
                  <NetworkCard network={data} activeTab={activeTab} setActiveTab={setActiveTab} />
                )}
              </SwiperSlide>
            ))}
            {isTwoLine && preparedNetworks?.map(({ network1, network2 }) => (
              <SwiperSlide key={uuidv4()}>
                <TwoNetworkCard network1={network1} network2={network2} activeTab={activeTab} setActiveTab={setActiveTab} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* <NextButton onClick={handleNext} hasNext={hasNext} /> */}
      </Box>
    </Box>
  );
};
export default NetworkTabs;

const PrevButton: FC<btnProps> = ({ hasNext, onClick }) => {
  const theme = useCustomTheme();
  const handleClick = () => {
    hasNext && onClick();
  };
  const fillColor = hasNext ? theme.palette.powderWhite : theme.palette.white10;
  return (
    <Box
      sx={{
        borderRadius: '6px',
        padding: '12px',
        cursor: hasNext ? 'pointer' : 'unset',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={handleClick}
    >
      <PrevIcon fill={fillColor} />
    </Box>
  );
};
const NextButton: FC<btnProps> = ({ hasNext, onClick }) => {
  const theme = useCustomTheme();
  const handleClick = () => {
    hasNext && onClick();
  };
  const fillColor = hasNext ? theme.palette.powderWhite : theme.palette.white10;
  return (
    <Box
      sx={{
        borderRadius: '6px',
        padding: '12px',
        cursor: hasNext ? 'pointer' : 'unset',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={handleClick}
    >
      <NextIcon fill={fillColor} />
    </Box>
  );
};
