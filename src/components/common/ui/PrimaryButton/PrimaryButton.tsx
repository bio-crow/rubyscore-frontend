import { styled } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';
import { CustomTheme } from '@/theme/index';

const PrimaryButton = styled(LoadingButton)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiButton-contained': {
      background: theme.palette.btnPrimaryDefault,
      fontFamily: 'var(--font-lato)',
      fontStyle: 'normal',
      color: theme.palette.black,
      transition: 'none',
      textTransform: 'unset',
      '&:hover': {
        background: theme.palette.btnPrimaryHover,
      },
      '&:focus': {
        background: theme.palette.btnPrimaryFocus,
      },
      '&.Mui-disabled': {
        background: theme.palette.btnPrimaryDisabled,
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
export default PrimaryButton;
