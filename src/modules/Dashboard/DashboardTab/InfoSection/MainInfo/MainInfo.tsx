import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import MainInfoCard from '@/modules/Dashboard/DashboardTab/InfoSection/MainInfo/MainInfoCard/MainInfoCard';
import 'swiper/css';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { formatCash } from '@/utils/helpers';
import { TooltipMainInfoTransactionVolume, TooltipMainInfoUser } from '@/utils/tooltipsContent';
import { DashboardTabIndexType } from '@/types/index';
import { FC } from 'react';
interface Props {
  activeTab: { index: DashboardTabIndexType; label: string };
}
const MainInfo: FC<Props> = ({ activeTab }) => {
  const projectStatistics = useAppSelector(state => state.dashboardState.projectStatistics);
  const data = projectStatistics
    ? [
        {
          value: projectStatistics.user_count.toLocaleString(),
          description: 'Wallets in the network',
          ToolTip: <TooltipMainInfoUser />,
        },
        {
          value: projectStatistics.transaction_count.toLocaleString(),
          description: 'Transactions in the network',
        },
        {
          value: formatCash(projectStatistics.total_value_locked),
          description: 'Total Value Locked',
        },
        ...(activeTab.label !== 'Ethereum'
          ? [
              {
                value: projectStatistics.bridge_transaction_count.toLocaleString(),
                description: 'Transactions through ETH bridge',
              },
            ]
          : []),
        {
          value: formatCash(projectStatistics.total_volume),
          description: 'Transaction volume',
          ToolTip: <TooltipMainInfoTransactionVolume />,
        },
      ]
    : [];
  return (
    <Box>
      <Swiper
        slidesPerView={5}
        loop={false}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1392: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((data: any) => (
          <SwiperSlide key={uuidv4()}>
            <MainInfoCard info={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default MainInfo;
