import { Box } from '@mui/system';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '@/types/index';

import AchievementCard from '@/modules/User/UserStatistics/UserAchievementTab/AchievementCard/AchievementCard';
import { useAppSelector } from '@/core/store';

const UserAchievementTab = () => {
  const completedTasks = useAppSelector(state => state.taskState.completedTasks);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {completedTasks?.length > 0 ? (
        <Box
          sx={{
            flex: '1',
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xlg: '1fr 1fr 1fr 1fr' },
          }}
        >
          {completedTasks.map((data: ITask, index: number) => (
            <AchievementCard
              task={data}
              key={uuidv4()}
              zIndex={completedTasks && completedTasks?.length - index}
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flex: '1',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {`No Achievement's completed`}
        </Box>
      )}
      {/*
      <Box
        sx={{
          alignSelf: 'flex-end',
        }}
      >
        <PrimaryPagination count={5} variant='outlined' shape='rounded' />
      </Box>*/}
    </Box>
  );
};
export default UserAchievementTab;
