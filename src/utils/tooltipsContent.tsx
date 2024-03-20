import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import { FC } from 'react';

export const TooltipMyLevelProfile1 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The level increases upon reaching a specific number of points
      </Box>
    </Box>
  );
};
export const TooltipMyLevelProfile2 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Points can increase through various activities:
      </Box>
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        <ul style={{ padding: 0, listStyle: 'inside' }}>
          <li>By completing daily tasks</li>
          <li>By purchasing a free and gold profile</li>
          <li>By completing daily and receiving additional points</li>
          <li>By referring friends and receiving extra points</li>
        </ul>
      </Box>
    </Box>
  );
};
export const TooltipMyLevelDashboard1 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The level increases upon reaching a specific number of points
      </Box>
    </Box>
  );
};
export const TooltipMyLevelDashboard2 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Points can increase through various activities:
      </Box>
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        <ul style={{ padding: 0, listStyle: 'inside' }}>
          <li>Amount on balance</li>
          <li>Transactions with unique contracts</li>
          <li>Transactions on different days</li>
          <li>Transactions on different months</li>
          <li>Transaction volume</li>
          <li>Number of transactions</li>
          <li>Transactions on different weeks</li>
          <li>Gas spent</li>
        </ul>
      </Box>
    </Box>
  );
};

export const TooltipAchievementsBalance = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Ethereum and stablecoins balance
      </Box>
    </Box>
  );
};
export const TooltipAchievementsTransactionVolume = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The total volume of ethereum and popular stablecoins that interacted with smart contracts
      </Box>
    </Box>
  );
};
export const TooltipAchievementsTransactionContract = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The count of interactions with unique contracts
      </Box>
    </Box>
  );
};
export const TooltipAchievementsWallet = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Only outgoing transactions are considered
      </Box>
    </Box>
  );
};
export const TooltipAchievementsDays = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The count of unique days with at least one transaction
      </Box>
    </Box>
  );
};
export const TooltipAchievementsWeeks = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The count of unique weeks with at least one transaction
      </Box>
    </Box>
  );
};
export const TooltipAchievementsMonths = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The count of unique months with at least one transaction
      </Box>
    </Box>
  );
};
export const TooltipAchievementsGas = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The amount of gas spent in $, taking into account failed transactions
      </Box>
    </Box>
  );
};

export const TooltipMainInfoUser = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The number of wallets in the network, not including contracts
      </Box>
    </Box>
  );
};
export const TooltipMainInfoTransactionVolume = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The total volume of ethereum and popular stablecoins that interacted with smart contracts
      </Box>
    </Box>
  );
};
export const TooltipMyLevelCard = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-700-fs-16' color={theme.palette.powderWhite}>
        NFT is available, but start
        <br />
        by claimed the previous ones
      </Box>
    </Box>
  );
};
export const TooltipMyReferral = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Points for active referrals upgrade at 00:00 UTC
      </Box>
    </Box>
  );
};
export const TooltipStreakDays = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Streak days are counted at 00:00 UTC
      </Box>
    </Box>
  );
};
export const TooltipCurrentRank = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Current rank updates once an hour
      </Box>
    </Box>
  );
};
export const TooltipVoteTab = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.red}>
        Chain is experiencing some problems. Get back later
      </Box>
    </Box>
  );
};
export const TooltipVoteBtn: FC<{ isAuth: boolean }> = ({ isAuth }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        {isAuth
          ? `This is a user vote, in which by voting the user interacts with the contract`
          : `You need to authenticate through you wallet`}
      </Box>
    </Box>
  );
};
export const TooltipAttestationBtn = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        Not enough points for claim
      </Box>
    </Box>
  );
};
