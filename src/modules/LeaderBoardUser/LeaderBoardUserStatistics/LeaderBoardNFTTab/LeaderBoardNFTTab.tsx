import { Box } from '@mui/system';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import { INFTCard } from '@/types/index';

import { v4 as uuidv4 } from 'uuid';
import { mokeNFTData } from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardNFTTab/mokeNFTData';
import NFTCard from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardNFTTab/NFTCard/NFTCard';

const LeaderBoardNFTTab = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          flex: '1',
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xlg: '1fr 1fr 1fr 1fr' },
        }}
      >
        {mokeNFTData.map((data: INFTCard) => (
          <NFTCard data={data} key={uuidv4()} />
        ))}
      </Box>
      <Box
        sx={{
          alignSelf: 'flex-end',
        }}
      >
        <PrimaryPagination page={1} count={5} variant='outlined' shape='rounded' />
      </Box>
    </Box>
  );
};
export default LeaderBoardNFTTab;
