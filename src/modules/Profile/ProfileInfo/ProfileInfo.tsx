import { Box } from '@mui/system';
import UserInfo from '@/modules/Profile/ProfileInfo/UserInfo/UserInfo';
import TaskInfo from '@/modules/Profile/ProfileInfo/TaskInfo/TaskInfo';
import NFTInfo from '@/modules/Profile/ProfileInfo/NFTInfo/NFTInfo';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { initUserDataFromContract } from '@/core/thunk/user.thunk';

const ProfileInfo = () => {
  const { address } = useAccount();

  const completedTasks = useAppSelector(state => state.taskState.completedTasks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (address) {
      dispatch(initUserDataFromContract(address));
    }
  }, [address]);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: { sx: 'column', sm: 'row', xl: 'column' },
        alignItems: { sx: 'unset', sm: 'flex-start', xl: 'unset' },
        flexWrap: 'wrap',
        order: { xs: 1, xl: 2 },
      }}
    >
      <UserInfo />
      <TaskInfo tasks={completedTasks} />
      <NFTInfo nft={[]} />
    </Box>
  );
};
export default ProfileInfo;
