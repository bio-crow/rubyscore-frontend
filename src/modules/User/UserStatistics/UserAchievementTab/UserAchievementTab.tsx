import { Box } from '@mui/system';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import { v4 as uuidv4 } from 'uuid';
import { IDailyActivityCard } from '@/types/index';
import { mokeAchievementsData } from '@/modules/User/UserStatistics/UserAchievementTab/mokeAchievementsData';
import AchievementCard from '@/modules/User/UserStatistics/UserAchievementTab/AchievementCard/AchievementCard';
const UserAchievementTab = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          flex: '1',
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xlg: '1fr 1fr 1fr 1fr' },
        }}
      >
        {mokeAchievementsData.map((data: IDailyActivityCard) => (
          <AchievementCard activity={data} key={uuidv4()} />
        ))}
      </Box>
      <Box
        sx={{
          alignSelf: 'flex-end',
        }}
      >
        <PrimaryPagination count={5} variant='outlined' shape='rounded' />
      </Box>
    </Box>
  );
};
export default UserAchievementTab;
