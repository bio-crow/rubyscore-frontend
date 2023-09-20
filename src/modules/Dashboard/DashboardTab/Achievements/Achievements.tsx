import { Box } from '@mui/system';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import RefreshIcon from '@/components/common/Icons/RefreshIcon';
import { mokeAchievements } from '@/modules/Dashboard/DashboardTab/mokeAchievements';
import AchievementCard from '@/modules/Dashboard/DashboardTab/Achievements/AchievementCard/AchievementCard';
const Achievements = () => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
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
          alignItems: { xs: 'unset', md: 'center' },
          gap: '20px',
          justifyContent: 'space-between',
        }}
      >
        <Box className='H1-Lato-fw-700-fs-32' color={theme.palette.powderWhite}>
          Achievements
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '20px',
          }}
        >
          <SecondaryButton
            startIcon={<RefreshIcon fill={theme.palette.powderWhite} />}
            variant='outlined'
            size='large'
            fullWidth={!isSm}
          >
            Refresh
          </SecondaryButton>
          <SecondaryButton variant='contained' size='large' fullWidth={!isSm}>
            Claim all
          </SecondaryButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: '20px',
        }}
      >
        {mokeAchievements.map(item => (
          <AchievementCard key={item.description} data={item} />
        ))}
      </Box>
    </Box>
  );
};
export default Achievements;
