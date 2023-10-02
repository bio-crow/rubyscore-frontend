import { styled } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';
import { CustomTheme } from '@/theme/index';

const ThirdlyButton = styled(LoadingButton)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiButton-contained': {
      background: theme.palette.btnThirdlyDefault,
      color: theme.palette.black,
      fontStyle: 'normal',
      transition: 'none',
      textTransform: 'unset',
      fontFamily: 'var(--font-lato)',
      '&:hover': {
        background: theme.palette.btnThirdlyHover,
      },
      '&:focus': {
        background: theme.palette.btnThirdlyFocus,
      },
      '&.Mui-disabled': {
        background: theme.palette.btnThirdlyDisabled,
        color: theme.palette.black,
      },
    },
    '&.MuiButton-sizeLarge': {
      padding: '12px 40px',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '24px',
      width: 'fit-content',
      '&.MuiButton-fullWidth': {
        width: '100%',
      },
    },
    '&.MuiButton-sizeMedium': {
      padding: '8px 24px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '24px',
      width: 'fit-content',
      '&.MuiButton-fullWidth': {
        width: '100%',
      },
    },
    '&.MuiButton-sizeSmall': {
      padding: '4px 12px',
      borderRadius: '16px',
      fontSize: '10px',
      fontWeight: '500',
      lineHeight: '16px',
      width: 'fit-content',
      '&.MuiButton-fullWidth': {
        width: '100%',
      },
    },
  };
});
export default ThirdlyButton;
