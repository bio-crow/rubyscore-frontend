'use client';
import { Box } from '@mui/system';
import { InProgressBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC, useState } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { deleteTransactionById } from '@/core/thunk/deposit.thunk';
interface Props {
  data: any[];
}

const InProgressTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const [sortModel, setSortModel] = useState<any>([
    {
      field: 'sendAt',
      sort: 'asc',
    },
  ]);
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
            key={params.row.id}
            sx={{
              display: 'flex',
              color: theme.palette.red,
            }}
            onClick={e => {
              e.stopPropagation();
              deleteRow(params);
            }}
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
      sortModel={sortModel}
      onSortModelChange={model => setSortModel(model)}
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
