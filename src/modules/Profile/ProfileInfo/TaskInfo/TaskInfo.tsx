import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { FC } from 'react';
import Image from 'next/image';
import { ITask } from '@/types/index';
import { v4 as uuidv4 } from 'uuid';
import TaskCard from '@/modules/Profile/ProfileInfo/TaskInfo/TaskCard/TaskCard';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { appRoutes } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

interface Props {
  tasks: ITask[];
}

const TaskInfo: FC<Props> = ({ tasks }) => {
  const theme = useCustomTheme();
  const router = useRouter();
  const { address } = useAccount();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        width: { xs: '100%', sm: '333px' },
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        paddingBottom='16px'
        borderBottom={`1px solid ${theme.palette.white10}`}
      >
        <Box className='Body-Lato-fw-700-fs-16' color={theme.palette.powderWhite}>
          Quests completed
        </Box>
        <Box display='flex' alignItems='center' gap='10px'>
          <Box className='Body-Lato-fw-700-fs-16' color={theme.palette.lightGreen}>
            {tasks.length}
          </Box>
          <Box className='Body-Lato-fw-700-fs-16' color={theme.palette.powderWhite}>
            Quests
          </Box>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' paddingTop='16px' gap='10px'>
        {tasks.length === 0 ? (
          <Box display='flex' alignItems='center' gap='10px' justifyContent='center' minHeight='84px'>
            <Image src='/asserts/groupIcon.png' alt='icon' width='24' height='24' />
            <Box
              textTransform='uppercase'
              fontFamily='vat(--font-lato)'
              fontSize='12px'
              fontWeight='700'
              color={theme.palette.white50}
              lineHeight='24px'
            >
              You have no quests completed
            </Box>
          </Box>
        ) : (
          <>
            {tasks.slice(0, 2).map((item: ITask, index: number) => (
              <TaskCard key={uuidv4()} task={item} zIndex={3 - index} />
            ))}
          </>
        )}
        {tasks.length > 2 && (
          <SecondaryButton
            variant='contained'
            size='large'
            fullWidth
            onClick={() => router.push(`${appRoutes.LEADERBOARD_USER}/${address}?tab=Task`)}
          >
            View all
          </SecondaryButton>
        )}
      </Box>
    </Box>
  );
};
export default TaskInfo;
