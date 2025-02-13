import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, ReactElement, useEffect, useState } from 'react';
import PrevIcon from '@/components/common/Icons/PrevIcon';
import NextIcon from '@/components/common/Icons/NextIcon';
import { DashboardTabIndexType, ILevelCard, IScoreNetwork } from '@/types/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import MyLevelCard from '@/components/common/sections/MyLevelSection/MyLevelCard/MyLevelCard';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getUserLevelInfo } from '@/core/thunk/dashboard.thunk';
import { useAccount } from 'wagmi';
import { myLevelIcons } from '@/constants/index';
import { setMyLevelData } from '@/core/state/dashboard.state';
import { Button, CircularProgress } from '@mui/material';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { TooltipCurrentRank } from '@/utils/tooltipsContent';
import { formatPercentsForCards } from '@/utils/helpers';
import Image from 'next/image';
import { setShareModalState } from '@/core/state/shareModal.state';

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

interface Props {
  breakpoints?: any;
  initSlidePerPage?: any;
  project?: DashboardTabIndexType;
  ToolTip1?: ReactElement;
  ToolTip2?: ReactElement;
  withTop?: boolean;
}

const MyLevelSection: FC<Props> = ({
  breakpoints = breakpointsConfig,
  initSlidePerPage = 5.4,
  project = 'rubyscore',
  ToolTip1,
  ToolTip2,
  withTop = true,
}) => {
  const dispatch = useAppDispatch();
  const myLevelData = useAppSelector(state => state.dashboardState.myLevelData);
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const myLevelDataLoading = useAppSelector(state => state.dashboardState.myLevelDataLoading);
  const { address } = useAccount();
  const theme = useCustomTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [swiperRef, setSwiperRef] = useState<any>();
  const percent =
    myLevelData &&
    formatPercentsForCards(
      Number.parseFloat(`${(myLevelData.position.current / myLevelData.position.max) * 100}`)
    );
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
    if (address && project && isAuth) {
      const data = {
        wallet: address,
        project: project,
      };
      dispatch(getUserLevelInfo(data));
    }
    return () => {
      dispatch(setMyLevelData(null));
    };
  }, [address, project, isAuth]);
  const prepareLevels = myLevelData
    ? myLevelData.levelStatus.map((item, index) => {
        return {
          icon: myLevelIcons[project][index],
          lvl: index + 1,
          isClaimed: myLevelData.levelStatus[index] === 1,
          isPefWaiting: index + 1 <= myLevelData.level && myLevelData.levelStatus[index] !== 1,
          isAvailable: index <= myLevelData.levelStatus.findIndex(item => item === 0),
          isError: myLevelData.levelStatus[index] === 2,
        };
      })
    : [];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 32px',
        borderRadius: '10px',
        gap: '20px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'unset', md: 'flex-start' },
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
              {myLevelData?.level}
            </Box>
            {ToolTip1 && (
              <CustomTooltip title={ToolTip1}>
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
          {myLevelData && myLevelData.levelUp && (
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
                {`${Math.floor(myLevelData.score)} / ${myLevelData.levelUp} Points`}
              </Box>
              {ToolTip2 && (
                <CustomTooltip title={ToolTip2}>
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
          )}
        </Box>
        {withTop && myLevelData && myLevelData.position.max !== 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'space-between', md: 'unset' },
              gap: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingRight: { xs: 'none', lg: `20px` },
                borderRight: { xs: 'none', lg: `1px solid ${theme.palette.white10}` },
                alignItems: { xs: 'unset', md: 'flex-end' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <CustomTooltip title={<TooltipCurrentRank />}>
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
                <Box color={theme.palette.powderWhite} className='Body-Inter-fw-700-fs-16'>
                  Current Rank
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '5px',
                }}
              >
                <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.lightGreen}>
                  {myLevelData.position.current}
                </Box>
                <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.white50}>
                  of {myLevelData.position.max}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingRight: { xs: 'none', lg: `16px` },
                borderRight: { xs: 'none', lg: `1px solid ${theme.palette.white10}` },
              }}
            >
              <Box color={theme.palette.powderWhite} className='Body-Inter-fw-700-fs-16'>
                TOP
              </Box>
              <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.lightGreen}>
                {percent}%
              </Box>
            </Box>
            {isLg && (
              <Box
                sx={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                <Box color={theme.palette.powderWhite} className='Body-Inter-fw-700-fs-16'>
                  Share my stats
                </Box>
                <Button
                  onClick={() =>
                    dispatch(
                      setShareModalState({
                        isOpen: true,
                        type: 'stats',
                        social: 'twitter',
                      })
                    )
                  }
                  sx={{
                    padding: '12px',
                    background: '#92FE9D',
                    borderRadius: '10px',
                    border: '1px solid var(--white-10, rgba(245, 247, 243, 0.10))',
                    minWidth: '0',
                  }}
                >
                  <Image src='/asserts/social/x.svg' width={24} height={24} alt='X' />
                </Button>
                <Button
                  onClick={() =>
                    dispatch(
                      setShareModalState({
                        isOpen: true,
                        type: 'stats',
                        social: 'telegram',
                      })
                    )
                  }
                  sx={{
                    padding: '12px',
                    background: '#92FE9D',
                    borderRadius: '10px',
                    border: '1px solid var(--white-10, rgba(245, 247, 243, 0.10))',
                    minWidth: '0',
                  }}
                >
                  <Image src='/asserts/social/telegram_outline.svg' width={24} height={24} alt='Telegram' />
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Box>
      {myLevelDataLoading ? (
        <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <>
          {prepareLevels && (
            <>
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
                      <MyLevelCard data={data} project={project} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '16px',
                }}
              >
                {(hasPrev || hasNext) && myLevelData && (
                  <>
                    <PrevButton onClick={handlePrevious} hasNext={hasPrev} />
                    <NextButton onClick={handleNext} hasNext={hasNext} />
                  </>
                )}
              </Box>
            </>
          )}
        </>
      )}
    </Box>
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
