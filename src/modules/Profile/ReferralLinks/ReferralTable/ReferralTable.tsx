'use client';
import { Box } from '@mui/system';
import { referralBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import PrimaryTable from '@/components/common/ui/PrimaryTable/PrimaryTable';
import { useAppDispatch } from '@/core/store';
import { FC, useEffect } from 'react';
import { getReferrals } from '@/core/thunk/user.thunk';
import { IReferral } from '@/types/index';
interface Props {
  data: IReferral[];
}
const ReferralTable: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const prepareData = data.map((item, index) => {
    return { ...item, rank: index + 1 };
  });
  useEffect(() => {
    dispatch(getReferrals());
  }, []);
  return (
    <Box>
      <PrimaryTable
        getRowId={params => params.wallet}
        rows={prepareData}
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
