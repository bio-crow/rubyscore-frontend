import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const MyLevel = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 32px',
        borderRadius: '10px',
        gap: '40px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='H2-Lato-fw-700-fs-24'
          >
            My Level
          </Box>
          <Box
            sx={{
              color: theme.palette.lightGreen,
            }}
            className='H2-Lato-fw-700-fs-24'
          >
            0
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-500-fs-18'
          >
            Up to the next level
          </Box>
          <Box
            sx={{
              color: theme.palette.lightGreen,
            }}
            className='Body-Lato-fw-500-fs-18'
          >
            0 / 100 Points
          </Box>
        </Box>
      </Box>
      <Box bgcolor='pink'>steps</Box>
    </Box>
  );
};
export default MyLevel;
