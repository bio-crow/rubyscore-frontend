'use client';
import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import ReferralTable from '@/modules/Profile/ReferralLinks/ReferralTable/ReferralTable';
import { useAppSelector } from '@/core/store';
import { copyToClickBoard } from '@/utils/helpers';
import { appRoutes } from '@/constants/routes';

const ReferralLinks = () => {
  const theme = useCustomTheme();
  const refCode = useAppSelector(state => state.userState.refCode);
  const referrals = useAppSelector(state => state.userState.referrals);
  const copyReferralLink = () => {
    refCode && copyToClickBoard(`${window.location.origin}${appRoutes.PROFILE}/?ref=${refCode}`);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: '20px',
          alignItems: 'flex-start',
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
              color: theme.palette.powderWhite,
            }}
            className='H1-Lato-fw-700-fs-32'
          >
            Referral links
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-800-fs-18'
          >
            Points are only awarded for active users
          </Box>
        </Box>
        <SecondaryButton variant='outlined' size='large' onClick={copyReferralLink}>
          My referral link
        </SecondaryButton>
      </Box>
      <ReferralTable data={referrals} />
    </Box>
  );
};
export default ReferralLinks;
