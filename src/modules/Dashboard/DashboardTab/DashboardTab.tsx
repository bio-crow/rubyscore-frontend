import { Box } from '@mui/system';
import { FC } from 'react';
import MyLevelSection from '@/components/common/sections/MyLevelSection/MyLevelSection';
import MainInfo from '@/modules/Dashboard/DashboardTab/MainInfo/MainInfo';
import Achievements from '@/modules/Dashboard/DashboardTab/Achievements/Achievements';
import Transactions from '@/modules/Dashboard/DashboardTab/Transactions/Transactions';

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
      <Transactions />
      <Achievements />
    </Box>
  );
};
export default DashboardTab;
