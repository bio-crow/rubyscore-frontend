import { Box } from '@mui/system';
import Header from '@/components/Layout/Header/Header';
import Content from '@/components/Layout/Content/Content';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <Header />
      <Content>{children}</Content>
    </Box>
  );
};
export default Layout;
