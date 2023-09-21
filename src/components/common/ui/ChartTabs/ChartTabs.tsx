import { styled } from '@mui/system';
import { Tabs } from '@mui/material';
import { CustomTheme } from '@/theme/index';

const ChartTabs = styled(Tabs)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '.MuiButtonBase-root': {
      borderRadius: '10px 10px 0px 0px',
      fontFamily: 'var(--font-lato)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 700,
      padding: '8px 8px',
      lineHeight: '19px',
      textTransform: 'unset',
    },
    '.MuiTabs-scroller': {
      borderBottom: `1px solid ${theme.palette.white10}`,
    },
    '.MuiButtonBase-root.Mui-selected': {
      color: theme.palette.lightGreen,
    },
    '.MuiTabs-indicator': {
      background: theme.palette.btnPrimaryDefault,
    },
  };
});
export default ChartTabs;
