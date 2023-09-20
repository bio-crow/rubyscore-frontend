import { styled } from '@mui/system';
import { CustomTheme } from '@/theme/index';
import LinearProgress from '@mui/material/LinearProgress';
const CustomLinearProgress = styled(LinearProgress)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiLinearProgress-root': {
      height: '8px',
      background: theme.palette.gray,
      borderRadius: '10px',
      '.MuiLinearProgress-bar': {
        background: theme.palette.primaryGradient,
        borderRadius: '10px',
      },
    },
  };
});
export default CustomLinearProgress;
