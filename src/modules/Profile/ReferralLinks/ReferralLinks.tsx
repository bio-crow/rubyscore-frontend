'use client';
import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import ReferralTable from '@/modules/Profile/ReferralLinks/ReferralTable/ReferralTable';
import { useAppSelector } from '@/core/store';
import { copyToClickBoard } from '@/utils/helpers';
import { appRoutes } from '@/constants/routes';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { TooltipMyReferral } from '@/utils/tooltipsContent';

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
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
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
            <CustomTooltip title={<TooltipMyReferral />}>
              <Box
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <InfoIcon fill={theme.palette.white50} />
              </Box>
            </CustomTooltip>
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-800-fs-18'
          >
            10 points are awarded only for active referrals that have a minimum of 1 level
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
