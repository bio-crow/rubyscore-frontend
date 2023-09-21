import { styled } from '@mui/system';
import { Tabs } from '@mui/material';
import { CustomTheme } from '@/theme/index';

const LeaderboardUserTabs = styled(Tabs)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '.MuiButtonBase-root': {
      borderRadius: '10px 10px 0px 0px',
      fontFamily: 'var(--font-inter)',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '32px',
      textTransform: 'unset',
    },
    '.MuiTabs-scroller': {
      borderBottom: `1px solid ${theme.palette.white10}`,
    },
    '.MuiButtonBase-root.Mui-selected': {
      color: theme.palette.lightGreen,
      '.active-value': {
        color: theme.palette.powderWhite,
      },
    },
    '.MuiTabs-indicator': {
      background: theme.palette.btnPrimaryDefault,
    },
  };
});
export default LeaderboardUserTabs;
