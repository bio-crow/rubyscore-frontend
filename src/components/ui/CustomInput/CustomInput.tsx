import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { CustomTheme } from '@/theme/index';

const CustomInput = styled(TextField)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiTextField-root': {
      '.MuiOutlinedInput-root': {
        background: theme.palette.white10,
        border: `none`,
        borderRadius: '10px',
        input: {
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          '&:hover': {
            border: `1px solid ${theme.palette.white50}`,
          },
          '&:focus': {
            border: `1px solid ${theme.palette.lightGreen}`,
          },
        },
        fieldset: {
          border: 'none',
        },
      },
    },
  };
});
export default CustomInput;
