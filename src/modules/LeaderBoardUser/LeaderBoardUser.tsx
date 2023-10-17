import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import ScoreSection from '@/components/common/sections/ScoreSection/ScoreSection';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import LeaderBoardUserStatistics from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardUserStatistics';
import { useEffect } from 'react';
import { getUserStatistics } from '@/core/thunk/leaderboard.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { setUserStatistics } from '@/core/state/leaderboard.state';
import { useRouter, useParams } from 'next/navigation';
import { useCustomTheme } from '@/hooks/useCustomTheme';

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
    slidesPerView: 5,
  },
};
const LeaderBoardUser = () => {
  const theme = useCustomTheme();
  const { wallet } = useParams();
  const userStatistics = useAppSelector(state => state.leaderboardState.userStatistics);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (wallet) {
      const data = {
        project: 'rubyscore',
        wallet: wallet,
      };
      dispatch(getUserStatistics(data));
    } else {
      dispatch(setUserStatistics(null));
    }
    return () => {
      dispatch(setUserStatistics(null));
    };
  }, []);
  return (
    <Layout>
      {!userStatistics ? (
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
          User not found
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '56px',
            width: '100%',
            padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
          }}
        >
          <UserInfoSection user={userStatistics} />
          <ScoreSection bpConfig={breakpointsConfig} />
          <LeaderBoardUserStatistics />
        </Box>
      )}
    </Layout>
  );
};
export default LeaderBoardUser;
