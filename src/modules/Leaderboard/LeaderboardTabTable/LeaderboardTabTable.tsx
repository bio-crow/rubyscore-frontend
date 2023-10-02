import { Box } from '@mui/system';
import { leaderBoardBaseColumns } from '@/utils/baseTableColumns';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { useRouter } from 'next/navigation';
import { appRoutes } from '@/constants/routes';
import { ILeaderboardData } from '@/types/index';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import { useAppSelector } from '@/core/store';
import CustomPagination from '@/components/common/CustomPagination/CustomPagination';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import LeaderBoardPagination from '@/modules/Leaderboard/LeaderboardTabTable/LeaderBoardPagination/LeaderBoardPagination';

interface Props {
  tableData: ILeaderboardData[];
}

const LeaderboardTabTable: FC<Props> = ({ tableData }) => {
  const router = useRouter();

  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <SecondaryTable
        getRowId={params => params.wallet}
        rows={tableData}
        getRowClassName={params =>
          leaderboardUser?.wallet === params.row.wallet ? 'active-user-highlight' : ''
        }
        columns={leaderBoardBaseColumns}
        slots={{
          noRowsOverlay: CustomNoRows,
        }}
        onRowClick={() => router.push(appRoutes.LEADERBOARD_USER)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableRowSelectionOnClick
      />
      <LeaderBoardPagination />
    </Box>
  );
};
export default LeaderboardTabTable;
