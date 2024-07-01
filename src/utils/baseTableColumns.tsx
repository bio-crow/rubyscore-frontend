import { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import {
  CommissionCell,
  FromNowCell,
  GasHeader,
  InputAddressTableCell,
  InputDateCell,
  InputValueTableCell,
  LinkCell,
  NetworkCell,
  NetworkHeader,
  ProfitCell,
  ReferralLinkCell,
  ReferralUserCell,
  SelectTableCell,
  TimeHeader,
  TimerCell,
} from '@/utils/baseTableCell';
import { dateComparator, numberComparator } from '@/utils/baseTableComparators';
import { BALANCE_AND_SEND_FIELDS } from '@/constants/formFields';
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
    field: BALANCE_AND_SEND_FIELDS.ADDRESS,
    headerName: 'Address',
    sortable: false,
    renderCell: InputAddressTableCell,
    width: 370,
  },
  {
    field: BALANCE_AND_SEND_FIELDS.VALUE,
    headerName: 'Value',
    sortable: false,
    renderCell: InputValueTableCell,
    width: 200,
  },
  {
    field: 'commission',
    headerName: 'Commission',
    sortable: false,
    renderCell: CommissionCell,
    width: 130,
  },
  {
    field: BALANCE_AND_SEND_FIELDS.NETWORK,
    headerName: 'Network | Balance (ETH)',
    sortable: false,
    renderCell: SelectTableCell,
    width: 250,
  },
  /* {
    field: 'gas',
    headerName: 'Gas',
    sortable: false,
    renderHeader: GasHeader,
    width: 170,
  },*/
  {
    field: 'time',
    headerName: 'Time',
    renderHeader: TimeHeader,
    renderCell: InputDateCell,
    sortable: false,
    width: 240,
  },
];
export const InProgressBaseColumns: GridColDef[] = [
  {
    field: 'to',
    headerName: 'Address',
    sortable: false,
    width: 400,
  },
  {
    field: 'valueFormatted',
    headerName: 'Value',
    sortComparator: numberComparator,
    sortable: true,
    width: 150,
  },
  {
    field: 'taxFormatted',
    headerName: 'Commission',
    sortComparator: numberComparator,
    sortable: true,
    width: 150,
  },
  {
    field: 'project',
    headerName: 'Network',
    sortable: false,
    width: 150,
    renderHeader: NetworkHeader,
    renderCell: NetworkCell,
  },
  {
    field: 'sendAt',
    headerName: 'Time',
    sortable: true,
    renderCell: TimerCell,
    sortComparator: dateComparator,
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 130,
  },
];
export const RefferalsBaseColumns: GridColDef[] = [
  {
    field: 'referralCode',
    headerName: 'Refferal link',
    sortable: false,
    renderCell: ReferralLinkCell,
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'referralsCount',
    headerName: 'Number of referrals',
    sortable: false,
    width: 200,
  },
  {
    field: 'transactionsCount',
    headerName: 'Transactions',
    sortable: false,
    width: 150,
  },
  {
    field: 'profit',
    headerName: 'Amount',
    sortable: false,
    renderCell: ProfitCell,
    width: 150,
  },
];
export const HistoryBaseColumns: GridColDef[] = [
  {
    field: 'to',
    headerName: 'Address',
    sortable: false,
    width: 400,
  },
  {
    field: 'valueFormatted',
    headerName: 'Value',
    sortable: true,
    sortComparator: numberComparator,
    width: 150,
  },
  {
    field: 'taxFormatted',
    headerName: 'Commission',
    sortComparator: numberComparator,
    sortable: true,
    width: 150,
  },
  {
    field: 'project',
    headerName: 'Network',
    sortable: false,
    width: 150,
    renderHeader: NetworkHeader,
    renderCell: NetworkCell,
  },
  {
    field: 'sendAt',
    headerName: 'Time',
    sortable: true,
    width: 200,
    renderCell: FromNowCell,
    sortComparator: dateComparator,
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
    renderCell: LinkCell,
    width: 100,
  },
];

export const DepositsBaseColumns: GridColDef[] = [
  {
    field: 'from',
    headerName: 'From',
    sortable: false,
    width: 400,
  },
  {
    field: 'to',
    headerName: 'To',
    sortable: true,
    sortComparator: numberComparator,
    width: 400,
  },
  {
    field: 'value',
    headerName: 'Value',
    sortComparator: numberComparator,
    sortable: true,
    width: 150,
  },
  {
    field: 'project',
    headerName: 'Network',
    sortable: false,
    width: 150,
    renderHeader: NetworkHeader,
    renderCell: NetworkCell,
  },
  {
    field: 'depositedAt',
    headerName: 'Time',
    sortable: true,
    width: 200,
    renderCell: FromNowCell,
    sortComparator: dateComparator,
  },
  {
    field: 'txLink',
    headerName: 'Link',
    sortable: false,
    renderCell: LinkCell,
    width: 100,
  },
];
