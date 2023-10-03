import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const Section2 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '20px',
        alignItems: { xs: 'unset', sm: 'center' },
        justifyContent: 'space-between',
        padding: '20px 0px 20px 0px',
        color: theme.palette.white50,
      }}
    >
      <Box className='menu-Lato-fw-500-fs-14'>RubyScore © 2023</Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '20px', sm: '60px' },
        }}
      >
        <Box
          className='menu-Lato-fw-500-fs-14'
          sx={{
            cursor: 'pointer',
          }}
        >
          Terms of Use
        </Box>
        <Box
          className='menu-Lato-fw-500-fs-14'
          sx={{
            cursor: 'pointer',
          }}
        >
          Privacy Policy
        </Box>
      </Box>
    </Box>
  );
};
export default Section2;
