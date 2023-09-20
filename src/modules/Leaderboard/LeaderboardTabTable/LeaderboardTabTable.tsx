import { Box } from '@mui/system';

import { leaderBoardBaseColumns } from '@/utils/baseTableColumns';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import { mokeLeaderboardData } from '@/modules/Leaderboard/LeaderboardTabTable/mokeLeaderboardData';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { useRouter } from 'next/navigation';
import { appRoutes } from '../../../constants/routes';
const LeaderboardTabTable = () => {
  const router = useRouter();
  return (
    <Box>
      <SecondaryTable
        getRowId={params => params.userName}
        rows={mokeLeaderboardData}
        columns={leaderBoardBaseColumns}
        slots={{
          pagination: CustomPagination,
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
