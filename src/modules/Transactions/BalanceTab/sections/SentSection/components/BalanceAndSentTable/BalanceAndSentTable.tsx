'use client';
import { Box } from '@mui/system';
import { BalanceAndSentBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC, useEffect } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { v4 as uuidv4 } from 'uuid';
interface Props {
  data: any[];
}
const BalanceAndSentTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const prepareData = data;
  const deleteRow = params => {};
  const columns = [
    ...BalanceAndSentBaseColumns,
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      width: 150,
      renderCell: (params: GridRenderCellParams<any>) => {
        return (
          <Box
            key={uuidv4()}
            sx={{
              display: 'flex',
              color: theme.palette.red,
            }}
            onClick={() => deleteRow(params)}
          >
            Delete
          </Box>
        );
      },
    },
  ];
  return (
    <SecondaryTable
      getRowId={params => params.id}
      rows={prepareData}
      columns={columns}
      rowHeight={60}
      slots={{
        pagination: CustomPagination,
        noRowsOverlay: CustomNoRows,
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      autoHeight
      disableColumnFilter
      disableColumnMenu
      disableRowSelectionOnClick
    />
  );
};
export default BalanceAndSentTable;
