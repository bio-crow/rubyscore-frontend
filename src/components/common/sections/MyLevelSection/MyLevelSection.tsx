import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const MyLevelSection = () => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
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
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'unset', sm: 'flex-start' },
          justifyContent: 'space-between',
          gap: '20px',
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
        <SecondaryButton variant='contained' size='large' fullWidth={!isSm}>
          Claim all
        </SecondaryButton>
      </Box>
      <Box bgcolor='pink'>steps</Box>
    </Box>
  );
};
export default MyLevelSection;
