import { Box } from '@mui/system';
import { leaderBoardBaseColumns } from '@/utils/baseTableColumns';
import SecondaryTable from '@/components/common/ui/SecondaryTable/SecondaryTable';
import { useRouter } from 'next/navigation';
import { appRoutes } from '@/constants/routes';
import { ILeaderboardData } from '@/types/index';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import { useAppSelector } from '@/core/store';

interface Props {
  tableData: ILeaderboardData[];
}

const LeaderboardTabTable: FC<Props> = ({ tableData }) => {
  const router = useRouter();
  const prepareData = tableData.map((item, index) => {
    return { ...item, rank: item.rank || index + 1 };
  });
  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  return (
    <Box>
      <SecondaryTable
        getRowId={params => params.wallet}
        rows={prepareData}
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
    </Box>
  );
};
export default LeaderboardTabTable;
