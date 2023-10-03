import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Section1 from '@/components/layout/Layout/Footer/Section1/Section1';
import Section2 from '@/components/layout/Layout/Footer/Section2/Section2';

const Footer = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          maxWidth: '1392px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '0px 15px 0px 15px', xl: 0 },
        }}
      >
        <Section1 />
        <Section2 />
      </Box>
    </Box>
  );
};
export default Footer;
