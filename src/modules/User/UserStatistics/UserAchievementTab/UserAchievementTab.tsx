import { Box } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '@/types/index';

import AchievementCard from '@/modules/User/UserStatistics/UserAchievementTab/AchievementCard/AchievementCard';
import { useAppSelector } from '@/core/store';

const UserAchievementTab = () => {
  const completedUserTasks = useAppSelector(state => state.taskState.completedUserTasks);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {completedUserTasks?.length > 0 ? (
        <Box
          sx={{
            flex: '1',
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xlg: '1fr 1fr 1fr 1fr' },
          }}
        >
          {completedUserTasks.map((data: ITask, index: number) => (
            <AchievementCard
              task={data}
              key={uuidv4()}
              zIndex={completedUserTasks && completedUserTasks?.length - index}
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
