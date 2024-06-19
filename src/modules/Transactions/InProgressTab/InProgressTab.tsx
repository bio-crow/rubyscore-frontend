import { Box } from '@mui/system';
import InProgressTable from '@/modules/Transactions/InProgressTab/InProgressTable/InProgressTable';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import TrashIcon from '@/components/common/Icons/TrashIcon';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import {
  deleteTransactions,
  getMultisendTransactionsHistory,
  getMultisendTransactionsInProgress,
} from '@/core/thunk/deposit.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';
import RefreshIcon from '@/components/common/Icons/RefreshIcon';

const InProgressTab = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const inProgressData = useAppSelector(state => state.depositState.inProgressData);
  const activeProject = useAppSelector(state => state.depositState.activeProject);
  const deleteLoading = useAppSelector(state => state.depositState.deleteLoading);
  const inProgressDataLoading = useAppSelector(state => state.depositState.inProgressDataLoading);
  useEffect(() => {
    dispatch(getMultisendTransactionsInProgress({ project: activeProject }));
  }, [activeProject]);
  const deleteAll = () => {
    const ids = inProgressData.map(item => item.id);
    dispatch(deleteTransactions({ ids }));
  };
  const refresh = () => {
    dispatch(getMultisendTransactionsInProgress({ project: activeProject }));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        flex: '1',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
        }}
      >
        <FourthButton
          className='green'
          startIcon={<RefreshIcon fill={theme.palette.lightGreen} />}
          variant='outlined'
          loading={inProgressDataLoading}
          onClick={refresh}
          size='medium'
        >
          Refresh
        </FourthButton>
        <FourthButton
          className='white'
          loading={deleteLoading}
          startIcon={<TrashIcon fill={theme.palette.powderWhite} />}
          variant='outlined'
          onClick={deleteAll}
          size='medium'
        >
          Delete all
        </FourthButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: '1',
        }}
      >
        <InProgressTable data={inProgressData} />
      </Box>
    </Box>
  );
};
export default InProgressTab;
