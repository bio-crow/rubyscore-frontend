import { Box } from '@mui/system';
import Turnstile, { useTurnstile } from 'react-turnstile';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { copyToClickBoard } from '@/utils/helpers';
import { appRoutes } from '@/constants/routes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomConnectButton from '@/components/common/CustomConnectButton/CustomConnectButton';
import { TooltipAttestationBtn, TooltipVoteBtn } from '@/utils/tooltipsContent';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { claimAttestation } from '@/core/thunk/attestation.thunk';
import { useAccount } from 'wagmi';
import { useState } from 'react';

const VeraxActions = () => {
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const loading = useAppSelector(state => state.authState.loading);
  const { address } = useAccount();
  const [isCaptchaFilled, setIsCaptchaFilled] = useState(false);
  const dispatch = useAppDispatch();
  const attestationPrice = useAppSelector(state => state.attestationState.attestationPrice);
  const attestationData = useAppSelector(state => state.attestationState.attestationData);
  const attestationStatus = useAppSelector(state => state.attestationState.attestationStatus);
  const claimAttestationLoading = useAppSelector(state => state.attestationState.claimAttestationLoading);
  const userScoreList = useAppSelector(state => state.userState.userScoreList);
  const points = userScoreList?.linea?.score;
  const notEnoughPoints = !points || points < 15;
  const theme = useCustomTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const refCode = useAppSelector(state => state.userState.refCode);
  const turnstile = useTurnstile();
  const copyReferralLink = () => {
    refCode && copyToClickBoard(`${window.location.origin}${appRoutes.PROFILE}/?ref=${refCode}`);
  };
  const openDashboard = () => {
    router.push(`${appRoutes.DASHBOARD}?net=linea`);
  };
  const claimAttest = () => {
    if (attestationPrice && attestationData && address) {
      dispatch(
        claimAttestation({
          project: 'linea',
          price: attestationPrice,
          account: address,
          attestationData: attestationData,
        })
      );
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', xlg: 'row' },
        padding: '40px 32px 30px 32px',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '1',
        border: `1px solid ${theme.palette.white10}`,
        background: 'linear-gradient(90deg, #1C1E25 0%, #0A0C0E 47.61%, #0A0C0E 100%)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          flex: '0',
          minWidth: '280px',
          paddingRight: { xs: '0', xlg: '56px' },
          paddingTop: { xs: '20px', xlg: '0' },
          borderTop: { xs: `1px solid ${theme.palette.white10}`, xlg: 'none' },
          borderRight: { xs: 'none', xlg: `1px solid ${theme.palette.white10}` },
        }}
      >
        {attestationStatus ? (
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-600-fs-14'
          >
            Attestation is claimed
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                color: theme.palette.white50,
              }}
              className='Body-Lato-fw-600-fs-14'
            >
              Claim your attestation <br />
              on the RubyScore
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
              className='Body-Lato-fw-800-fs-40'
            >
              <Box
                sx={{
                  color: theme.palette.lightGreen,
                  wordBreak: 'break-all',
                }}
              >
                {attestationPrice || '-'}
              </Box>
              <Box
                sx={{
                  color: theme.palette.white50,
                }}
              >
                ETH
              </Box>
            </Box>
          </Box>
        )}
        {!isAuth && (
          <CustomConnectButton
            Trigger={
              <PrimaryButton variant='contained' size='large' loading={loading}>
                Connect Wallet
              </PrimaryButton>
            }
          />
        )}
        {isAuth &&
          !attestationStatus &&
          (notEnoughPoints ? (
            <CustomTooltip title={<TooltipAttestationBtn />}>
              <Box sx={{ width: 'fit-content' }}>
                <PrimaryButton variant='contained' size='large' disabled>
                  Claim Attestation
                </PrimaryButton>
              </Box>
            </CustomTooltip>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <Box
                sx={{
                  transform: 'scale(0.72)',
                  transformOrigin: '0 0',
                }}
              >
                <Turnstile
                  sitekey='0x4AAAAAAAWPPhORGjHT9RzC'
                  onVerify={token => {
                    /* eslint-disable */
                    console.log(token);
                    if (token) {
                      setIsCaptchaFilled(true);
                    }
                  }}
                />
              </Box>
              <PrimaryButton
                variant='contained'
                size='large'
                disabled={!isCaptchaFilled}
                loading={claimAttestationLoading}
                onClick={claimAttest}
              >
                Claim Attestation
              </PrimaryButton>
            </Box>
          ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          flex: '1',
          paddingLeft: { xs: '0', xlg: '56px' },
          paddingBottom: { xs: '20px', xlg: '0' },
          borderBottom: { xs: `1px solid ${theme.palette.white10}`, xlg: 'none' },
          borderLeft: { xs: 'none', xlg: `1px solid ${theme.palette.white10}` },
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  color: theme.palette.white50,
                }}
                className='Body-Lato-fw-600-fs-14'
              >
                My points
                <br />
                in Linea
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
                className='Body-Lato-fw-800-fs-40'
              >
                <Box
                  sx={{
                    color: theme.palette.lightGreen,
                  }}
                >
                  {points || (points === 0 ? 0 : '-')}
                </Box>
                <Box
                  sx={{
                    color: theme.palette.white50,
                  }}
                >
                  Points
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Image width='260' height='40' src='/asserts/logo.svg' alt='logo' />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: { xs: 'wrap', md: 'unset' },
          }}
        >
          <SecondaryButton variant='contained' size='large' onClick={openDashboard} fullWidth={isXs}>
            My dashboard
          </SecondaryButton>
          {isAuth && (
            <SecondaryButton variant='outlined' size='large' onClick={copyReferralLink} fullWidth={isXs}>
              My referral link
            </SecondaryButton>
          )}
          <SecondaryButton
            variant='outlined'
            size='large'
            fullWidth={isXs}
            /* @ts-expect-error */
            target='_blank'
            href='https://twitter.com/rubyscore_io'
          >
            <Image src='/asserts/x-button.png' alt='icon' width='24' height='24' />
            Follow us
          </SecondaryButton>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '232px',
          height: '216px',
          right: '-100px',
          top: '50px',
          zIndex: '-1',
          transform: 'rotate(90deg)',
          flexShrink: '0',
          borderRadius: '100px',
          background: theme.palette.primaryGradient,
          filter: 'blur(105px)',
        }}
      />
    </Box>
  );
};
export default VeraxActions;
