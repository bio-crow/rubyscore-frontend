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
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        gap: '20px',
        overflow: 'hidden',
        flex: 1,
        paddingTop: { xs: '90px', md: '120px' },
        paddingBottom: { xs: '30px', md: '60px' },
        justifyContent: 'center',
        backgroundColor: theme.palette.backgroundColor,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '1392px',
          overflow: 'visible',
          width: '100%',
          flex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default Content;
