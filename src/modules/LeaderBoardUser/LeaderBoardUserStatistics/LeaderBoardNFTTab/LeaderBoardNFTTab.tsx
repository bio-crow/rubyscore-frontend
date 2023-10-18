import { Box } from '@mui/system';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import { INFTData } from '@/types/index';

import { v4 as uuidv4 } from 'uuid';
import NFTCard from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardNFTTab/NFTCard/NFTCard';
import { useAppSelector } from '@/core/store';

const LeaderBoardNFTTab = () => {
  const userNFTList = useAppSelector(state => state.userState.userNFTList);
  console.log(userNFTList);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {userNFTList.length > 0 ? (
        <>
          <Box
            sx={{
              flex: '1',
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xlg: '1fr 1fr 1fr 1fr' },
            }}
          >
            {userNFTList.map((data: INFTData) => (
              <NFTCard data={data} key={uuidv4()} />
            ))}
          </Box>
          {/*
          <Box
            sx={{
              alignSelf: 'flex-end',
            }}
          >
            <PrimaryPagination page={1} count={5} variant='outlined' shape='rounded' />
          </Box>*/}
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flex: '1',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          No NFT's unloacked
        </Box>
      )}
    </Box>
  );
};
export default LeaderBoardNFTTab;
