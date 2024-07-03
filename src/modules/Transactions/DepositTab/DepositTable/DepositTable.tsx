'use client';
import { DepositsBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC, useState } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import { useCustomTheme } from '@/hooks/useCustomTheme';

interface Props {
  data: any[];
}

const DepositTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const [sortModel, setSortModel] = useState<any>([
    {
      field: 'depositedAt',
      sort: 'desc',
    },
  ]);
  const prepareData = data;
  const openLink = (params: GridRenderCellParams<any>) => {};
  const columns = [...DepositsBaseColumns];
  return (
    <SecondaryTable
      getRowId={params => uuidv4()}
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
export default DepositTable;
