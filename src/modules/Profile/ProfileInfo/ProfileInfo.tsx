import { Box } from '@mui/system';
import UserInfo from '@/modules/Profile/ProfileInfo/UserInfo/UserInfo';
import QuestsInfo from '@/modules/Profile/ProfileInfo/QuestsInfo/QuestsInfo';
import NFTInfo from '@/modules/Profile/ProfileInfo/NFTInfo/NFTInfo';

const ProfileInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: { sx: 'column', sm: 'row', xl: 'column' },
        flexWrap: 'wrap',
        order: { xs: 1, xl: 2 },
      }}
    >
      <UserInfo />
      <QuestsInfo quests={[]} />
      <NFTInfo nft={[]} />
    </Box>
  );
};
export default ProfileInfo;
