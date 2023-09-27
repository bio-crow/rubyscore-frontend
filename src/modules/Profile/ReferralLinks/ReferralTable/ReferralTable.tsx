'use client';
import { Box } from '@mui/system';
import { referralBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import PrimaryTable from '@/components/common/ui/PrimaryTable/PrimaryTable';
import { useAppDispatch } from '@/core/store';
import { FC, useEffect } from 'react';
import { getReferrals } from '@/core/thunk/user.thunk';
import { IReferral } from '@/types/index';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
interface Props {
  data: IReferral[];
}
const ReferralTable: FC<Props> = ({ data }) => {
  const prepareData = data.map((item, index) => {
    return { ...item, rank: index + 1 };
  });
  return (
    <Box>
      <PrimaryTable
        getRowId={params => params.wallet}
        rows={prepareData}
        columns={referralBaseColumns}
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
    </Box>
  );
};
export default ReferralTable;
