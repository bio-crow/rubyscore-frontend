import { styled } from '@mui/system';
import { CustomTheme } from '@/theme/index';
import { DataGrid } from '@mui/x-data-grid';

const SecondaryTable = styled(DataGrid)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiDataGrid-root': {
      border: `1px solid ${theme.palette.white10}`,
      borderRadius: '10px',
    },
    '.MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '.MuiDataGrid-columnHeaders': {
      background: theme.palette.white10,
      borderBottom: 'none',
      color: theme.palette.white50,
      textAlign: 'right',
      fontFamily: 'var(--font-lato)',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '24px',
    },
    '.MuiDataGrid-columnHeader': {
      '&:focus-within': {
        outline: 'none',
      },
      ':focus': {
        outline: 'none',
      },
    },
    '.MuiDataGrid-columnHeaderTitleContainer': {
      paddingLeft: '20px',
    },
    '.MuiDataGrid-row:hover': {
      cursor: 'pointer',
    },
    '.MuiDataGrid-cell': {
      border: 'none',
      textAlign: 'right',
      fontFamily: 'var(--font-lato)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '24px',
      paddingLeft: '30px',
      '&:focus-within': {
        outline: 'none',
      },
      ':focus': {
        outline: 'none',
      },
    },
    '.MuiDataGrid-virtualScroller': {
      background: theme.palette.backgroundColor,
      padding: '0',
    },
    '.MuiDataGrid-footerContainer': {
      display: 'none',
    },
    '.MuiDataGrid-main': {
      borderRadius: '10px',
    },
    '.active-user-highlight': {
      background: theme.palette.gray,
    },
  };
});
export default SecondaryTable;
