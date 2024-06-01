import { styled } from '@mui/system';
import { Switch } from '@mui/material';
import { CustomTheme } from '@/theme/index';

const CustomSwitch = styled(Switch)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    width: 32,
    height: 15,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 5,
        boxShadow: 'none',
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(18px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 5,
      '&.Mui-checked': {
        boxShadow: 'none',
        transform: 'translateX(18px)',
        color: theme.palette.powderWhite,
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'transparent',
          border: `2px solid ${theme.palette.lightGreen}`,
        },
        '& .MuiSwitch-thumb': {
          boxShadow: 'none',
          backgroundColor: theme.palette.lightGreen,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 5,
      height: 5,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: 'transparent',
      border: `2px solid ${theme.palette.white50}`,
      boxSizing: 'border-box',
    },
  };
});
export default CustomSwitch;
