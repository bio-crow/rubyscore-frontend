import { Box } from '@mui/system';
import InProgressTable from '@/modules/Transactions/InProgressTab/InProgressTable/InProgressTable';
import { inProgressData } from '@/modules/Transactions/InProgressTab/InProgressTable/mokeInProgressData';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import TrashIcon from '@/components/common/Icons/TrashIcon';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import {
  getMultisendTransactionsHistory,
  getMultisendTransactionsInProgress,
} from '@/core/thunk/deposit.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useEffect } from 'react';

const InProgressTab = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const inProgressData = useAppSelector(state => state.depositState.inProgressData);
  useEffect(() => {
    dispatch(getMultisendTransactionsInProgress());
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '1100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <FourthButton
          className='white'
          startIcon={<TrashIcon fill={theme.palette.powderWhite} />}
          variant='outlined'
          size='medium'
        >
          Delete all
        </FourthButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <InProgressTable data={inProgressData} />
      </Box>
    </Box>
  );
};
export default InProgressTab;
