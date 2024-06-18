import { Box } from '@mui/system';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import PlusIcon from '@/components/common/Icons/PlusIcon';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import RefferalsTable from '@/modules/Transactions/RefferalsTab/RefferalsTable/RefferalsTable';
import { useEffect } from 'react';
import { getUserReferrals } from '@/core/thunk/deposit.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';

const RefferalsTab = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const referralsData = useAppSelector(state => state.depositState.referralsData);
  useEffect(() => {
    dispatch(getUserReferrals());
  }, []);
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
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <FourthButton
          className='green'
          startIcon={<PlusIcon fill={theme.palette.lightGreen} />}
          variant='outlined'
          size='medium'
        >
          Add Refferal link
        </FourthButton>
      </Box> */}
      <Box
        sx={{
          display: 'flex',
          flex: '1',
        }}
      >
        <RefferalsTable data={referralsData} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            color: theme.palette.powderWhite,
          }}
          className='H2-Lato-fw-700-fs-24'
        >
          Referral links
        </Box>
        <Box
          sx={{
            color: theme.palette.white50,
          }}
          className='Body-Lato-fw-500-fs-18'
        >
          {`Lorem Ipsu is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
        </Box>
      </Box>
    </Box>
  );
};
export default RefferalsTab;
