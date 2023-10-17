import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';
import { useAccount } from 'wagmi';
import { copyToClickBoard } from '@/utils/helpers';
import { ILeaderboardUser } from '@/types/index';
import { FC } from 'react';

interface Props {
  user: ILeaderboardUser | null;
}
const UserInfoSection: FC<Props> = ({ user }) => {
  const theme = useCustomTheme();
  const { address } = useAccount();
  const maskedAddress = user && user.wallet.slice(0, 6) + '...' + user.wallet.slice(-6);
  const options = [
    {
      label: 'Points',
      value: user?.score,
    },
    {
      label: 'Max Steak',
      value: user?.maxStreak,
    },
    {
      label: 'Active referrals',
      value: user?.activeReferrals,
    },
  ];
  return (
    <Box
      sx={{
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
        display: 'flex',
        flexDirection: { xs: 'column', xlg: 'row' },
        gap: { xs: '20px', xlg: '0' },
        justifyContent: 'space-between',
        alignItems: { xs: 'unset', xlg: 'center' },
        padding: '30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        <Image
          src={user?.isPremium ? '/asserts/PremiumAvatar.svg' : '/asserts/FreeAvatar.svg'}
          alt='icon'
          width='64'
          height='64'
          style={{
            borderRadius: '5px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
              className='Body-Inter-fw-700-fs-16'
            >
              {user?.name || maskedAddress}
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                height: '24px',
              }}
              onClick={() => copyToClickBoard(address)}
            >
              <CopyIcon fill={theme.palette.white50} />
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: '20px',
              border: `1px solid ${theme.palette.lightGreen}`,
              color: theme.palette.lightGreen,
              background: theme.palette.white10,
              width: 'fit-content',
              padding: '4px 20px 4px 20px',
            }}
            className='Body-Inter-fw-700-fs-16'
          >
            {user?.level} Level
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          gap: { xs: '20px', lg: '0' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {options.map(item => (
            <Box
              key={item.label}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: { xs: 'center', md: 'unset' },
                gap: { xs: '20px', md: 'unset' },
                padding: { xs: 0, md: '0px 56px 0px 56px' },
                '&:first-child': {
                  paddingLeft: '0px',
                },
                '&:last-child': {
                  borderRight: { xs: 'none', lg: `1px solid ${theme.palette.white10}` },
                },
                borderRight: { xs: 'none', md: `1px solid ${theme.palette.white10}` },
              }}
            >
              <Box color={theme.palette.powderWhite} className='Body-Inter-fw-700-fs-16'>
                {item.label}
              </Box>
              <Box color={theme.palette.lightGreen} className='Body-Inter-fw-700-fs-18'>
                {item.value}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingLeft: { xs: '0', lg: '56px' },
            textAlign: 'right',
          }}
        >
          <Box color={theme.palette.powderWhite} className='Body-Inter-fw-700-fs-16'>
            Current Rank
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '5px',
            }}
          >
            <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.lightGreen}>
              {user?.position}
            </Box>
            <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.white50}>
              of {user?.maxPosition}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default UserInfoSection;
