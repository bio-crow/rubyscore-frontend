import { Box } from '@mui/system';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
interface Props {
  info: { value: string; description: string };
}
const MainInfoCard: FC<Props> = ({ info }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '10px 30px 10px 10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box color={theme.palette.lightGreen} className='Body-Lato-fw-800-fs-24'>
        {info.value}
      </Box>
      <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
        {info.description}
      </Box>
    </Box>
  );
};
export default MainInfoCard;
