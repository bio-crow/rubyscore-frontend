import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { ReferralUserCell } from '@/utils/baseTableCell';
export const referralBaseColumns: GridColDef[] = [
  {
    field: 'rank',
    headerName: 'Rank',
    sortable: false,
    width: 150,
  },
  {
    field: 'name',
    headerName: 'Name',
    sortable: false,
    flex: 1,
    minWidth: 200,
    renderCell: ReferralUserCell,
  },
  {
    field: 'score',
    headerName: 'Points',
    sortable: false,
    width: 150,
  },
];
export const leaderBoardBaseColumns: GridColDef[] = [
  {
    field: 'rank',
    headerName: 'Rank',
    sortable: false,
    width: 150,
  },
  {
    field: 'name',
    headerName: 'Name',
    sortable: false,
    flex: 1,
    minWidth: 250,
    renderCell: ReferralUserCell,
  },
  {
    field: 'score',
    headerName: 'Points',
    sortable: false,
    width: 150,
  },
  {
    field: 'level',
    headerName: 'Level',
    sortable: false,
    width: 150,
  },
  {
    field: 'activeReferrals',
    headerName: 'Active Referrals',
    sortable: false,
    width: 200,
  },
  {
    field: 'maxStreak',
    headerName: 'Max Steak',
    sortable: false,
    width: 150,
  },
];
export const leaderBoardBaseColumnsShort: GridColDef[] = [
  {
    field: 'rank',
    headerName: 'Rank',
    sortable: false,
    width: 150,
  },
  {
    field: 'name',
    headerName: 'Name',
    sortable: false,
    flex: 1,
    minWidth: 250,
    renderCell: ReferralUserCell,
  },
  {
    field: 'score',
    headerName: 'Points',
    sortable: false,
    width: 150,
  },
  {
    field: 'level',
    headerName: 'Level',
    sortable: false,
    width: 150,
  },
];
