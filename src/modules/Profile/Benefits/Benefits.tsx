import { Box } from '@mui/system';
import { useCustomTheme } from '../../../hooks/useCustomTheme';

const Benefits = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.benefitsGradient,
        padding: '40px 32px',
      }}
    >
      Benefits
    </Box>
  );
};
export default Benefits;
