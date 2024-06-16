'use client';
import { Box } from '@mui/system';
import { RefferalsBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { v4 as uuidv4 } from 'uuid';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { fetchClaimReferrals } from '@/core/api/deposit.api';
import { IMultisendReferralsClaimResponse } from '@/core/types';
import { IReferralClaimData } from '@/types/index';
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
      renderCell: (params: GridRenderCellParams<any>) => {
        const { row } = params;
        const profit = row.profit;
        return (
          <Box
            key={uuidv4()}
            sx={{
              display: 'flex',
              width: '120px',
              color: theme.palette.lightGreen,
            }}
          >
            <SecondaryButton
              onClick={e => {
                e.stopPropagation();
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
