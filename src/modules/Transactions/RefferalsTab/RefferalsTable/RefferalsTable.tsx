'use client';
import { Box } from '@mui/system';
import { RefferalsBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { claimReferrals } from '@/core/thunk/deposit.thunk';
interface Props {
  data: any[];
}
const RefferalsTable: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const referralLoadingId = useAppSelector(state => state.depositState.referralLoadingId);
  const prepareData = data;
  const claim = async (params: GridRenderCellParams<any>) => {
    const { row } = params;
    dispatch(
      claimReferrals({
        id: row.id,
        project: row.project.name,
        referralCode: row.referralCode,
      })
    );
  };
  const columns = [
    ...RefferalsBaseColumns,
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params: GridRenderCellParams<any>) => {
        const { row } = params;
        const profit = row.profit;
        return (
          <Box
            key={row.id}
            sx={{
              display: 'flex',
              width: '120px',
              color: theme.palette.lightGreen,
            }}
          >
            <SecondaryButton
              onClick={() => {
                claim(params);
              }}
              variant='contained'
              size='medium'
              fullWidth
              disabled={!profit || profit == 0}
              loading={row.id === referralLoadingId}
            >
              Claim
            </SecondaryButton>
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
      disableColumnSelector
      disableDensitySelector
      disableRowSelectionOnClick
    />
  );
};
export default RefferalsTable;
