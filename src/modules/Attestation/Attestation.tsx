import Layout from '@/components/layout/Layout/Layout';
import { Box } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import PoweredBy from '@/modules/Attestation/PoweredBy/PoweredBy';
import VeraxActions from '@/modules/Attestation/VeraxActions/VeraxActions';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { useLayoutEffect } from 'react';
import { getReferrals, getUserScoreList } from '@/core/thunk/user.thunk';
import { useAccount } from 'wagmi';
import { setUserScoreList } from '@/core/state/user.state';
import { getAttestationData } from '@/core/thunk/attestation.thunk';
import { setAttestationPrice, setAttestationStatus } from '@/core/state/attestation.state';
const Attestation = () => {
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const theme = useCustomTheme();
  useLayoutEffect(() => {
    if (address && isAuth) {
      dispatch(getReferrals());
      dispatch(getUserScoreList({ wallet: address, net: 1 }));
      dispatch(getAttestationData({ address: address, project: 'linea' }));
    }
    return () => {
      dispatch(setAttestationStatus(false));
      dispatch(setAttestationPrice(null));
      dispatch(setUserScoreList(null));
    };
  }, [address, isAuth]);
  return (
    <Layout>
      <Box
        sx={{
          display: 'grid',
          gap: '20px',
          width: '100%',
          padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
          gridTemplateColumns: { xs: '1fr', xl: '1fr 333px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='H1-Lato-fw-700-fs-32'
          >
            RubyScore Proof of Humanity Attestation for Linea
          </Box>
          <VeraxActions />
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-600-fs-14'
          >
            <p>
              To successfully complete the Proof of Humanity attestation for Linea, you are required to
              accumulate 15 Points on the Linea network, equivalent to level 3 and higher.
            </p>
            <p>
              RubyScore uses on-chain metrics to determine the points assigned to each wallet, reflecting your
              activity on the Linea network. These points serve to identify and reward active users on the
              network. The metrics influencing your RubyScore include:
            </p>
          </Box>
          <Box
            sx={{
              color: theme.palette.powderWhite,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: '20px', md: '80px' },
            }}
            className='Body-Lato-fw-600-fs-14'
          >
            <ul style={{ padding: 0, listStyle: 'inside' }}>
              <li>Amount on balance</li>
              <li>Transactions with unique contracts</li>
              <li>Transactions on different days</li>
              <li>Transactions on different months</li>
            </ul>
            <ul style={{ padding: 0, listStyle: 'inside' }}>
              <li>Transaction volume</li>
              <li>Number of transactions</li>
              <li>Transactions on different weeks</li>
              <li>Gas spent</li>
            </ul>
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-600-fs-14'
          >
            <p>For more detailed information, refer to our dashboard.</p>
            <p>Additionally, you can earn points in RubyScore by using the provided referral link.</p>
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
            >
              {`Stay updated by following us on 'X.'`}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            flexDirection: { sx: 'column', sm: 'row', xl: 'column' },
            alignItems: { sx: 'unset', sm: 'flex-start', xl: 'unset' },
            flexWrap: 'wrap',
          }}
        >
          <PoweredBy />
        </Box>
      </Box>
    </Layout>
  );
};
export default Attestation;
