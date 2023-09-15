import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import ThirdlyButton from '@/components/common/ui/ThirdlyButton/ThirdlyButton';

const UserInfo = () => {
  const userName = null;
  const isNew = !userName;
  const isPro = false;
  const isClaimed = !!userName && !isPro;

  const theme = useCustomTheme();
  const { address } = useAccount();
  const maskedAddress = address && address.slice(0, 6) + '...' + address.slice(-6);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        width: { xs: '100%', sm: '333px' },
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Image
        src='/asserts/emptyUserIcon.svg'
        width={isClaimed ? '90' : '40'}
        height={isClaimed ? '90' : '40'}
        alt='icon'
      />
      {isNew && (
        <Box flex='1' className='profile-Lato-fw-700-fs-20'>
          {maskedAddress}
        </Box>
      )}
      {isClaimed && (
        <Box flex='1' display='flex' flexDirection='column' gap='10px'>
          <Box className='profile-Lato-fw-700-fs-20'>{userName}</Box>
          <ThirdlyButton
            style={{ padding: '12px 12px 12px 12px' }}
            variant='contained'
            size='large'
            startIcon={<Image src='/asserts/crownBlack.png' alt='icon' height='24' width='24' />}
            fullWidth
          >
            Upgrade Profile
          </ThirdlyButton>
        </Box>
      )}
      {isPro && (
        <Box flex='1' display='flex' gap='10px' alignItems='center'>
          <Image src='/asserts/crownGold.png' alt='icon' height='24' width='24' />
          <Box flex='1' className='profile-Lato-fw-700-fs-20' color='#F2BD36'>
            {userName}
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default UserInfo;
