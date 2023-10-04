import { Box } from '@mui/system';
import Layout from '@/components/layout/Layout/Layout';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useRouter } from 'next/navigation';
import Section1 from '@/modules/Landing/Section1/Section1';
import Section2 from '@/modules/Landing/Section2/Section2';
import Section3 from '@/modules/Landing/Section3/Section3';
import Section4 from '@/modules/Landing/Section4/Section4';
import Section5 from '@/modules/Landing/Section5/Section5';
import Section6 from '@/modules/Landing/Section6/Section6';
import Image from 'next/image';
import bg from '../../../public/asserts/landing/landing-section6-bg1.png';
const Landing = () => {
  const theme = useCustomTheme();
  const router = useRouter();
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '150px', md: '200px' },
          padding: { xs: '0px 0px 80px 0px', md: '40px 0px 180px 0px' },
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-25vw',
            left: 'calc((100% - 100vw) / 2)',
            zIndex: '-1',
            width: '100vw',
            aspectRatio: '1512/902',
          }}
        >
          <Image src='/asserts/landing/landing-section6-bg1.png' alt='bg' fill />
        </Box>
      </Box>
    </Layout>
  );
};
export default Landing;
