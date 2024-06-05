import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import WarningTriangleIcon from '@/components/common/Icons/WarningTriangleIcon';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';

const Disclamer = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '10px',
        background: 'rgba(255, 96, 96, 0.30)',
        padding: '16px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        flex: '1',
        maxWidth: '550px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <WarningTriangleIcon fill={theme.palette.powderWhite} />
        <Box
          sx={{
            color: theme.palette.powderWhite,
          }}
          className='Body-Inter-fw-700-fs-16'
        >
          Disclamer
        </Box>
      </Box>
      <Box
        sx={{
          color: theme.palette.white50,
        }}
        className='Body-Lato-fw-600-fs-14'
      >
        If the gas in L1 is high, transactions may not be sent at the right time. Send the transaction when
        the gas stabilizes?
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <FourthButton className='white rounded' variant='outlined' size='small'>
          Yes
        </FourthButton>
        <FourthButton className='gray rounded' variant='outlined' size='small'>
          No, cancel transaction
        </FourthButton>
      </Box>
    </Box>
  );
};
export default Disclamer;
