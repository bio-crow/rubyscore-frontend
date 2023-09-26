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
import { useAppSelector } from '@/core/store';
import PrivatePageLayout from '@/components/layout/PrivatePageLayout/PrivatePageLayout';
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
  const isAuth = useAppSelector(state => state.authState.isAuth);
  return (
    <Layout>
      {isAuth ? (
        <Box
          sx={{
            display: 'grid',
            gap: '20px',
            width: '100%',
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
            <ClaimProfile />
            <Benefits />
            <ScoreSection />
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
