'use client';
import { Box } from '@mui/system';
import { BalanceAndSentBaseColumns } from '@/utils/baseTableColumns';
import { FC, useContext, useEffect } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { v4 as uuidv4 } from 'uuid';

import { BalanceAndSentFormContext } from '@/context/index';

interface Props {
  data: any[];
}

const BalanceAndSentTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const { control, fields, append, removeArrayField } = useContext(BalanceAndSentFormContext);
  const prepareData = fields.map((field: any, index: number) => {
    return {
      index: index,
      fieldArrayName: 'array',
      control: control,
      id: field.id,
    };
  });
  const deleteRow = (params: GridRenderCellParams<any>) => {
    removeArrayField(params.row.index);
  };
  const columns = [
    ...BalanceAndSentBaseColumns,
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      width: 80,
      renderCell: (params: GridRenderCellParams<any>) => {
        return (
          <Box
            key={uuidv4()}
            sx={{
              display: 'flex',
              alignSelf: 'flex-start',
              paddingTop: '20px',
              cursor: 'pointer',
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
      getRowId={params => params.index}
      rows={prepareData}
      columns={columns}
      rowHeight={72}
      slots={{
        pagination: null,
        noRowsOverlay: CustomNoRows,
      }}
      autoHeight
      disableColumnFilter
      disableColumnMenu
      disableRowSelectionOnClick
    />
  );
};
export default BalanceAndSentTable;
