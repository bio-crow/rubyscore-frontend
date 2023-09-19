import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';
import { useAccount } from 'wagmi';
const options = [
  {
    label: 'Points',
    value: 1,
  },
  {
    label: 'Max Steak',
    value: 2,
  },
  {
    label: 'Active referrals',
    value: 3,
  },
];
const LeaderboardTabInfo = () => {
  const theme = useCustomTheme();
  const { address } = useAccount();
  const maskedAddress = address && address.slice(0, 6) + '...' + address.slice(-6);
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
        <Image src='/asserts/emptyUserIcon.svg' alt='icon' width='64' height='64' />
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
              {maskedAddress}
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                height: '24px',
              }}
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
            0 Level
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
              3 456 556
            </Box>
            <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.white50}>
              of 3 456 556
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LeaderboardTabInfo;
