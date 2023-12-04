import { FC, useState } from 'react';
import { Box } from '@mui/system';
import { ITask } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';
import Image from 'next/image';
import { networkStaticData } from '@/constants/index';

interface Props {
  task: ITask;
  zIndex: number;
}

const TaskCard: FC<Props> = ({ task, zIndex }) => {
  const theme = useCustomTheme();
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '150px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          transition: '0.5s',
          gap: '10px',
          padding: '20px',
          borderRadius: '10px',
          cursor: 'pointer',
          zIndex: zIndex,
          border: `1px solid ${theme.palette.white10}`,
          background: theme.palette.backgroundColor,
        }}
        onClick={() => setOpen(!open)}
      >
        <Box display='flex' alignItems='center' gap='10px' flexWrap='wrap'>
          {task.projects.map(project => (
            <Image
              src={networkStaticData[project].icon}
              alt='icon'
              width='24'
              height='24'
              key={`img/${project}`}
            />
          ))}
          <Box
            display='flex'
            alignItems='center'
            gap='6px'
            borderRadius='20px'
            padding='2px 10px 2px 10px'
            border={`1px solid ${theme.palette.lightGreen}`}
          >
            <Box color={theme.palette.lightGreen} className='Body-Lato-fw-500-fs-10'>
              {task.score}
            </Box>
            <Box color={theme.palette.lightGreen} className='Body-Lato-fw-500-fs-10'>
              {pluralize('Point', task.score)}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            color: theme.palette.powderWhite,
            height: open ? 'unset' : '50px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: open ? 'unset' : '2',
            WebkitBoxOrient: open ? 'unset' : 'vertical',
          }}
          className='Body-Lato-fw-700-fs-16'
        >
          {task.description}
        </Box>
        {/*    <Box
          sx={{
            color: theme.palette.white50,
            display: open ? 'flex' : 'none',
          }}
          className='Body-Lato-fw-600-fs-14'
        >
          {task.description}
        </Box> */}
      </Box>
    </Box>
  );
};
export default TaskCard;
