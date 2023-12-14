import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import MainInfoCard from '@/modules/Dashboard/DashboardTab/InfoSection/MainInfo/MainInfoCard/MainInfoCard';
import 'swiper/css';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { getProjectStatistics } from '@/core/thunk/dashboard.thunk';
import { CircularProgress } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { formatCash } from '@/utils/helpers';
import { TooltipMainInfoTransactionVolume, TooltipMainInfoUser } from '@/utils/tooltipsContent';
import TransactionInfo from '@/modules/Dashboard/DashboardTab/InfoSection/TransactionInfo/TransactionInfo';
import { DashboardTabIndexType } from '@/types/index';
import MainInfo from '@/modules/Dashboard/DashboardTab/InfoSection/MainInfo/MainInfo';
import InfoChartSection from '@/modules/Dashboard/DashboardTab/InfoSection/InfoChartSection/InfoChartSection';
interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}
const InfoSection: FC<Props> = ({ activeTab }) => {
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const userTransactionsDates = useAppSelector(state => state.dashboardState.userTransactionsDates);
  const showTransactionsInfo =
    userTransactionsDates &&
    !!userTransactionsDates.first_transaction_time &&
    !!userTransactionsDates.last_transaction_time;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <MainInfo />
      <InfoChartSection activeTab={activeTab} />
      {isAuth && showTransactionsInfo && <TransactionInfo activeTab={activeTab} />}
    </Box>
  );
};
export default InfoSection;
