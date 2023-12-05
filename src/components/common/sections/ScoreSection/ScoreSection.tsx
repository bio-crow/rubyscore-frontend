import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrevIcon from '@/components/common/Icons/PrevIcon';
import NextIcon from '@/components/common/Icons/NextIcon';
import { v4 as uuidv4 } from 'uuid';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import NetworkCard from '@/components/common/sections/ScoreSection/NetworkCard/NetworkCard';
import { networkStaticData } from '@/constants/index';
import { getUserScoreList } from '@/core/thunk/user.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { setUserScoreList } from '@/core/state/user.state';
import { CircularProgress } from '@mui/material';

interface btnProps {
  hasNext?: boolean;
  onClick: Function;
}

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
  wallet: any;
  selectable?: boolean;
  activeTab?: { index: DashboardTabIndexType; label: string };
  onSelect?: Function;
}

const ScoreSection: FC<Props> = ({
  bpConfig = breakpointsConfig,
  wallet,
  selectable,
  activeTab,
  onSelect,
}) => {
  const dispatch = useAppDispatch();
  const userScoreListLoading = useAppSelector(state => state.userState.userScoreListLoading);
  const userScoreList = useAppSelector(state => state.userState.userScoreList);
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
  useLayoutEffect(() => {
    dispatch(getUserScoreList(wallet));
    return () => {
      dispatch(setUserScoreList(null));
    };
  }, []);
  const networks: IScoreNetwork[] | null = userScoreList && [
    {
      index: 'zk_era',
      title: 'zkSync',
      icon: networkStaticData['zk_era'].icon,
      lvl: userScoreList['zk_era'].level,
      points: userScoreList['zk_era'].score,
    },
    {
      index: 'linea',
      title: 'Linea',
      icon: networkStaticData['linea'].icon,
      lvl: userScoreList['linea'].level,
      points: userScoreList['linea'].score,
    },
    {
      index: 'base',
      title: 'Base',
      icon: networkStaticData['base'].icon,
      lvl: userScoreList['base'].level,
      points: userScoreList['base'].score,
    },
    {
      index: 'zk_evm',
      title: 'zkEVM',
      icon: networkStaticData['zk_evm'].icon,
      lvl: userScoreList['zk_evm'].level,
      points: userScoreList['zk_evm'].score,
    },
    {
      index: 'scroll',
      title: 'Scroll',
      icon: networkStaticData['scroll'].icon,
      lvl: userScoreList['scroll'].level,
      points: userScoreList['scroll'].score,
    },
  ];
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
          {(hasPrev || hasNext) && userScoreList && (
            <>
              <PrevButton onClick={handlePrevious} hasNext={hasPrev} />
              <NextButton onClick={handleNext} hasNext={hasNext} />
            </>
          )}
        </Box>
      </Box>
      {userScoreListLoading ? (
        <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <>
          {userScoreList ? (
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
                {networks?.map((data: IScoreNetwork) => (
                  <SwiperSlide key={uuidv4()}>
                    <NetworkCard
                      network={data}
                      selectable={selectable}
                      activeTab={activeTab}
                      onSelect={onSelect}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                flex: '1',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.powderWhite,
              }}
              className='Body-Lato-fw-600-fs-24'
            >
              No Data
            </Box>
          )}
        </>
      )}
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
