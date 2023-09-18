import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { FC } from 'react';
import Image from 'next/image';
import { IQuestCard } from '@/types/index';
import QuestsCard from '@/modules/Profile/ProfileInfo/QuestsInfo/QuestCard/QuestCard';

interface Props {
  quests: IQuestCard[];
}

const QuestsInfo: FC<Props> = ({ quests }) => {
  const theme = useCustomTheme();
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
            {quests.length}
          </Box>
          <Box className='Body-Lato-fw-700-fs-16' color={theme.palette.powderWhite}>
            Quests
          </Box>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' paddingTop='16px' gap='10px'>
        {quests.length === 0 ? (
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
            {quests.map(item => (
              <QuestsCard key={item.questTitle} quest={item} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
export default QuestsInfo;
