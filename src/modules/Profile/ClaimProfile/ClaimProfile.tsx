import { Box } from '@mui/system';
import { useCustomTheme } from '../../../hooks/useCustomTheme';

const ClaimProfile = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '40px 32px',
        alignItems: 'center',
        gap: '32px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      ClaimProfile
    </Box>
  );
};
export default ClaimProfile;
