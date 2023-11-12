import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { ITask } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import { networkStaticData } from '@/constants/index';
import pluralize from 'pluralize';

interface Props {
  task: ITask;
  zIndex: number;
}

const AchievementCard: FC<Props> = ({ task, zIndex }) => {
  const theme = useCustomTheme();
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '180px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          transition: '0.5s',
          gap: '20px',
          padding: '20px',
          borderRadius: '10px',
          cursor: 'pointer',
          zIndex: zIndex,
          border: `1px solid ${theme.palette.white10}`,
          background: theme.palette.black,
        }}
        onClick={() => setOpen(!open)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flewWrap: 'wrap',
          }}
        >
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
            sx={{
              color: theme.palette.lightGreen,
              borderRadius: '16px',
              border: `1px solid ${theme.palette.lightGreen}`,
              padding: '4px 12px 4px 12px',
              textWrap: 'nowrap',
            }}
            className='Body-Lato-fw-500-fs-10'
          >
            {`${task.score} ${pluralize('point', task.score)}`}
          </Box>
        </Box>
        <Box
          sx={{
            color: theme.palette.powderWhite,
            height: open ? 'unset' : '64px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: open ? 'unset' : '2',
            WebkitBoxOrient: open ? 'unset' : 'vertical',
          }}
          className='Body-Lato-fw-600-fs-24'
        >
          {task.description}
        </Box>
      </Box>
    </Box>
  );
};
export default AchievementCard;
