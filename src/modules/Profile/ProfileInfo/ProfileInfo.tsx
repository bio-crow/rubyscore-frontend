import { Box } from '@mui/system';
import UserInfo from '@/modules/Profile/ProfileInfo/UserInfo/UserInfo';
import QuestsInfo from '@/modules/Profile/ProfileInfo/QuestsInfo/QuestsInfo';
import NFTInfo from '@/modules/Profile/ProfileInfo/NFTInfo/NFTInfo';
import { IQuestCard } from '@/types/index';

const quests: IQuestCard[] = [
  {
    net: {
      icon: '/asserts/net/Base.svg',
      title: 'Base',
    },
    points: 10,
    questTitle: 'Welcome Base Mainnet\n& Onchain Summer',
  },
  {
    net: {
      icon: '/asserts/net/zkSync.svg',
      title: 'zkSync',
    },
    points: 5,
    questTitle: 'Welcome Base Mainnet\n& Onchain',
  },
];
const ProfileInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: { sx: 'column', sm: 'row', xl: 'column' },
        alignItems: { sx: 'unset', sm: 'flex-start', xl: 'unset' },
        flexWrap: 'wrap',
        order: { xs: 1, xl: 2 },
      }}
    >
      <UserInfo />
      <QuestsInfo quests={quests} />
      <NFTInfo nft={[]} />
    </Box>
  );
};
export default ProfileInfo;
