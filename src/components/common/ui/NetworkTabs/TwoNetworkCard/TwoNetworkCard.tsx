import { Box } from '@mui/system';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import { FC } from 'react';
import NetworkCardWithVote from '@/components/common/ui/NetworkTabs/NetworkCardWithVote/NetworkCardWithVote';

interface Props {
  network1: { label: string; index: DashboardTabIndexType };
  network2: { label: string; index: DashboardTabIndexType };
  activeTab: { index: DashboardTabIndexType; label: string };
  setActiveTab: Function;
}

const TwoNetworkCard: FC<Props> = ({ network1, network2, activeTab, setActiveTab }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {network1 && (
        <NetworkCardWithVote network={network1} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {network2 && (
        <NetworkCardWithVote network={network2} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </Box>
  );
};
export default TwoNetworkCard;
