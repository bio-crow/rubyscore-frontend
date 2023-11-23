import { styled } from '@mui/system';
import { CustomTheme } from '@/theme/index';
import LoadingButton from '@mui/lab/LoadingButton';
const SecondaryButton = styled(LoadingButton)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiButton-contained': {
      background: theme.palette.btnSecondaryDefault,
      color: theme.palette.black,
      fontStyle: 'normal',
      transition: 'none',
      textTransform: 'unset',
      fontFamily: 'var(--font-lato)',
      '&:hover': {
        background: theme.palette.btnSecondaryHover,
      },
      '&:focus': {
        background: theme.palette.btnSecondaryFocus,
      },
      '&.Mui-disabled': {
        background: theme.palette.btnSecondaryDisabled,
        color: theme.palette.black,
      },
    },
    '&.MuiButton-outlined': {
      background: theme.palette.btnSecondaryOutlineDefault,
      border: `1px solid ${theme.palette.btnSecondaryOutlineDefaultBorder}`,
      color: theme.palette.powderWhite,
      fontStyle: 'normal',
      transition: 'none',
      textTransform: 'unset',
      fontFamily: 'var(--font-lato)',
      '&:hover': {
        background: theme.palette.btnSecondaryOutlineHover,
        border: `1px solid ${theme.palette.btnSecondaryOutlineHoverBorder}`,
      },
      '&:focus': {
        background: theme.palette.btnSecondaryOutlineFocus,
        border: `1px solid ${theme.palette.btnSecondaryOutlineFocusBorder}`,
      },
      '&.Mui-disabled': {
        background: theme.palette.btnSecondaryOutlineDisabled,
        color: theme.palette.powderWhite,
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
export default SecondaryButton;
