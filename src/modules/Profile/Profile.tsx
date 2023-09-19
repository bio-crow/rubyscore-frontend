import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import ProfileInfo from '@/modules/Profile/ProfileInfo/ProfileInfo';
import ClaimProfile from '@/modules/Profile/ClaimProfile/ClaimProfile';
import Benefits from '@/modules/Profile/Benefits/Benefits';
import Score from '@/modules/Profile/Score/Score';
import DailyActivity from '@/modules/Profile/DailyActivity/DailyActivity';
import ReferralLinks from '@/modules/Profile/ReferralLinks/ReferralLinks';
import MyLevelSection from '@/components/common/MyLevelSection/MyLevelSection';
import StreakDays from '@/modules/Profile/StreakDays/StreakDays';

const Profile = () => {
  const theme = useCustomTheme();
  return (
    <Layout>
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
          <MyLevelSection />
          <ClaimProfile />
          <Benefits />
          <Score />
          <DailyActivity />
          <StreakDays />
          <ReferralLinks />
        </Box>
        <ProfileInfo />
      </Box>
    </Layout>
  );
};
export default Profile;
