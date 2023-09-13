import { Box } from '@mui/system';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return (
    <Box width='100%' flex='1' display='flex' justifyContent='center' bgcolor={`var(--background, #121317)`}>
      <Box maxWidth='1392px' width='100%'>
        {children}
      </Box>
    </Box>
  );
};
export default Content;
