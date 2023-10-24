import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, useEffect, useState } from 'react';
import PrevIcon from '@/components/common/Icons/PrevIcon';
import NextIcon from '@/components/common/Icons/NextIcon';
import { ILevelCard, IScoreNetwork } from '@/types/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import MyLevelCard from '@/components/common/sections/MyLevelSection/MyLevelCard/MyLevelCard';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getUserLevelInfo } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';

const breakpointsConfig = {
  0: {
    slidesPerView: 1.4,
  },
  500: {
    slidesPerView: 2.4,
  },
  767: {
    slidesPerView: 3.4,
  },
  992: {
    slidesPerView: 4.4,
  },
  1392: {
    slidesPerView: 5.4,
  },
};
const levels: ILevelCard[] = [
  {
    lvl: 1,
    icon: '/asserts/nftDemoImage.png',
    points: 1,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 2,
    icon: '/asserts/nftDemoImage.png',
    points: 1,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 3,
    icon: '/asserts/nftDemoImage.png',
    points: 2,
    isAvailable: true,
    isClaimed: false,
  },
  {
    lvl: 4,
    icon: '/asserts/nftDemoImage.png',
    points: 2,
    isAvailable: true,
    isClaimed: false,
  },
  {
    lvl: 5,
    icon: '/asserts/nftDemoImage.png',
    points: 3,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 6,
    icon: '/asserts/nftDemoImage.png',
    points: 3,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 7,
    icon: '/asserts/nftDemoImage.png',
    points: 4,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 8,
    icon: '/asserts/nftDemoImage.png',
    points: 4,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 9,
    icon: '/asserts/nftDemoImage.png',
    points: 5,
    isAvailable: false,
    isClaimed: false,
  },
  {
    lvl: 10,
    icon: '/asserts/nftDemoImage.png',
    points: 5,
    isAvailable: false,
    isClaimed: false,
  },
];

interface Props {
  breakpoints?: any;
  initSlidePerPage?: any;
  project?: string;
}

const MyLevelSection: FC<Props> = ({
  breakpoints = breakpointsConfig,
  initSlidePerPage = 5.4,
  project = 'rubyscore',
}) => {
  const dispatch = useAppDispatch();
  const myLevelData = useAppSelector(state => state.dashboardState.myLevelData);
  const { address } = useAccount();
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [swiperRef, setSwiperRef] = useState<any>();
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
  useEffect(() => {
    if (address && project) {
      const data = {
        wallet: address,
        project: project,
      };
      dispatch(getUserLevelInfo(data));
    }
  }, [address, project]);
  const prepareLevels = levels.map((item, index) => {
    if (myLevelData) {
      return {
        ...item,
        isClaimed: myLevelData.levelStatus[index] !== 0,
        isAvailable: item.lvl <= myLevelData.level,
      };
    } else {
      return item;
    }
  });
  return (
    <>
      {' '}
      {myLevelData && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 32px',
            borderRadius: '10px',
            gap: '40px',
            border: `1px solid ${theme.palette.white10}`,
            background: theme.palette.black,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'unset', sm: 'flex-start' },
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.powderWhite,
                  }}
                  className='H2-Lato-fw-700-fs-24'
                >
                  My Level
                </Box>
                <Box
                  sx={{
                    color: theme.palette.lightGreen,
                  }}
                  className='H2-Lato-fw-700-fs-24'
                >
                  {myLevelData.level}
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.white50,
                  }}
                  className='Body-Lato-fw-500-fs-18'
                >
                  Up to the next level
                </Box>
                <Box
                  sx={{
                    color: theme.palette.lightGreen,
                  }}
                  className='Body-Lato-fw-500-fs-18'
                >
                  {`${myLevelData.score} / ${myLevelData.levelUp} Points`}
                </Box>
              </Box>
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
              slidesPerView={initSlidePerPage}
              loop={false}
              spaceBetween={20}
              breakpoints={breakpoints}
            >
              {prepareLevels.map((data: ILevelCard) => (
                <SwiperSlide key={uuidv4()}>
                  <MyLevelCard data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      )}
    </>
  );
};
export default MyLevelSection;

interface btnProps {
  hasNext?: boolean;
  onClick: Function;
}

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
