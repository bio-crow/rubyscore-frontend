'use client';
import { Box } from '@mui/system';
import { InProgressBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { deleteTransactionById } from '@/core/thunk/deposit.thunk';
interface Props {
  data: any[];
}

const InProgressTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const prepareData = data;
  const deleteRow = (params: GridRenderCellParams<any>) => {
    const id = params?.row?.id as number;
    dispatch(deleteTransactionById({ id }));
  };
  const dispatch = useAppDispatch();
  const columns = [
    ...InProgressBaseColumns,
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
      getRowId={params => uuidv4()}
      rows={prepareData}
      columns={columns}
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
export default InProgressTable;
