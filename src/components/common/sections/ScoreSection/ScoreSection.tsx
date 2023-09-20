import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { FC, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrevIcon from '@/components/common/Icons/PrevIcon';
import NextIcon from '@/components/common/Icons/NextIcon';
import { v4 as uuidv4 } from 'uuid';
import { IScoreNetwork } from '@/types/index';
import NetworkCard from '@/components/common/sections/ScoreSection/NetworkCard/NetworkCard';
interface btnProps {
  hasNext?: boolean;
  onClick: Function;
}
const networks: IScoreNetwork[] = [
  {
    title: 'zkSync',
    icon: '/asserts/net/zkSync.svg',
    lvl: 2,
    points: 345,
  },
  {
    title: 'Linea',
    icon: '/asserts/net/Linea.svg',
    lvl: 6,
    points: 345567,
  },
  {
    title: 'Base',
    icon: '/asserts/net/Base.svg',
    lvl: 0,
    points: 0,
  },
  {
    title: 'Zora',
    icon: '/asserts/net/Zora.svg',
    lvl: 10,
    points: 678678,
  },
  {
    title: 'zkEvm',
    icon: '/asserts/net/zkEvm.svg',
    lvl: 10,
    points: 123456,
  },
];
const breakpointsConfig = {
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
    slidesPerView: 4,
  },
};
interface Props {
  bpConfig?: any;
}
const ScoreSection: FC<Props> = ({ bpConfig = breakpointsConfig }) => {
  const theme = useCustomTheme();
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
    setHasNext(value.allowSlideNext);
    setHasPrev(value.allowSlidePrev);
  };
  const onResize = (value: any) => {
    setHasNext(value.allowSlideNext);
    setHasPrev(value.allowSlidePrev);
  };
  const onSlideChange = (value: any) => {
    setHasNext(value.allowSlideNext);
    setHasPrev(value.allowSlidePrev);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box className='H1-Lato-fw-700-fs-32' color={theme.palette.powderWhite}>
          Score
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {(hasPrev || hasNext) && (
            <>
              <PrevButton onClick={handlePrevious} hasNext={hasPrev} />
              <NextButton onClick={handleNext} hasNext={hasNext} />
            </>
          )}
        </Box>
      </Box>
      <Box>
        <Swiper
          onSwiper={onSwiper}
          onResize={onResize}
          onSlideChange={onSlideChange}
          slidesPerView={4}
          loop={false}
          spaceBetween={20}
          breakpoints={bpConfig}
        >
          {networks.map((data: IScoreNetwork) => (
            <SwiperSlide key={uuidv4()}>
              <NetworkCard network={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
export default ScoreSection;

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
