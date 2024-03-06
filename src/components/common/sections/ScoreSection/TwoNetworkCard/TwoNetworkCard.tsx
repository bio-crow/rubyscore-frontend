import { Box } from '@mui/system';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import { FC } from 'react';
import NetworkCardWithVote from '@/components/common/ui/NetworkTabs/NetworkCardWithVote/NetworkCardWithVote';
import NetworkCard from '@/components/common/sections/ScoreSection/NetworkCard/NetworkCard';

interface Props {
  network1: IScoreNetwork;
  network2: IScoreNetwork;
  selectable?: boolean;
  activeTab?: { index: DashboardTabIndexType; label: string };
  onSelect?: Function;
}

const TwoNetworkCard: FC<Props> = ({ network1,network2, selectable, activeTab, onSelect}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {network1 &&     <NetworkCard
        network={network1}
        selectable={selectable}
        activeTab={activeTab}
        onSelect={onSelect}
      />}
      {network2 &&     <NetworkCard
        network={network2}
        selectable={selectable}
        activeTab={activeTab}
        onSelect={onSelect}
      />}
    </Box>
  );
};
export default TwoNetworkCard;
