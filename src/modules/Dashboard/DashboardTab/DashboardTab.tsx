import { Box } from '@mui/system';
import { FC } from 'react';
import MyLevelSection from '@/components/common/sections/MyLevelSection/MyLevelSection';
import MainInfo from '@/modules/Dashboard/DashboardTab/MainInfo/MainInfo';
import Achievements from '@/modules/Dashboard/DashboardTab/Achievements/Achievements';
import Transactions from '@/modules/Dashboard/DashboardTab/Transactions/Transactions';
import { DashboardTabIndexType } from '@/types/index';
import { useAppSelector } from '@/core/store';

interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}

const DashboardTab: FC<Props> = ({ activeTab }) => {
  const isAuth = useAppSelector(state => state.authState.isAuth);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
      }}
    >
      <MainInfo />
      {isAuth && <MyLevelSection project={activeTab.index} />}
      <Transactions activeTab={activeTab} />
      <Achievements />
    </Box>
  );
};
export default DashboardTab;
