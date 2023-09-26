import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { CustomTheme } from '@/theme/index';

const CustomInput = styled(TextField)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiTextField-root': {
      '.MuiOutlinedInput-root': {
        background: theme.palette.white10,
        border: `none`,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '23px',
        borderRadius: '10px',
        paddingRight: '0px',
        input: {
          borderRadius: '10px',
          padding: '12px 24px 12px 24px',
          paddingRight: '90px',
          border: `1px solid ${theme.palette.white10}`,
          '&:hover': {
            border: `1px solid ${theme.palette.white50}`,
          },
          '&:focus': {
            border: `1px solid ${theme.palette.lightGreen}`,
          },
        },
        '.MuiBox-root': {
          position: 'absolute',
          width: '60px',
          display: 'flex',
          justifyContent: 'flex-end',
          textAlign: 'right',
          right: '24px',
        },
        fieldset: {
          border: 'none',
        },
      },
    },
  };
});
export default CustomInput;
