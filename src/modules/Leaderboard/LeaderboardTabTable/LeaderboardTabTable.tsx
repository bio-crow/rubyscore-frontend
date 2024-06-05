import { Box } from '@mui/system';
import { leaderBoardBaseColumns, leaderBoardBaseColumnsShort } from '@/utils/baseTableColumns';
import PrimaryTable from '@/components/common/ui/PrimaryTable/PrimaryTable';
import { useRouter, useSearchParams } from 'next/navigation';
import { appRoutes } from '@/constants/routes';
import { ILeaderboardData } from '@/types/index';
import { FC } from 'react';
import CustomNoRows from '@/components/common/CustomNoRows/CustomNoRows';
import { useAppSelector } from '@/core/store';
import LeaderBoardPagination from '@/modules/Leaderboard/LeaderboardTabTable/LeaderBoardPagination/LeaderBoardPagination';

interface Props {
  tableData: ILeaderboardData[];
  activeTab: any;
}

const LeaderboardTabTable: FC<Props> = ({ tableData, activeTab }) => {
  const router = useRouter();
  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  const filteredUser = useAppSelector(state => state.leaderboardState.filteredUser);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <PrimaryTable
        getRowId={params => params.wallet}
        rows={tableData}
        getRowClassName={params =>
          leaderboardUser?.profile.wallet === params.row.wallet ? 'active-user-highlight' : ''
        }
        columns={activeTab.index === 'rubyscore' ? leaderBoardBaseColumns : leaderBoardBaseColumnsShort}
        slots={{
          noRowsOverlay: CustomNoRows,
        }}
        onRowClick={(data: any) => {
          router.push(`${appRoutes.LEADERBOARD_USER}/${data.row.wallet}?net=${activeTab.index}`);
        }}
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
      {!filteredUser && <LeaderBoardPagination />}
    </Box>
  );
};
export default LeaderboardTabTable;
