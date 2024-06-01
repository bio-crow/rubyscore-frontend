'use client';
import { Box } from '@mui/system';
import { RefferalsBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { v4 as uuidv4 } from 'uuid';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
interface Props {
  data: any[];
}
const RefferalsTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const prepareData = data;
  const claim = params => {};
  const columns = [
    ...RefferalsBaseColumns,
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      width: 200,
      renderCell: (params: GridRenderCellParams<any>) => {
        return (
          <Box
            key={uuidv4()}
            sx={{
              display: 'flex',
              width: '120px',
              color: theme.palette.lightGreen,
            }}
            onClick={() => claim(params)}
          >
            <SecondaryButton variant='contained' size='medium' fullWidth>
              Claim
            </SecondaryButton>
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
export default RefferalsTable;
