import { Box } from '@mui/system';
import NoDataIcon from '@/components/common/Icons/NoDataIcon';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const CustomNoRows = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '10px',
      }}
    >
      <Box>
        <NoDataIcon fill={theme.palette.white50} style={{ width: '32px', height: '32px' }} />
      </Box>
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        No data
      </Box>
    </Box>
  );
};
export default CustomNoRows;
