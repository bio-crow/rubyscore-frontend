import { FC } from 'react';
import { Box } from '@mui/system';
import { IQuestCard } from '@/types/index';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';
import Image from 'next/image';
interface Props {
  quest: IQuestCard;
}

const QuestsCard: FC<Props> = ({ quest }) => {
  const theme = useCustomTheme();
  return (
    <Box
      borderRadius='10px'
      border={`1px solid ${theme.palette.white10}`}
      padding='20px'
      display='flex'
      flexDirection='column'
      gap='10px'
      bgcolor={theme.palette.backgroundColor}
    >
      <Box display='flex' alignItems='center' gap='10px'>
        <Box
          display='flex'
          alignItems='center'
          gap='6px'
          border={`1px solid ${theme.palette.white10}`}
          padding='2px 10px 2px 10px'
          borderRadius='20px'
          bgcolor={theme.palette.gray}
        >
          <Image src={quest.net.icon} alt='icon' width='16' height='16' />
          <Box color={theme.palette.powderWhite} className='Body-Lato-fw-500-fs-10'>
            {quest.net.title}
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          gap='6px'
          borderRadius='20px'
          padding='2px 10px 2px 10px'
          border={`1px solid ${theme.palette.lightGreen}`}
        >
          <Box color={theme.palette.lightGreen} className='Body-Lato-fw-500-fs-10'>
            {quest.points}
          </Box>
          <Box color={theme.palette.lightGreen} className='Body-Lato-fw-500-fs-10'>
            {pluralize('Point', quest.points)}
          </Box>
        </Box>
      </Box>
      <Box color={theme.palette.powderWhite} className='Body-Lato-fw-700-fs-16'>
        {quest.questTitle}
      </Box>
    </Box>
  );
};
export default QuestsCard;
