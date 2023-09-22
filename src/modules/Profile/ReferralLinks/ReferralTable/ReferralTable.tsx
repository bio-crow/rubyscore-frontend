'use client';
import { Box } from '@mui/system';
import { mokeTableData } from '@/modules/Profile/ReferralLinks/mokeTableData';
import { referralBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import PrimaryTable from '@/components/common/ui/PrimaryTable/PrimaryTable';
import { useAppDispatch } from '@/core/store';
import { useEffect } from 'react';
import { getReferrals } from '@/core/thunk/user.thunk';

const ReferralTable = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getReferrals());
  }, []);
  return (
    <Box>
      <PrimaryTable
        getRowId={params => params.userName}
        rows={mokeTableData}
        columns={referralBaseColumns}
        slots={{
          pagination: CustomPagination,
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
