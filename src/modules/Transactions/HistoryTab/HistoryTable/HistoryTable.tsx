'use client';
import { Box } from '@mui/system';
import { HistoryBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import NewWindowIcon from '@/components/common/Icons/NewWindowIcon';
interface Props {
  data: any[];
}
const HistoryTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const prepareData = data;
  const openLink = params => {};
  const columns = [
    ...HistoryBaseColumns,
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
              alignItems: 'center',
              gap: '5px',
              color: theme.palette.lightGreen,
            }}
            onClick={() => openLink(params)}
          >
            <Box>Link</Box>
            <NewWindowIcon fill={theme.palette.lightGreen} />
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
export default HistoryTable;
