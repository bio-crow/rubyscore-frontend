import { styled } from '@mui/system';
import { CustomTheme } from '@/theme/index';
import { DataGrid } from '@mui/x-data-grid';

const PrimaryTable = styled(DataGrid)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '&.MuiDataGrid-root': {
      border: 'none',
      borderRadius: 'unset',
    },
    '.MuiDataGrid-columnHeaders': {
      background: theme.palette.gray,
      borderBottom: 'none',
      color: theme.palette.powderWhite,
      textAlign: 'right',
      fontFamily: 'var(--font-lato)',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '24px',
    },
    '.MuiDataGrid-columnHeaderTitleContainer': {
      paddingLeft: '20px',
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
      '&:focus': {
        outline: 'unset',
      },
    },
    '.MuiDataGrid-virtualScroller': {
      background: theme.palette.black,
    },
    '.MuiDataGrid-footerContainer': {
      border: 'none',
      paddingTop: '20px',
    },
    '.MuiDataGrid-main': {
      borderRadius: '10px',
    },
  };
});
export default PrimaryTable;
