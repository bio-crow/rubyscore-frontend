import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { networkStaticData } from '@/constants/index';
import Image from 'next/image';

const PoweredBy = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          color: theme.palette.white50,
        }}
        className='Body-Lato-fw-700-fs-18'
      >
        Powered by
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Image src='/asserts/verax.svg' alt='icon' width='40' height='40' />
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='Body-Lato-fw-800-fs-24'
          >
            Verax
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Image src='/asserts/net/Linea.svg' alt='icon' width='40' height='40' />
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='Body-Lato-fw-800-fs-24'
          >
            Linea
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PoweredBy;
