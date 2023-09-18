import { Box } from '@mui/system';
import { FC, ReactNode } from 'react';
import { useCustomTheme } from '../../../../hooks/useCustomTheme';

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        gap: '20px',
        flex: 1,
        paddingTop: { xs: '90px', md: '120px' },
        paddingBottom: { xs: '30px', md: '60px' },
        justifyContent: 'center',
        backgroundColor: theme.palette.backgroundColor,
      }}
    >
      <Box
        sx={{
          maxWidth: '1392px',
          width: '100%',
          padding: { xs: '0px 15px 0px 15px', xl: 0 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default Content;
