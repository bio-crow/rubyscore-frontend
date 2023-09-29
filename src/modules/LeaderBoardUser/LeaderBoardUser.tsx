import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import ScoreSection from '@/components/common/sections/ScoreSection/ScoreSection';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import LeaderBoardUserStatistics from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardUserStatistics';

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
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          width: '100%',
        }}
      >
        <UserInfoSection />
        <ScoreSection bpConfig={breakpointsConfig} />
        <LeaderBoardUserStatistics />
      </Box>
    </Layout>
  );
};
export default LeaderBoardUser;
