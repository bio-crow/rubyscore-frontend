import { Box } from '@mui/system';
import { FC } from 'react';
import MyLevelSection from '@/components/common/MyLevelSection/MyLevelSection';
import MainInfo from '@/modules/Dashboard/DashboardTab/MainInfo/MainInfo';
import TransactionInfo from '@/modules/Dashboard/DashboardTab/TransactionInfo/TransactionInfo';

interface Props {
  title: string;
}

const DashboardTab: FC<Props> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
      }}
    >
      <MainInfo />
      <MyLevelSection />
      <TransactionInfo />
    </Box>
  );
};
export default DashboardTab;
