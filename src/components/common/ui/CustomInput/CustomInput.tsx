import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { CustomTheme } from '@/theme/index';

const CustomInput = styled(TextField)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiTextField-root': {
      '.MuiOutlinedInput-root': {
        background: theme.palette.white10,
        border: `1px solid ${theme.palette.white10}`,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '23px',
        borderRadius: '10px',
        padding: '12px 24px 12px 24px',
        '&:hover': {
          border: `1px solid ${theme.palette.white50}`,
        },
        '&:focus': {
          border: `1px solid ${theme.palette.lightGreen}`,
        },
        '&.Mui-error': {
          borderColor: 'rgb(244, 67, 54)',
        },
        input: {
          borderRadius: '10px',
          padding: 0,
          border: `none`,
          '&:hover': {
            border: `none`,
          },
          '&:focus': {
            border: `none`,
          },
        },
        fieldset: {
          border: 'none',
        },
      },
      '.MuiInputBase-sizeSmall': {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '16px',
        borderRadius: '10px',
        padding: '10px 16px 10px 16px',
      },
    },
  };
});
export default CustomInput;
