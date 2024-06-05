import { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { GasHeader, InputTableCell, NetworkCell, ReferralUserCell, TimeHeader } from '@/utils/baseTableCell';
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
    renderCell: (params: any) => <Box>{Math.round(params.row.score)}</Box>,
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
  /*  {
    field: 'score',
    headerName: 'Points',
    sortable: false,
    renderCell: (params: any) => <Box>{Math.round(params.row.score)}</Box>,
    width: 150,
  },*/
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
  /* {
    field: 'score',
    headerName: 'Points',
    sortable: false,
    renderCell: (params: any) => <Box>{Math.round(params.row.score)}</Box>,
    width: 150,
  },*/
  {
    field: 'level',
    headerName: 'Level',
    sortable: false,
    width: 150,
  },
];
export const BalanceAndSentBaseColumns: GridColDef[] = [
  {
    field: 'address',
    headerName: 'Address',
    sortable: false,
    flex: 1,
    renderCell: InputTableCell,
    minWidth: 200,
  },
  {
    field: 'value',
    headerName: 'Value',
    sortable: false,
    renderCell: InputTableCell,
    width: 150,
  },
  {
    field: 'commission',
    headerName: 'Commission',
    sortable: false,
    renderCell: InputTableCell,
    width: 150,
  },
  {
    field: 'network',
    headerName: 'Network',
    sortable: false,
    renderCell: InputTableCell,
    width: 150,
  },
  {
    field: 'gas',
    headerName: 'Gas',
    renderCell: InputTableCell,
    sortable: false,
    renderHeader: GasHeader,
    width: 200,
  },
  {
    field: 'time',
    headerName: 'Time',
    renderCell: InputTableCell,
    renderHeader: TimeHeader,
    sortable: false,
    width: 150,
  },
];
export const InProgressBaseColumns: GridColDef[] = [
  {
    field: 'to',
    headerName: 'Address',
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'value',
    headerName: 'Value',
    sortable: false,
    width: 100,
  },
  {
    field: 'commission',
    headerName: 'Commission',
    sortable: false,
    width: 150,
  },
  {
    field: 'project',
    headerName: 'Network',
    sortable: false,
    width: 150,
    renderCell: NetworkCell,
  },
  {
    field: 'L1Gas',
    headerName: 'Gas',
    sortable: false,
    width: 150,
  },
  {
    field: 'sendAt',
    headerName: 'Time',
    sortable: false,
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 150,
  },
];
export const RefferalsBaseColumns: GridColDef[] = [
  {
    field: 'RefferalLink',
    headerName: 'Refferal link',
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'NumberOfReferrals',
    headerName: 'Number of referrals',
    sortable: false,
    width: 200,
  },
  {
    field: 'transactions',
    headerName: 'Transactions',
    sortable: false,
    width: 150,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    sortable: false,
    width: 150,
  },
];
export const HistoryBaseColumns: GridColDef[] = [
  {
    field: 'to',
    headerName: 'Address',
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'value',
    headerName: 'Value',
    sortable: false,
    width: 100,
  },
  {
    field: 'commission',
    headerName: 'Commission',
    sortable: false,
    width: 150,
  },
  {
    field: 'project',
    headerName: 'Network',
    sortable: false,
    width: 150,
    renderCell: NetworkCell,
  },
  {
    field: 'createdAt',
    headerName: 'Time',
    sortable: false,
    width: 200,
  },
  {
    field: 'sendAt',
    headerName: 'Output date',
    sortable: false,
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 150,
  },
  {
    field: 'txHashLink',
    headerName: 'Link',
    sortable: false,
    width: 150,
  },
];
