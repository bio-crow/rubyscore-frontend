import { Box } from '@mui/system';

import { leaderBoardBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { useRouter } from 'next/navigation';
import { appRoutes } from '@/constants/routes';
import { ILeaderboardData } from '@/types/index';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';

interface Props {
  tableData: ILeaderboardData[];
}

const LeaderboardTabTable: FC<Props> = ({ tableData }) => {
  const router = useRouter();
  const prepareData = tableData.map((item, index) => {
    return { ...item, rank: index + 1 };
  });
  return (
    <Box>
      <SecondaryTable
        getRowId={params => params.wallet}
        rows={prepareData}
        columns={leaderBoardBaseColumns}
        slots={{
          pagination: CustomPagination,
          noRowsOverlay: CustomNoRows,
        }}
        onRowClick={() => router.push(appRoutes.LEADERBOARD_USER)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
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
export default LeaderboardTabTable;
