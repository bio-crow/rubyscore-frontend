import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import ProfileInfo from '@/modules/Profile/ProfileInfo/ProfileInfo';
import ClaimProfile from '@/modules/Profile/ClaimProfile/ClaimProfile';
import Benefits from '@/modules/Profile/Benefits/Benefits';
import ScoreSection from '@/components/common/sections/ScoreSection/ScoreSection';
import DailyActivity from '@/modules/Profile/DailyActivity/DailyActivity';
import ReferralLinks from '@/modules/Profile/ReferralLinks/ReferralLinks';
import MyLevelSection from '@/components/common/sections/MyLevelSection/MyLevelSection';
import StreakDays from '@/modules/Profile/StreakDays/StreakDays';
import { useAppDispatch, useAppSelector } from '@/core/store';
import PrivatePageLayout from '@/components/layout/PrivatePageLayout/PrivatePageLayout';
import { useEffect, useLayoutEffect } from 'react';
import { getReferrals, getUserNFTList } from '@/core/thunk/user.thunk';
import { useAccount } from 'wagmi';
import { getCompletedTasks, getTasks } from '@/core/thunk/task.thunk';
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
    slidesPerView: 4.4,
  },
};
const Profile = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const premiumStatus = useAppSelector(state => state.userState.premiumStatus);
  const userName = useAppSelector(state => state.userState.userName);
  useLayoutEffect(() => {
    if (address && isAuth) {
      dispatch(getReferrals());
      dispatch(getUserNFTList(address));
      dispatch(getTasks());
      dispatch(getCompletedTasks(address));
    }
  }, [address, isAuth]);
  return (
    <Layout>
      {isAuth ? (
        <Box
          sx={{
            display: 'grid',
            gap: '20px',
            width: '100%',
            padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
            gridTemplateColumns: { xs: '1fr', xl: '1fr 333px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '56px',
              order: { xs: 2, xl: 1 },
              overflow: 'hidden',
            }}
          >
            <MyLevelSection breakpoints={breakpointsConfig} initSlidePerPage={4.4} />
            {!userName && <ClaimProfile />}
            {!premiumStatus && userName && <Benefits />}
            <ScoreSection wallet={address} />
            <DailyActivity />
            <StreakDays />
            <ReferralLinks />
          </Box>
          <ProfileInfo />
        </Box>
      ) : (
        <PrivatePageLayout />
      )}
    </Layout>
  );
};
export default Profile;
