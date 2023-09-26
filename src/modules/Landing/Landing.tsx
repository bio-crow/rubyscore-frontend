import { Box } from '@mui/system';
import Layout from '@/components/layout/Layout/Layout';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useRouter } from 'next/navigation';
import { appRoutes } from '@/constants/routes';

const Landing = () => {
  const theme = useCustomTheme();
  const router = useRouter();
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          paddingTop: '40px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '750px',
              textAlign: 'center',
              color: theme.palette.powderWhite,
            }}
            className='Body-Lato-fw-900-fs-64'
          >
            Know Your Account Track Your Web3 Journey
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '729px',
              textAlign: 'center',
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-500-fs-24'
          >
            Provide users with insights into their engagement and value on Web3 and explore new opportunities
          </Box>
          <Box>
            <PrimaryButton variant='contained' size='large' onClick={() => router.push(appRoutes.DASHBOARD)}>
              Launch App
            </PrimaryButton>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default Landing;
